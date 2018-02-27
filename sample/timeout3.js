// 假如在.then()的函数里面不返回新的Promise，会怎样？
// https://www.imooc.com/video/16616

console.log('here we go');
new Promise(resolve => {
    setTimeout( () => {
        resolve('hello');
    }, 2000);
})
    .then( value => {
        console.log(value);
        console.log('everyone');
        (function () {
            return new Promise(resolve => {
                setTimeout(() => {
                    console.log('Mr.Laurence');
                    resolve('Merry Xmas');
                }, 2000);
            });
        }());
        return false;
    })
    .then( value => {
        console.log(value + ' world');
    });