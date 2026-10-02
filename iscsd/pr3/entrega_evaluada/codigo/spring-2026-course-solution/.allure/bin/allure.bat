@echo off
setlocal
set "NODE=%~dp0..\node-v24.14.1-win-x64\node.exe"
if exist "%~dp0..\node-v24.14.1-win-x64\node.cmd" set "NODE=%~dp0..\node-v24.14.1-win-x64\node.cmd"
"%NODE%" "%~dp0..\allure-3.4.1\node_modules\allure\cli.js" %*
