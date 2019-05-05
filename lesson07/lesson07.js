// 泛型
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
//泛型基本应用
function fn1(arg) {
    return arg;
}
console.log(fn1('abc'));
console.log(fn1(123));
console.log(fn1([1, 2, 3])); //类型推断
//使用参数的某种特殊属性   比如数组或字符串的length属性
function fn2(arg) {
    console.log('arg.length: ' + arg.length);
}
fn2([1, 2, 3]);
// 声明变量，给其赋值
var fn3 = fn1;
console.log(fn3('abc'));
var fn4 = function (arg) {
    return arg;
};
console.log(fn4('接口应用泛型: ' + 'abc'));
// 泛型应用 - 类
var demo_T = /** @class */ (function () {
    function demo_T() {
    }
    return demo_T;
}());
var demo_C = new demo_T();
demo_C.add = function (arg1, arg2) {
    this.val = arg1 + arg2;
    return this.val;
};
console.log('类应用泛型: ' + demo_C.add(1, 2));
function fn5(arg) {
    console.log('泛型扩展（接口）: ' + arg.length);
}
fn5([1, 2, 3]);
// fn5(123)   错误数字类型不具有length属性
fn5({ length: 78 });
// 泛型应用 - 类类型
function create(c) {
    return new c();
}
var Student = /** @class */ (function () {
    function Student() {
    }
    Student.prototype.say = function () {
        console.log('泛型扩展 - 类类型');
    };
    return Student;
}());
var stu = create(Student);
stu.say();
// 泛型应用 - 类类型（进阶）
var BeeKeeper = /** @class */ (function () {
    function BeeKeeper() {
        this.hasMask = '123';
    }
    return BeeKeeper;
}());
var ZooKeeper = /** @class */ (function () {
    function ZooKeeper() {
        this.nametag = '456';
    }
    return ZooKeeper;
}());
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var Bee = /** @class */ (function (_super) {
    __extends(Bee, _super);
    function Bee() {
        var _this = _super.call(this) || this;
        _this.keeper = new BeeKeeper();
        return _this;
    }
    return Bee;
}(Animal));
var Lion = /** @class */ (function (_super) {
    __extends(Lion, _super);
    function Lion() {
        var _this = _super.call(this) || this;
        _this.keeper = new ZooKeeper();
        return _this;
    }
    return Lion;
}(Animal));
function createInstance(c) {
    return new c();
}
console.log('泛型应用 - 类类型（进阶） lion: ' + createInstance(Lion).keeper.nametag); // typechecks!
console.log('泛型应用 - 类类型（进阶） bee: ' + createInstance(Bee).keeper.hasMask); // typechecks!
