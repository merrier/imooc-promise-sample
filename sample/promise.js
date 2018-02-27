// Promise的设计
// https://www.imooc.com/video/16612

new Promise(
    /* 执行器 executor */
    function (resolve, reject) {
        // 一段耗时很长的异步操作

        resolve(); // 数据处理完成

        reject(); // 数据处理出错
    }
)
    .then(function A() {
        // 成功，下一步
    }, function B() {
        // 失败，做相应处理
    });