const path = require("path");
const { app, BrowserWindow, shell } = require("electron");
const { createAppServer } = require("./app-server");

let mainWindow = null;
let serverHandle = null;

async function createMainWindow() {
  if (!serverHandle) {
    serverHandle = await createAppServer(app.getAppPath());
  }

  mainWindow = new BrowserWindow({
    width: 1440,
    height: 960,
    minWidth: 1100,
    minHeight: 720,
    autoHideMenuBar: true,
    backgroundColor: "#f0f5ff",
    title: "المختبر الافتراضي",
    icon: path.join(app.getAppPath(), "icon.ico"),
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true
    }
  });

  mainWindow.removeMenu();

  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url);
    return { action: "deny" };
  });

  await mainWindow.loadURL(serverHandle.url);

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

async function shutdownServer() {
  if (!serverHandle) {
    return;
  }

  const { server } = serverHandle;
  await new Promise((resolve) => server.close(resolve));
  serverHandle = null;
}

app.whenReady().then(async () => {
  await createMainWindow();

  app.on("activate", async () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      await createMainWindow();
    }
  });
});

app.on("window-all-closed", async () => {
  await shutdownServer();
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("before-quit", async () => {
  await shutdownServer();
});
