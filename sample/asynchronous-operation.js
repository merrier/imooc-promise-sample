// 异步操作的常见语法
// https://www.imooc.com/video/16610

// 事件侦听与响应
document.getElementById('start').addEventListener('click', start, false);

function start() {
    // 响应事件，进行相应的操作
}

// jQuery 用 `.on()` 也是事件侦听
$('#start').on('click', start);


// 回调
// 比较常见的有ajax
$.ajax('http://baidu.com', {
    success: function (res) {
        // 这里就是回调函数了
    }
});

// 或者在页面加载完毕后回调
$(function(){
    // 这里也是回调函数
});
