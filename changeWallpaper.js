const path = require('path');
const download = require('download');
const fs = require("fs");
const wallpaper = require('wallpaper');

exports.saveFile = (url) => {
    if(fs.existsSync(path.join(__dirname,"resources",path.basename(url)))) {
        return new Promise((resolve,reject) => {
            resolve(path.join(__dirname,"resources",path.basename(url)));
        });
    } else {
        return new Promise((resolve,reject) => {
            download(url,path.join(__dirname,"resources")).then(() => {
                resolve(path.join(__dirname,"resources",path.basename(url)));
            }).catch(reject);
        });
    }
}
exports.changeWallpaper = (path) => {
    return new Promise((resolve,reject) => {
        wallpaper.set(path).then(resolve).catch(reject);
    })
}