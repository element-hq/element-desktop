// CommonJS preload so it runs regardless of ESM/CJS app config.
const { contextBridge, ipcRenderer } = require('electron');

const SETTING_KEY = 'desktopProxyConfig';

async function getSetting() {
  return ipcRenderer.invoke('getSettingValue', SETTING_KEY);
}

async function saveSetting(value) {
  return ipcRenderer.invoke('setSettingValue', SETTING_KEY, value);
}

contextBridge.exposeInMainWorld('proxyApi', {
  getProxyConfig: async () => getSetting(),
  saveProxyConfig: async (cfg) => {
    try {
      await saveSetting(cfg);
      return { ok: true };
    } catch (e) {
      return { ok: false, error: e?.message || String(e) };
    }
  },
  closeWindow: () => {
    ipcRenderer.send('proxyWindowClose');
  },
});