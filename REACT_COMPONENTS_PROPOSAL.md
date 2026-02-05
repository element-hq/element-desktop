This component handles the UI logic, form validation, and communicates with the Electron backend.

```tsx
import React, { useState, useEffect } from "react";
import {
    Modal,
    Button,
    Heading,
    Text,
    Field,
    Label,
    Toggle, // Or RadioGroup if available in Compound
    Input,
    Separator,
} from "@vector-im/compound-web"; 
// Note: Imports above are illustrative. Adjust based on actual Compound exports.

interface ProxyConfig {
    mode: "system" | "direct" | "custom";
    scheme?: string;
    host?: string;
    port?: number;
    username?: string;
    password?: string;
    bypass?: string;
}

export const NetworkProxyModal: React.FC<{
    onClose: () => void;
}> = ({ onClose }) => {
    const [config, setConfig] = useState<ProxyConfig>({ mode: "system" });
    const [originalConfig, setOriginalConfig] = useState<ProxyConfig>({ mode: "system" });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Initial Load
    useEffect(() => {
        async function load() {
             try {
                // Access the electron API exposed in preload
                // Assuming window.electron.getSettingValue is available
                const stored = await window.electron.getSettingValue("desktopProxyConfig");
                const initial = stored || { mode: "system" };
                setConfig(initial);
                setOriginalConfig(initial);
             } catch (e) {
                 console.error("Failed to load proxy settings", e);
                 setError("Could not load current settings.");
             } finally {
                 setLoading(false);
             }
        }
        load();
    }, []);

    const hasChanges = JSON.stringify(config) !== JSON.stringify(originalConfig);
    const valid = config.mode !== 'custom' || (!!config.host && !!config.port);

    const handleSave = async () => {
        try {
            setLoading(true);
            await window.electron.setSettingValue("desktopProxyConfig", config);
            onClose();
        } catch (e) {
            setError("Failed to save settings.");
            setLoading(false);
        }
    };

    const update = (patch: Partial<ProxyConfig>) => setConfig(prev => ({ ...prev, ...patch }));

    if (loading) return <Modal><Text>Loading...</Text></Modal>;

    return (
        <Modal
            title="Network Proxy"
            onClose={onClose}
            footer={
                <>
                    <Button variant="secondary" onClick={onClose}>Cancel</Button>
                    <Button 
                        variant="primary" 
                        disabled={!hasChanges || !valid} 
                        onClick={handleSave}
                    >
                        Save
                    </Button>
                </>
            }
        >
            <div className="proxy-modal-content">
                <Heading size="md">Connection mode</Heading>
                
                {/* Mode Selection */}
                <div className="mode-selection">
                   <label>
                       <input 
                           type="radio" 
                           checked={config.mode === 'system'} 
                           onChange={() => update({ mode: 'system' })} 
                       />
                       <Text as="span">Use system proxy settings</Text>
                   </label>
                   <label>
                       <input 
                           type="radio" 
                           checked={config.mode === 'direct'} 
                           onChange={() => update({ mode: 'direct' })} 
                       />
                       <Text as="span">No proxy (direct connection)</Text>
                   </label>
                   <label>
                       <input 
                           type="radio" 
                           checked={config.mode === 'custom'} 
                           onChange={() => update({ mode: 'custom' })} 
                       />
                       <Text as="span">Manual configuration</Text>
                   </label>
                </div>

                {config.mode === 'custom' && (
                    <div className="custom-config-form">
                        <Separator />
                        <Heading size="sm">Configuration</Heading>

                        <Field label="Protocol">
                             <select 
                                value={config.scheme || 'http'} 
                                onChange={e => update({ scheme: e.target.value })}
                             >
                                <option value="http">HTTP</option>
                                <option value="https">HTTPS</option>
                                <option value="socks5">SOCKS5</option>
                             </select>
                        </Field>

                        <div className="row">
                            <Field label="Proxy host">
                                <Input 
                                    value={config.host || ''} 
                                    onChange={e => update({ host: e.target.value })} 
                                    placeholder="e.g. 10.0.0.1"
                                />
                            </Field>
                            <Field label="Port">
                                <Input 
                                    type="number"
                                    value={config.port || ''} 
                                    onChange={e => update({ port: parseInt(e.target.value) || undefined })} 
                                />
                            </Field>
                        </div>

                        <div className="row">
                            <Field label="Username">
                                <Input 
                                    value={config.username || ''} 
                                    onChange={e => update({ username: e.target.value })} 
                                />
                            </Field>
                            <Field label="Password">
                                <Input 
                                    type="password"
                                    value={config.password || ''} 
                                    onChange={e => update({ password: e.target.value })} 
                                />
                            </Field>
                        </div>
                        <Text size="xs" color="secondary">
                            Configuration is encrypted using the system's secure storage.
                        </Text>
                        
                        <Field label="No proxy for (comma separated)">
                             <Input 
                                value={config.bypass || ''} 
                                onChange={e => update({ bypass: e.target.value })} 
                             />
                        </Field>

                        <Text size="xs" className="warning-text">
                            Note: These settings may not apply to application updates.
                        </Text>
                    </div>
                )}
                
                {error && <Text color="critical">{error}</Text>}
            </div>
        </Modal>
    );
};
```

## 2. Settings Section Block

Add this to `Settings > Security & Privacy`.

```tsx
// Inside SecurityUserSettingsTab.tsx or similar

<SettingsSection heading="Network proxy">
    <Button onClick={() => setShowProxyModal(true)}>
        Network proxy settings
    </Button>
    { /* Display current state summary */ }
    <Text size="sm" color="secondary" style={{ marginTop: 8 }}>
        { currentConfig.mode === 'system' ? "Using system settings." : 
          currentConfig.mode === 'direct' ? "Direct connection (no proxy)." : 
          "Manual configuration selected." }
    </Text>
</SettingsSection>
```
