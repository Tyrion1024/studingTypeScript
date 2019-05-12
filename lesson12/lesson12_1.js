//高级类型 
//交叉类型（Intersection Types）
function extend(first, second) {
    var result = {};
    for (var id in first) {
        result[id] = first[id];
    }
    for (var id in second) {
        if (!result.hasOwnProperty(id)) {
            result[id] = second[id];
        }
    }
    return result;
}
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var ConsoleLogger = /** @class */ (function () {
    function ConsoleLogger() {
    }
    ConsoleLogger.prototype.log = function () {
        console.log(this);
    };
    return ConsoleLogger;
}());
var jim = extend(new Person("Jim"), new ConsoleLogger());
jim.log();
// 联合类型（Union Types）
function padLeft(value, padding) {
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
        return padding + value;
    }
    throw new Error("Expected string or number, got '" + padding + "'.");
}
var indentedString = padLeft("Hello world", 3); // 编译阶段通过，运行时报错
console.log(indentedString);
function getSmallPet() {
    var result = {
        fly: function () {
            console.log('bird fly');
        },
        layEggs: function () {
            console.log('bird egg');
        }
    };
    return result;
}
var pet = getSmallPet();
if (pet.swim) {
    pet.swim();
}
else if (pet.fly) {
    pet.fly();
}
//自定义类型保护
function isFish(pet) {
    return !!pet.swim;
}
// function isBird(pet:Fish|Bird):pet is Bird{
//     return !!(<Bird>pet).fly
// }
if (isFish(pet)) {
    pet.swim();
}
else {
    pet.fly();
}
var SpaceRepeatingPadder = /** @class */ (function () {
    function SpaceRepeatingPadder(numSpaces) {
        this.numSpaces = numSpaces;
    }
    SpaceRepeatingPadder.prototype.getPaddingString = function () {
        return Array(this.numSpaces + 1).join(" ");
    };
    SpaceRepeatingPadder.prototype.print = function () {
        console.log('SpaceRepeatingPadder');
    };
    return SpaceRepeatingPadder;
}());
var StringPadder = /** @class */ (function () {
    function StringPadder(value) {
        this.value = value;
    }
    StringPadder.prototype.getPaddingString = function () {
        return this.value;
    };
    StringPadder.prototype.say = function () {
        console.log('StringPadder');
    };
    return StringPadder;
}());
function getRandomPadder() {
    return Math.random() < 0.5 ?
        new SpaceRepeatingPadder(4) :
        new StringPadder("  ");
}
// 类型为SpaceRepeatingPadder | StringPadder
var padder = getRandomPadder();
if (padder instanceof SpaceRepeatingPadder) {
    padder.print();
}
if (padder instanceof StringPadder) {
    padder.say();
}
// 可以为null的类型 任何类型的值都可以被赋值为null和undefined
var s = 123;
s = null;
s = undefined;
var sn = "bar";
sn = undefined;
sn = null;
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
