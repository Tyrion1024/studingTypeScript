var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(userInfo) {
        for (var key in userInfo) {
            this[key] = userInfo[key];
        }
    }
    Person.prototype.getInfo = function () {
        console.log(this.password);
    };
    Person.prototype.growUp = function () {
        this.age++;
    };
    return Person;
}());
var Man = /** @class */ (function (_super) {
    __extends(Man, _super);
    function Man(userInfo) {
        var _this = _super.call(this, userInfo) || this;
        _this.gender = 'man';
        return _this;
    }
    Man.prototype.setPWD = function (val) {
        this.password = val;
    };
    return Man;
}(Person));
var user = {
    name: 'Lee',
    age: 24,
    address: 'shanghai',
    from: 'shandong',
    gender: 'woman'
};
var man = new Man(user);
man.setPWD('123456');
man.getInfo();
console.log(man);
man.setPWD('234567');
man.getInfo();
