// 随堂小测试
// https://www.imooc.com/video/16619
// 假设doSomething和doSomethingElse返回的都是一个Promise实例
// 原问题地址：http://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html
// 译文地址：http://fex.baidu.com/blog/2015/07/we-have-a-problem-with-promises/

// 问题一
doSomething()
    .then(function () {
        return doSomethingElse();
    })
    .then(finalHandler);

// 答案
// doSomething
// |-----------|
//             doSomethingElse(undefined)
//             |------------|
//                          finalHandler(resultOfDoSomethingElse)
//                          |------------|


// 问题二
doSomething()
    .then(function () {
        doSomethingElse();
    })
    .then(finalHandler);

// 答案
// doSomething
// |------------------|
//                    doSomethingElse(undefined)
//                    |------------------|
//                    finalHandler(undefined)
//                    |------------------|


// 问题三
doSomething()
    .then(doSomethingElse())
    .then(finalHandler);

// 答案
// doSomething
// |------------------|
// doSomethingElse(undefined)
// |----------------------------------|
//                    finalHandler(resultOfDoSomething)
//                    |------------------|


// 问题四
doSomething()
    .then(doSomethingElse)
    .then(finalHandler);

// 答案
// doSomething
// |-----------|
//             doSomethingElse(resultOfDoSomething)
//             |------------|
//                         finalHandler(resultOfDoSomethingElse)
//                         |------------------|
