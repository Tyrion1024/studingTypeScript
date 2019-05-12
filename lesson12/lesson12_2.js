var UIElement = /** @class */ (function () {
    function UIElement() {
    }
    UIElement.prototype.animate = function (dx, dy, easing) {
        if (easing === "ease-in") {
            // ...
        }
        else if (easing === "ease-out") {
        }
        else if (easing === "ease-in-out") {
        }
        else {
            // error! should not pass null or undefined.
        }
    };
    return UIElement;
}());
var button = new UIElement();
button.animate(0, 0, "ease-in");
// button.animate(0, 0, "uneasy");  error: "uneasy" is not allowed here 
//索引类型（Index types）
function pluck(o, names) {
    return names.map(function (n) { return o[n]; });
}
var person = {
    name: 'Jarid',
    age: 35
};
var strings = pluck(person, ['name']); // ok, string[]
// 装箱操作
var Proxy_ = /** @class */ (function () {
    function Proxy_(value) {
        this.vlaue = value;
    }
    Proxy_.prototype.get = function () {
        return this.vlaue;
    };
    Proxy_.prototype.set = function (value) {
        this.vlaue = value;
    };
    return Proxy_;
}());
var studentProxy;
function ProxyFy(o) {
    var result = {};
    for (var k in o) {
        result[k] = new Proxy_(o[k]);
    }
    return result;
}
var student = ProxyFy({
    name: 'Lee',
    age: 24
});
// student.age.set(123);
console.log(student);
//拆箱操作
function unProxy(o) {
    var result = {};
    for (var k in o) {
        result[k] = o[k].get();
    }
    return result;
}
var _student = unProxy(student);
console.log(_student);
