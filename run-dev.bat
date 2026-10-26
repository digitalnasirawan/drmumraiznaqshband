@echo off
title Prof. Dr. Mumraiz Naqshband Website - Dev Server
echo ========================================================
echo Starting Prof. Dr. Mumraiz Naqshband Website Dev Server...
echo ========================================================

set "PATH=C:\Program Files\nodejs;%PATH%"

echo Node version:
node -v
echo NPM version:
call npm -v

echo.
echo Server will be accessible at:
echo   - Local:   http://localhost:5173/
echo   - Network: http://127.0.0.1:5173/
echo.
echo Starting Vite...
call npm run dev
pause
