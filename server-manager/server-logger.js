/***************************************************************
 * Script: server-manager: server-logger.js
 * Server: -
 * Author: OvileAmriam
 * Developer: -
 * DOC: 25/09/2020 (OvileAmriam)
 * Desc: Automated Server Manager
***************************************************************/


/******************************************
 * Function: Retrieves Server's Platform *
*******************************************/

export function getServerPlatform() {

    return process.platform === "win32" ? "windows" : "linux"
    
}


/***********************************************
 * Function: Retrieves Server's Launcher Data *
************************************************/

export function getServerLauncherData() {

    const serverPlatform = getServerPlatform()
    const launcherFormat = serverPlatform === "windows" ?  "server-launcher.bat" : "server-launcher.sh"
    const launcherPrefix = serverPlatform === "windows" ?  "@echo off\ncall npm run start --silent" : "#!/bin/bash\nset echo off\nnpm run start --silent"
    const launcherCommand = "altv-server"
    return [launcherFormat, launcherPrefix, launcherCommand]

}


/**********************************
 * Function: Displays Server Log *
***********************************/

export function displayServerLog(log) {

    return process.stdout.write("\x1b[93m" + log + "\x1b[39m")

}