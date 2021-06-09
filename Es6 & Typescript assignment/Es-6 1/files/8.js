"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Account = /** @class */ (function () {
    function Account(id, username, balance) {
        this.id = id;
        this.user = username;
        this.balance = balance;
    }
    return Account;
}());
var SavingAcc = /** @class */ (function (_super) {
    __extends(SavingAcc, _super);
    function SavingAcc(id, username, balance, srate) {
        var _this = _super.call(this, id, username, balance) || this;
        _this.rate = _this.balance * srate;
        return _this;
    }
    return SavingAcc;
}(Account));
var Current = /** @class */ (function (_super) {
    __extends(Current, _super);
    function Current(id, username, balance, crate) {
        var _this = _super.call(this, id, username, balance) || this;
        _this.hrate = _this.balance * crate;
        return _this;
    }
    return Current;
}(Account));
var sanket = new Account(619, "sanket", 50000);
var omkar = new SavingAcc(629, "omkar", 10000, 3.2);
var rahul = new Current(629, "rahul", 10000, 4.8);
console.log(sanket.balance);
console.log(omkar.rate);
console.log(rahul.hrate);
