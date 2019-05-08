//类型兼容性    TypeScript结构化类型系统的基本规则是，如果x要兼容y，那么y至少具有与x相同的属性；
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var p;
p = new Person(); //编译成功，因为p是Person的实例，且p.name的类型 与 Named中的name的类型 匹配。如果在Named接口中加一个birthday属性就会报错，因为Person实例中没有birthday属性
//demo2
var fn1 = function (a) { return 0; };
var fn2 = function (b, s) { return 0; };
fn2 = fn1; // OK
//fn1 = fn2;  Error
/*
要查看fn1是否能赋值给fn1，首先看它们的参数列表。 fn1的每个参数必须能在fn2里找到对应类型的参数。 注意的是参数的名字相同与否无所谓，只看它们的类型。 这里，fn1的每个参数在fn2中都能找到对应的参数，所以允许赋值。

第二个赋值错误，因为fn2有个必需的第二个参数，但是fn1并没有，所以不允许赋值。
*/
//demo3  可选参数及剩余参数
var args = [1, 2];
function invokeLater(args, callback) {
    /* ... Invoke callback with 'args' ... */
    callback();
}
// Unsound - invokeLater "might" provide any number of arguments
invokeLater(args, function (x, y) {
    if (x === void 0) { x = args[0]; }
    if (y === void 0) { y = args[1]; }
    return console.log('demo3  ', x + ', ' + y);
});
// Confusing (x and y are actually required) and undiscoverable
invokeLater(args, function (x, y) {
    if (x === void 0) { x = args[1]; }
    return console.log('demo3   可选参数', x + ', ' + y);
});
// demo4 枚举类型与数字类型兼容，并且数字类型与枚举类型兼容。不同枚举类型之间是不兼容的。比如，
var Status;
(function (Status) {
    Status[Status["Ready"] = 0] = "Ready";
    Status[Status["Waiting"] = 1] = "Waiting";
})(Status || (Status = {}));
;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Green"] = 2] = "Green";
})(Color || (Color = {}));
;
var status1 = Status.Ready;
//status1 = Color.Green;   Error
console.log('demo4    不同枚举类型之间不兼容的', status1);
//demo5 类与对象字面量和接口差不多，但有一点不同：类有静态部分和实例部分的类型。 比较两个类类型的对象时，只有实例的成员会被比较。
// ************   静态成员和构造函数不在比较的范围内   ************
var Animal = /** @class */ (function () {
    function Animal(name, numFeet) {
    }
    return Animal;
}());
var Size = /** @class */ (function () {
    function Size(numFeet) {
    }
    return Size;
}());
var a;
var s;
a = s; // OK
s = a; // OK
var x;
var y;
// x = y   Error  因为接口中的数据类型不同， 如果data改为固定的类型则可以执行x=y的操作；
