"use strict";
var names = ["Tom", "Ivan", "Jerry"];
var arrObject = function (names) {
    var myarray = [];
    for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
        var n = names_1[_i];
        myarray.push({ name: n,
            length: n.length });
    }
    console.log(myarray);
};
arrObject(names);
