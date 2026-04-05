@echo off
cd /d "%~dp0"

if not exist "node_modules" (
  echo Installing desktop app dependencies...
  call npm.cmd install
  if errorlevel 1 (
    echo Installation failed.
    pause
    exit /b 1
  )
)

call npm.cmd run app
