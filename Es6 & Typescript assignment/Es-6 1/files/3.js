"use strict";
var obj1 = {
    id: 123,
    title: "ps5",
    price: 50000,
    printOrder: function () {
        console.log("order id is " + obj1.id + " title is " + obj1.title + " price is " + obj1.price);
    },
    getPrice: function () {
        console.log("price is " + obj1.price);
    }
};
obj1.printOrder();
obj1.getPrice();
var obj2 = Object.assign({}, obj1);
