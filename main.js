const fs = require("fs/promises");
const path = require("path");
const { app, BrowserWindow, ipcMain, shell } = require("electron");
const { createAppServer } = require("./app-server");

let mainWindow = null;
let serverHandle = null;

function getTrackingPaths() {
  const storageDir = path.join(app.getPath("userData"), "tracking-data");
  const studentsDir = path.join(storageDir, "students");
  const stateFile = path.join(storageDir, "tracking-state.json");

  return { storageDir, studentsDir, stateFile };
}

async function ensureTrackingDirectories() {
  const { storageDir, studentsDir } = getTrackingPaths();
  await fs.mkdir(storageDir, { recursive: true });
  await fs.mkdir(studentsDir, { recursive: true });
}

function normalizeStudentNumber(studentNumber) {
  return Number.isInteger(studentNumber) && studentNumber >= 1 && studentNumber <= 35
    ? studentNumber
    : null;
}

function getStudentFilePath(studentNumber) {
  const { studentsDir } = getTrackingPaths();
  return path.join(studentsDir, `student-${String(studentNumber).padStart(2, "0")}-tracking.json`);
}

async function loadTrackingStateFromDisk() {
  await ensureTrackingDirectories();
  const { storageDir, stateFile } = getTrackingPaths();

  try {
    const raw = await fs.readFile(stateFile, "utf8");
    const parsed = JSON.parse(raw);

    return {
      ok: true,
      storageDir,
      stateFile,
      currentStudentNumber: normalizeStudentNumber(parsed?.currentStudentNumber),
      trackingData:
        parsed && typeof parsed.trackingData === "object" && parsed.trackingData !== null
          ? parsed.trackingData
          : {}
    };
  } catch (error) {
    if (error && error.code === "ENOENT") {
      return {
        ok: true,
        storageDir,
        stateFile,
        currentStudentNumber: null,
        trackingData: {}
      };
    }

    throw error;
  }
}

async function saveTrackingStateToDisk(payload = {}) {
  await ensureTrackingDirectories();

  const { storageDir, stateFile } = getTrackingPaths();
  const trackingData =
    payload && typeof payload.trackingData === "object" && payload.trackingData !== null
      ? payload.trackingData
      : {};
  const currentStudentNumber = normalizeStudentNumber(payload.currentStudentNumber);
  const savedAt = new Date().toISOString();

  await fs.writeFile(
    stateFile,
    JSON.stringify({ savedAt, currentStudentNumber, trackingData }, null, 2),
    "utf8"
  );

  const studentFilePaths = {};
  for (const [key, record] of Object.entries(trackingData)) {
    const studentNumber = normalizeStudentNumber(Number(key));
    if (!studentNumber) {
      continue;
    }

    const studentFilePath = getStudentFilePath(studentNumber);
    studentFilePaths[String(studentNumber)] = studentFilePath;

    await fs.writeFile(
      studentFilePath,
      JSON.stringify({ savedAt, studentNumber, record }, null, 2),
      "utf8"
    );
  }

  return {
    ok: true,
    savedAt,
    storageDir,
    stateFile,
    currentStudentNumber,
    studentFilePaths,
    currentStudentFilePath: currentStudentNumber
      ? studentFilePaths[String(currentStudentNumber)] || getStudentFilePath(currentStudentNumber)
      : null
  };
}

function registerTrackingHandlers() {
  ipcMain.handle("tracking:load-state", async () => loadTrackingStateFromDisk());

  ipcMain.handle("tracking:save-state", async (_event, payload) => saveTrackingStateToDisk(payload));

  ipcMain.handle("tracking:clear-student-record", async (_event, studentNumberInput) => {
    const studentNumber = normalizeStudentNumber(Number(studentNumberInput));
    if (!studentNumber) {
      throw new Error("Invalid student number.");
    }

    const existingState = await loadTrackingStateFromDisk();
    const trackingData = { ...existingState.trackingData };
    delete trackingData[String(studentNumber)];

    await fs.rm(getStudentFilePath(studentNumber), { force: true });

    return saveTrackingStateToDisk({
      currentStudentNumber:
        existingState.currentStudentNumber === studentNumber ? null : existingState.currentStudentNumber,
      trackingData
    });
  });

  ipcMain.handle("tracking:open-storage-folder", async () => {
    await ensureTrackingDirectories();
    const { storageDir } = getTrackingPaths();
    const errorMessage = await shell.openPath(storageDir);

    return {
      ok: !errorMessage,
      storageDir,
      errorMessage: errorMessage || null
    };
  });

  ipcMain.handle("tracking:reveal-file", async (_event, filePath) => {
    if (typeof filePath !== "string" || !filePath.trim()) {
      return { ok: false };
    }

    shell.showItemInFolder(filePath);
    return { ok: true };
  });
}

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
    title: "Virtual Lab Desktop",
    icon: path.join(app.getAppPath(), "icon.ico"),
    webPreferences: {
      preload: path.join(app.getAppPath(), "preload.js"),
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

registerTrackingHandlers();

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
