/**
 * Created by zhaoyu on 2017/10/24.
 */

import {exec} from 'child_process'
import {MessageBox} from 'element-ui';
import {Message} from 'element-ui';
import {t} from 'element-ui/lib/locale'

var sudoPwd;
if (localStorage.sudoPwd) {
    sudoPwd = localStorage.sudoPwd
} else {
    sudoPwd = ''
    localStorage.sudoPwd = ''
}

function _checkSudoPwd(pwd) {
    return new Promise((resolve, reject) => {
        let s = `echo "${pwd}" | sudo -S ls`;
        exec(s, (error, stdout, stderr) => {
            if (error) {
                reject(error)
                return;
            }
            console.log(`stdout: ${stdout}`);
            console.log(`stderr: ${stderr}`);
            resolve(true)
        });
    })
}


function _getSudoPwd() {
    return new Promise((resolve, reject) => {
        MessageBox.prompt(t('messages.please_input_sudo'),t('messages.prompt'), {
            confirmButtonText: t('messages.ok'),
            cancelButtonText: t('messages.cancel'),
            inputType:'password'
        }).then(({value}) => {
            resolve(value);
        }).catch((e) => {
            Message({
                type: 'info',
                message: e.message
            });
            resolve("");
        });
    })
}

function _execShell(shell) {
    return new Promise((resolve, reject) => {
        let s = `echo "${sudoPwd}" | sudo -S ${shell}`;
        exec(s, (error, stdout, stderr) => {
            if (error) {
                reject(error)
                return;
            }
            console.log(`stdout: ${stdout}`);
            console.log(`stderr: ${stderr}`);
            resolve(stdout, stderr)
        });
    })
}

export async function execShell(shell) {
    while (true) {
        try {
            await _checkSudoPwd(sudoPwd);
            localStorage.sudoPwd=sudoPwd;
            break
        } catch (e) {
            Message({
                type: 'error',
                message: e.message
            });
        }
        let pwd = await _getSudoPwd();
        sudoPwd = pwd;
    }
    return _execShell(shell);
}

export function getDevices() {
    return new Promise((resolve, reject) => {
        execShell(`mount | grep ntfs`).then(async (res) => {
            var devicesList = []
            var v = res
                .split("\n")
                .filter((item) => {
                    return item != "" && item.indexOf("local") != -1
                })
                .map(async (item) => {
                    var o = {
                        device_path: "",
                        device_info: "",
                        read_only: false
                    };
                    o.device_path = item.replace(/(\/dev.*\son).*/, "$1").replace(/\son/, "");
                    o.read_only = item.indexOf("read-only") != -1;
                    var infoMap = {};
                    let execShell2 = await execShell("diskutil info " + o.device_path);
                    execShell2.split("\n").filter((item) => {
                        return !/^\s*$/.test(item)
                    }).map((item) => {
                        return item.split(/:\s+/)
                    }).map((item) => {
                        var key = item[0].replace(/\s+/ig, "_");
                        infoMap[key] = item[1]
                    })
                    o.device_info = infoMap
                    return o
                });
            for (let i = 0; i < v.length; i++) {
                var o = await v[i];
                devicesList.push(o);
            }
            resolve(devicesList)
        }).catch((e) => {
            console.log(e);
            reject(e)
        })
    })
}

export function openInFinder(path) {
    return new Promise((resolve, reject) => {
        execShell(`open "${path}"`).then((res) => {
            resolve()
        }).catch((e) => {
            console.log(e);
            reject(e)
        })
    })
}

export function mountDevices(mount_path, link_path) {
    return new Promise(async (resolve, reject) => {
        try {
            await execShell(`umount "${mount_path}"`);
            await execShell(`mkdir -p "${link_path}"`);
            await execShell(`mount_ntfs -o rw,auto,nobrowse,noowners,noatime  "${mount_path}" "${link_path}"`);
            resolve();
        } catch (e) {
            reject(e)
        }
    })
}