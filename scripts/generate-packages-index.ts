#!/usr/bin/env ts-node

import { S3Client, ListObjectsV2Command, PutObjectCommand } from "@aws-sdk/client-s3";
import { _Object } from "@aws-sdk/client-s3/dist-types/models/models_0";

const HIDDEN_FILES = [
    "/README.md",
    "/styles.css",
    "/fonts",
];

const ENDPOINT = "https://38d82bbf04933a69b6fa014cf747f8dd.r2.cloudflarestorage.com/";
const Bucket = "packages-element-io";

if (!process.env.CF_R2_ACCESS_KEY_ID || !process.env.CF_R2_TOKEN) {
    console.error("Missing environment variables `CF_R2_ACCESS_KEY_ID`, `CF_R2_TOKEN`");
    process.exit(1);
}

const client = new S3Client({
    region: "auto",
    endpoint: ENDPOINT,
    credentials: {
        accessKeyId: process.env.CF_R2_ACCESS_KEY_ID,
        secretAccessKey: process.env.CF_R2_TOKEN,
    },
});

const templateLayout = (content: string) => `
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
        <!--
        header.html
        © 2015-18, Lilian Besson (Naereen) and contributors,
        open-sourced under the MIT License, https://lbesson.mit-license.org/
        hosted on GitHub, https://GitHub.com/Naereen/Nginx-Fancyindex-Theme
        -->
        <nav class="nav">
            <a href="https://element.io/" class="logo">
                <svg height="32" viewBox="0 0 148 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="m16 32c8.8366 0 16-7.1634 16-16 0-8.8366-7.1634-16-16-16-8.8366 0-16 7.1634-16 16 0 8.8366 7.1634 16 16 16z" clip-rule="evenodd" fill="#0DBD8B" fill-rule="evenodd"/>
                    <path d="m13.075 7.455c0-0.64584 0.5247-1.1694 1.1718-1.1694 4.3865 0 7.9424 3.5485 7.9424 7.9259 0 0.6458-0.5247 1.1694-1.1718 1.1694-0.6472 0-1.1719-0.5236-1.1719-1.1694 0-3.0857-2.5066-5.5871-5.5987-5.5871-0.6471 0-1.1718-0.52355-1.1718-1.1694z" clip-rule="evenodd" fill="#fff" fill-rule="evenodd"/>
                    <path d="m24.542 13.041c0.6472 0 1.1719 0.5236 1.1719 1.1694 0 4.3773-3.5559 7.9259-7.9424 7.9259-0.6472 0-1.1718-0.5236-1.1718-1.1694 0-0.6459 0.5246-1.1694 1.1718-1.1694 3.0921 0 5.5987-2.5014 5.5987-5.5871 0-0.6458 0.5247-1.1694 1.1718-1.1694z" clip-rule="evenodd" fill="#fff" fill-rule="evenodd"/>
                    <path d="m18.944 24.544c0 0.6459-0.5247 1.1694-1.1719 1.1694-4.3864 0-7.9423-3.5485-7.9423-7.9258 0-0.6459 0.52461-1.1694 1.1718-1.1694s1.1718 0.5235 1.1718 1.1694c0 3.0856 2.5067 5.587 5.5987 5.587 0.6472 0 1.1719 0.5236 1.1719 1.1694z" clip-rule="evenodd" fill="#fff" fill-rule="evenodd"/>
                    <path d="m7.4576 18.957c-0.64719 0-1.1718-0.5235-1.1718-1.1694 0-4.3773 3.5559-7.9258 7.9424-7.9258 0.6472 0 1.1718 0.52352 1.1718 1.1694 0 0.6458-0.5246 1.1694-1.1718 1.1694-3.0921 0-5.5987 2.5014-5.5987 5.587 0 0.6459-0.52464 1.1694-1.1718 1.1694z" clip-rule="evenodd" fill="#fff" fill-rule="evenodd"/>
                    <path d="m56.286 18.143h-11.286c0.1333 1.1809 0.5619 2.1238 1.2857 2.8286 0.7238 0.6857 1.6762 1.0285 2.8572 1.0285 0.7809 0 1.4857-0.1905 2.1142-0.5714 0.6286-0.381 1.0762-0.8952 1.3429-1.5429h3.4286c-0.4572 1.5048-1.3143 2.7238-2.5715 3.6572-1.2381 0.9143-2.7047 1.3714-4.4 1.3714-2.2095 0-4-0.7333-5.3714-2.2-1.3524-1.4667-2.0286-3.3238-2.0286-5.5714 0-2.1905 0.6858-4.0286 2.0572-5.5143s3.1428-2.2286 5.3143-2.2286c2.1714 0 3.9238 0.73338 5.2571 2.2 1.3524 1.4476 2.0286 3.2762 2.0286 5.4857l-0.0286 1.0572zm-7.2571-5.9714c-1.0667 0-1.9524 0.3142-2.6572 0.9428-0.7047 0.6286-1.1428 1.4667-1.3143 2.5143h7.8858c-0.1524-1.0476-0.5715-1.8857-1.2572-2.5143s-1.5714-0.9428-2.6571-0.9428z"/>
                    <path d="m58.654 20.143v-17h3.4v17.057c0 0.7619 0.4191 1.1429 1.2572 1.1429l0.6-0.0286v3.2286c-0.3238 0.0571-0.6667 0.0857-1.0286 0.0857-1.4667 0-2.5429-0.3714-3.2286-1.1143-0.6666-0.7428-1-1.8667-1-3.3714z"/>
                    <path d="m79.746 18.143h-11.286c0.1334 1.1809 0.5619 2.1238 1.2857 2.8286 0.7238 0.6857 1.6762 1.0285 2.8572 1.0285 0.7809 0 1.4857-0.1905 2.1143-0.5714 0.6285-0.381 1.0762-0.8952 1.3428-1.5429h3.4286c-0.4571 1.5048-1.3143 2.7238-2.5714 3.6572-1.2381 0.9143-2.7048 1.3714-4.4 1.3714-2.2096 0-4-0.7333-5.3715-2.2-1.3523-1.4667-2.0285-3.3238-2.0285-5.5714 0-2.1905 0.6857-4.0286 2.0571-5.5143s3.1429-2.2286 5.3143-2.2286 3.9238 0.73338 5.2571 2.2c1.3524 1.4476 2.0286 3.2762 2.0286 5.4857l-0.0286 1.0572zm-7.2571-5.9714c-1.0667 0-1.9524 0.3142-2.6571 0.9428-0.7048 0.6286-1.1429 1.4667-1.3143 2.5143h7.8857c-0.1524-1.0476-0.5714-1.8857-1.2572-2.5143-0.6857-0.6286-1.5714-0.9428-2.6571-0.9428z"/>
                    <path d="m95.085 16.057v8.5143h-3.4v-8.8858c0-2.2476-0.9334-3.3714-2.8-3.3714-1.0096 0-1.8191 0.3238-2.4286 0.9714-0.5905 0.6477-0.8857 1.5334-0.8857 2.6572v8.6286h-3.4v-14.829h3.1428v1.9714c0.3619-0.6667 0.9143-1.219 1.6572-1.6571 0.7428-0.43813 1.6666-0.65718 2.7714-0.65718 2.0572 0 3.5429 0.78098 4.4572 2.3429 1.2571-1.5619 2.9333-2.3429 5.0285-2.3429 1.7329 0 3.0669 0.54286 3.9999 1.6286 0.933 1.0667 1.4 2.4762 1.4 4.2286v9.3143h-3.4v-8.8858c0-2.2476-0.933-3.3714-2.7999-3.3714-1.0285 0-1.8476 0.3333-2.4571 1-0.5905 0.6476-0.8857 1.5619-0.8857 2.7429z"/>
                    <path d="m121.54 18.143h-11.286c0.133 1.1809 0.562 2.1238 1.286 2.8286 0.724 0.6857 1.676 1.0285 2.857 1.0285 0.781 0 1.486-0.1905 2.114-0.5714 0.629-0.381 1.076-0.8952 1.343-1.5429h3.429c-0.457 1.5048-1.315 2.7238-2.572 3.6572-1.238 0.9143-2.704 1.3714-4.4 1.3714-2.209 0-4-0.7333-5.371-2.2-1.353-1.4667-2.029-3.3238-2.029-5.5714 0-2.1905 0.686-4.0286 2.057-5.5143 1.372-1.4857 3.143-2.2286 5.315-2.2286 2.171 0 3.924 0.73338 5.257 2.2 1.352 1.4476 2.028 3.2762 2.028 5.4857l-0.028 1.0572zm-7.257-5.9714c-1.067 0-1.953 0.3142-2.657 0.9428-0.705 0.6286-1.143 1.4667-1.315 2.5143h7.886c-0.152-1.0476-0.571-1.8857-1.257-2.5143s-1.572-0.9428-2.657-0.9428z"/>
                    <path d="m127.1 9.7426v1.9714c0.343-0.6476 0.905-1.1905 1.686-1.6286 0.8-0.45711 1.762-0.68568 2.886-0.68568 1.752 0 3.104 0.53334 4.057 1.6 0.971 1.0667 1.457 2.4857 1.457 4.2572v9.3143h-3.4v-8.8858c0-1.0476-0.248-1.8666-0.743-2.4571-0.476-0.6095-1.21-0.9143-2.2-0.9143-1.086 0-1.943 0.3238-2.571 0.9714-0.61 0.6477-0.915 1.5429-0.915 2.6858v8.6h-3.4v-14.829h3.143z"/>
                    <path d="m147.12 21.543v2.9428c-0.42 0.1143-1.01 0.1715-1.772 0.1715-2.895 0-4.343-1.4572-4.343-4.3715v-7.8285h-2.257v-2.7143h2.257v-3.8571h3.4v3.8571h2.772v2.7143h-2.772v7.4857c0 1.1619 0.553 1.7428 1.657 1.7428l1.058-0.1428z"/>
                </svg>
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
<!--
Based on: footer.html
© 2015-18, Lilian Besson (Naereen) and contributors,
open-sourced under the MIT License, https://lbesson.mit-license.org/
hosted on GitHub, https://GitHub.com/Naereen/Nginx-Fancyindex-Theme
-->
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
function humanFileSize(bytes: number, si = false, dp = 1) {
    const thresh = si ? 1000 : 1024;

    if (Math.abs(bytes) < thresh) {
        return bytes + ' B';
    }

    const units = si
        ? ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
        : ['KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];
    let u = -1;
    const r = 10**dp;

    do {
        bytes /= thresh;
        ++u;
    } while (Math.round(Math.abs(bytes) * r) / r >= thresh && u < units.length - 1);

    return bytes.toFixed(dp) + ' ' + units[u];
}

function indexLayout(prefix: string, files: _Object[], dirs: string[]): string {
    const rows: [link: string, name: string, size?: number, date?: Date][] = [];

    if (prefix) {
        rows.push(["../index.html", "Parent directory/"]);
    }

    for (const dir of dirs) {
        if (HIDDEN_FILES.includes(`${prefix}/${dir}`)) continue;
        rows.push([`${dir}/index.html`, dir]);
    }

    for (const file of files) {
        if (!file.Key || HIDDEN_FILES.includes(file.Key)) continue;
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
        ${rows.map(([link, name, size, date]) => `<tr>
            <td class="link"><a href="${link}">${name}</a></td>
            <td class="size">${size ? humanFileSize(size) : "-"}</td>
            <td class="date">${date?.toLocaleString() ?? "-"}</td>
        </tr>`).join("")}
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
    const dirs = listResponse.CommonPrefixes
        ?.map(p => p.Prefix?.slice(Prefix.length).split("/", 2)[0])
        .filter(Boolean) as string[] ?? [];
    const Body = indexLayout(Prefix, files, dirs);

    await client.send(new PutObjectCommand({
        Body,
        Bucket,
        ContentType: "text/html",
        Key: Prefix + "index.html",
    }));

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
