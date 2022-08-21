import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('electronAPI', {
    getInstances: () => ipcRenderer.invoke('get-instances'),
    onInstanceUpdate: (callback) => ipcRenderer.on('instance-update', callback),
    selectInstance: (id: string) => ipcRenderer.send('select-instance', id),
    createInstance: () => ipcRenderer.send('create-instance'),
});
