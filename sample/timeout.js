// 简单的范例-定时执行
// https://www.imooc.com/video/16613

console.log('here we go');
new Promise( resolve => {
    setTimeout( () => {
        resolve('hello');
    }, 2000);
})
    .then( value => {
        console.log( value + ' world');
    });