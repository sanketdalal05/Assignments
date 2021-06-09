"use strict";
var myarray = function userFriend(username) {
    var friends = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        friends[_i - 1] = arguments[_i];
    }
    console.log(username);
    console.log("List of friends " + friends);
};
myarray("john", "sam", "ron", "adam");
var myarray = function add(value) {
    if (value === void 0) { value = 10; }
    console.log(value);
};
myarray();
myarray(5);
function upperCase(a, b, c, d, f) {
    console.log(a.toUpperCase());
    console.log(b.toUpperCase());
    console.log(c.toUpperCase());
    console.log(d.toUpperCase());
    console.log(f.toUpperCase());
}
var str = ["puma", "lee", "nike", "reebok", "adidas"];
upperCase.apply(void 0, str);
