// 把回调包装成Promise
// https://www.imooc.com/video/16628



const fs = require('./FileSystem');

fs.readFile('../README.md', 'utf-8')
    .then(content => {
        console.log(content);
    });