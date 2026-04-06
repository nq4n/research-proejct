# Desktop App Guide

## Run The App

### Option 1: Run the packaged app

Open:

`dist\Virtual Lab Desktop 1.0.0.exe`

This does not need Node.js, npm, or Electron installed on Windows.

### Option 2: Run from the project source

From the project folder, run:

```powershell
npm.cmd run app
```

## Build Again After New Updates

After you change the HTML, CSS, or JS files, rebuild the Windows app from the project root:

```powershell
npm.cmd run package
```

The updated app will be generated in:

`dist\Virtual Lab Desktop 1.0.0.exe`

## First-Time Setup On A New Machine

If `node_modules` does not exist yet, run:

```powershell
npm.cmd install
npm.cmd run package
```

## Important Note For PowerShell

Use `npm.cmd` and not `npm`.

On this Windows setup, PowerShell blocks `npm.ps1`, but `npm.cmd` works correctly.

## Cloudflare Lesson Access Config

The app is now ready for a Cloudflare R2 lesson-access setup.

Edit:

`js\lesson-access-config.js`

Then set:

- `enabled = true`
- `cloudflare.customDomain` or `cloudflare.publicBaseUrl`
- `pages.<lesson>.remoteConfigPath` for any lesson config JSON stored in the bucket

The current system JSON file is:

`lesson-system-config.json`

It is stored in the project root and is already connected through:

`js\lesson-access-config.js`

Right now the app loads that root JSON locally. Later, you can move the same JSON file to Cloudflare R2 and only change the base URL settings.

## If You Copy The App To Another Windows PC

You can copy either:

- `dist\Virtual Lab Desktop 1.0.0.exe`
- the whole `dist\win-unpacked` folder

If you copy `win-unpacked`, keep the full folder together and run:

`dist\win-unpacked\Virtual Lab Desktop.exe`

## Windows Warning

Because the app is unsigned, Windows may show a SmartScreen warning.

If that happens:

1. Click `More info`
2. Click `Run anyway`
