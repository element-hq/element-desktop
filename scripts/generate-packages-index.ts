#!/usr/bin/env -S npx ts-node

import { S3Client, ListObjectsV2Command, PutObjectCommand, _Object } from "@aws-sdk/client-s3";

const HIDDEN_FILES = [
    "/styles.css",
    "/logo.svg",
    ".DS_Store",
    "index.html",
    "/fonts/",
    "/tools/",
    "/nginx-theme/",
    ".~tmp~/",
    "msi/",
];

const Bucket = "packages-element-io";

if (!process.env.CF_R2_ACCESS_KEY_ID || !process.env.CF_R2_TOKEN || !process.env.CF_R2_S3_API) {
    console.error("Missing environment variables `CF_R2_ACCESS_KEY_ID`, `CF_R2_TOKEN`, `CF_R2_S3_API`");
    process.exit(1);
}

const client = new S3Client({
    region: "auto",
    endpoint: process.env.CF_R2_S3_API,
    credentials: {
        accessKeyId: process.env.CF_R2_ACCESS_KEY_ID,
        secretAccessKey: process.env.CF_R2_TOKEN,
    },
});

const templateLayout = (content: string): string => `
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="IE=edge">
        <title>packages.element.io</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="/styles.css">
    </head>
    <body>
        <nav class="nav">
            <a href="https://element.io/" class="logo">
                <img src="/logo.svg" height="30" />
            </a>
            <input class="menu-btn" type="checkbox" id="menu-btn" />
            <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
            <ul class="menu">
                <li><a href="https://element.io/about">About</a></li>
                <li><a href="https://element.io/enterprise/collaboration-features">Features</a></li>
                <li><a href="https://element.io/help">Help</a></li>
                <li><a href="https://element.io/open-source">Open Source</a></li>
                <li><a href="https://element.io/get-started" class="primary">Get Started</a></li>
            </ul>
        </nav>
    
        <h1>Browse files &amp; directories<span style="color:#0DBD8B;">.</span></h1>
        
        ${content}

        <div id="raw_include_README_md"></div>
        <footer>
            <p>© 2022 New Vector Ltd.</p>
            <p><a href="https://element.io/privacy">Privacy</a></p>
            <p><a href="https://element.io/legal">Legal</a></p>
        </footer>
    </body>
</html>
`;

/**
 * Format bytes as human-readable text.
 * https://stackoverflow.com/a/14919494
 *
 * @param bytes Number of bytes.
 * @param si True to use metric (SI) units, aka powers of 1000. False to use
 *           binary (IEC), aka powers of 1024.
 * @param dp Number of decimal places to display.
 *
 * @return Formatted string.
 */
function humanFileSize(bytes: number, si = false, dp = 1): string {
    const thresh = si ? 1000 : 1024;

    if (Math.abs(bytes) < thresh) {
        return bytes + " B";
    }

    const units = si
        ? ["kB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]
        : ["KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"];
    let u = -1;
    const r = 10 ** dp;

    do {
        bytes /= thresh;
        ++u;
    } while (Math.round(Math.abs(bytes) * r) / r >= thresh && u < units.length - 1);

    return bytes.toFixed(dp) + " " + units[u];
}

const dateTimeOptions: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "numeric",
};

function indexLayout(prefix: string, files: _Object[], dirs: string[]): string {
    const rows: [link: string, name: string, size?: number, date?: Date][] = [];

    if (prefix) {
        rows.push(["../index.html", "Parent directory/"]);
    }

    for (const dir of dirs) {
        if (HIDDEN_FILES.includes(`${prefix}/${dir}/`) || HIDDEN_FILES.includes(`${dir}/`)) continue;
        rows.push([`${dir}/index.html`, dir]);
    }

    for (const file of files) {
        if (
            !file.Key ||
            HIDDEN_FILES.includes(`/${file.Key}`) ||
            HIDDEN_FILES.includes(file.Key.slice(file.Key.lastIndexOf("/") + 1))
        ) {
            continue;
        }
        const name = file.Key.slice(prefix.length);
        rows.push([name, name, file.Size, file.LastModified]);
    }

    return templateLayout(`
<div>/${prefix}</div>
<table id="list">
    <thead>
        <tr>
            <th style="width:55%">File Name</th>
            <th style="width:20%">File Size</th>
            <th style="width:25%">Date</th>
        </tr>
    </thead>
    <tbody>
        ${rows
            .map(
                ([link, name, size, date]) => `<tr>
            <td class="link"><a href="${link}">${name}</a></td>
            <td class="size">${size ? humanFileSize(size) : "-"}</td>
            <td class="date">${date?.toLocaleString("en-GB", dateTimeOptions) ?? "-"}</td>
        </tr>`,
            )
            .join("")}
    </tbody>
</table>
    `);
}

async function generateIndex(Prefix: string): Promise<{
    files: _Object[];
    dirs: string[];
}> {
    console.info(`Generating index for prefix '${Prefix}'`);
    const command = new ListObjectsV2Command({
        Bucket,
        Delimiter: "/",
        Prefix,
    });

    const listResponse = await client.send(command);
    const files = listResponse.Contents ?? [];
    const dirs =
        (listResponse.CommonPrefixes?.map((p) => p.Prefix?.slice(Prefix.length).split("/", 2)[0]).filter(
            Boolean,
        ) as string[]) ?? [];
    const Body = indexLayout(Prefix, files, dirs);

    await client.send(
        new PutObjectCommand({
            Body,
            Bucket,
            ContentType: "text/html",
            Key: Prefix + "index.html",
        }),
    );

    return { files, dirs };
}

async function generateIndexRecursive(Prefix = ""): Promise<void> {
    const { dirs } = await generateIndex(Prefix);
    for (const dir of dirs) {
        await generateIndexRecursive(Prefix + dir + "/");
    }
}

async function generateIndexList(prefixes: string[]): Promise<void> {
    for (const prefix of prefixes) {
        await generateIndex(prefix);
    }
}

const args = process.argv.slice(2);
if (args.length) {
    generateIndexList(args);
} else {
    generateIndexRecursive();
}
