"use strict";
var circle = {
    username: "sam",
    print: function (str) { return "hello " + str; }
};
var employee = {
    username: "spirit",
    print: function (str) { return "Hello " + str; }
};
function printAll(ObjectOne, ObjectTwo) {
    return [
        ObjectOne.print("sam"),
        ObjectTwo.print("john")
    ];
}
console.log(printAll(circle, employee));
