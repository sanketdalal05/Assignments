"use strict";
var sum = function (a, b) { return a + b; };
var first = new Promise(function (resolve, reject) {
    var x = 5;
    if (x)
        resolve(x);
    else
        reject(x);
});
var second = new Promise(function (resolve, reject) {
    var y = 10;
    if (y)
        resolve(y);
    else
        reject(y);
});
var allpromises = Promise.all([first, second]);
allpromises.then(function (sucess) {
    console.log('sucess: ', sum(sucess[0], sucess[1]));
}).catch(function (error) { return console.log('error: ', error); });
