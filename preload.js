const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("desktopTracking", {
  isAvailable: true,
  loadState: () => ipcRenderer.invoke("tracking:load-state"),
  saveState: (payload) => ipcRenderer.invoke("tracking:save-state", payload),
  clearStudentRecord: (studentNumber) =>
    ipcRenderer.invoke("tracking:clear-student-record", studentNumber),
  openStorageFolder: () => ipcRenderer.invoke("tracking:open-storage-folder"),
  revealFile: (filePath) => ipcRenderer.invoke("tracking:reveal-file", filePath)
});
