/**
 * Proxy configuration utilities for Element Desktop.
 *
 * This module is written defensively so that importing it (or calling applyProxyConfig)
 * in a pure Node.js context (e.g. build / maintenance scripts run with ts-node/tsx)
 * will silently no-op instead of throwing Electron lifecycle errors.
 */

export interface DesktopProxyConfig {
    mode: "system" | "direct" | "custom";
    scheme?: "socks5" | "socks5h" | "http" | "https";
    host?: string;
    port?: number;
    username?: string;
    password?: string;
    bypass?: string; // comma or semicolon separated list
}

type ElectronFixedConfig = {
    mode: "system" | "direct" | "fixed_servers";
    proxyRules?: string;
    proxyBypassRules?: string;
};

let lastApplied: DesktopProxyConfig | undefined;

export function getLastAppliedConfig(): DesktopProxyConfig | undefined {
    return lastApplied;
}

/**
 * Apply the given proxy configuration.
 * - If not running under Electron (process.versions.electron undefined) => no-op.
 * - If Electron app not ready yet => waits for app.whenReady().
 * - Errors are caught & logged; they do not throw.
 */
export async function applyProxyConfig(config?: Partial<DesktopProxyConfig>): Promise<void> {
    try {
        if (!config) {
            // Nothing to do (treat as system default).
            config = { mode: "system" };
        }

        // Not an Electron runtime (e.g. node/tsx script) -> ignore silently.
        if (!process.versions.electron) {
            return;
        }

        // Dynamically import only after confirming Electron environment.
        const { app, session } = await import("electron");

        if (!app.isReady()) {
            // Wait until ready; this covers early invocations from main process bootstrap.
            await app.whenReady();
        }

        const normalized = normalizeConfig(config);
        const electronCfg = toElectronProxyConfig(normalized);

        // Avoid re-applying identical config (cheap equality check).
        if (lastApplied && shallowEqual(normalized, lastApplied)) {
            return;
        }

        await session.defaultSession.setProxy(electronCfg as any);
        lastApplied = normalized;
    } catch (err) {
        console.error("Failed to apply proxy config:", err);
    }
}

function normalizeConfig(cfg: Partial<DesktopProxyConfig>): DesktopProxyConfig {
    if (cfg.mode === "custom") {
        return {
            mode: "custom",
            scheme: cfg.scheme || "http",
            host: cfg.host || "",
            port: cfg.port,
            username: cfg.username,
            password: cfg.password,
            bypass: cfg.bypass,
        };
    }
    if (cfg.mode === "direct") {
        return { mode: "direct" };
    }
    return { mode: "system" };
}

function toElectronProxyConfig(cfg: DesktopProxyConfig): ElectronFixedConfig {
    if (cfg.mode === "system") {
        return { mode: "system" };
    }
    if (cfg.mode === "direct") {
        return { mode: "direct" };
    }
    // custom
    const parts: string[] = [];
    if (cfg.host && cfg.port) {
        let auth = "";
        if (cfg.username) {
            auth = encodeURIComponent(cfg.username);
            if (cfg.password) {
                auth += ":" + encodeURIComponent(cfg.password);
            }
            auth += "@";
        }
        // Build rule like: scheme=scheme://authhost:port
        // Electron accepts a single URL or comma-separated protocol=... pairs.
        const scheme = cfg.scheme || "http";
        parts.push(`${scheme}=${scheme}://${auth}${cfg.host}:${cfg.port}`);
    }

    const proxyRules = parts.join(",");
    const proxyBypassRules = (cfg.bypass || "")
        .split(/[,;]/)
        .map((s) => s.trim())
        .filter(Boolean)
        .join(",");

    return {
        mode: "fixed_servers",
        proxyRules: proxyRules || undefined,
        proxyBypassRules: proxyBypassRules || undefined,
    };
}

function shallowEqual(a: DesktopProxyConfig, b: DesktopProxyConfig): boolean {
    const keys = new Set([...Object.keys(a), ...Object.keys(b)]);
    for (const k of keys) {
        if ((a as any)[k] !== (b as any)[k]) return false;
    }
    return true;
}
