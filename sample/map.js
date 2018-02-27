// 遍历目录，找出最大的一个文件-通过Promise.all()和.map()
// https://www.imooc.com/video/16622


const fs = require('fs');
const path = require('path');
const FileSystem = require('./FileSystem');

function findLargest(dir) {
    return FileSystem.readDir(dir, 'utf-8')
        .then( files => {
            return Promise.all( files.map( file => {
                return new Promise (resolve => {
                    fs.stat(path.join(dir, file), (err, stat) => {
                        if (err) throw err;
                        if (stat.isDirectory()) {
                            return resolve({
                                size: 0
                            });
                        }
                        stat.file = file;
                        resolve(stat);
                    });
                });
            }));
        })
        .then( stats => {
            let biggest = stats.reduce( (memo, stat) => {
                if(memo.size < stat.size) {
                    return stat;
                }
                return memo;
            });
            return biggest.file;
        })
}