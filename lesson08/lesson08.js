//枚举
var demoEnum1;
(function (demoEnum1) {
    demoEnum1[demoEnum1["up"] = 1] = "up";
    demoEnum1[demoEnum1["down"] = 2] = "down";
    demoEnum1[demoEnum1["left"] = 3] = "left";
    demoEnum1[demoEnum1["right"] = 4] = "right";
})(demoEnum1 || (demoEnum1 = {}));
console.log('demoEnum1 - ', demoEnum1);
console.log('demoEnum1[2] - ', demoEnum1[2]);
console.log('demoEnum1.up', demoEnum1.up);
var demoEnum2;
(function (demoEnum2) {
    demoEnum2["Up"] = "UP";
    demoEnum2["Down"] = "DOWN";
    demoEnum2["Left"] = "LEFT";
    demoEnum2[demoEnum2["Right"] = 1] = "Right";
})(demoEnum2 || (demoEnum2 = {}));
console.log('demoEnum2 - ', demoEnum2);
var demoEnum3;
(function (demoEnum3) {
    demoEnum3[demoEnum3["None"] = 0] = "None";
    demoEnum3[demoEnum3["Read"] = 2] = "Read";
    demoEnum3[demoEnum3["Write"] = 4] = "Write";
    demoEnum3[demoEnum3["ReadWrite"] = 6] = "ReadWrite";
    demoEnum3[demoEnum3["G"] = "123".length] = "G";
})(demoEnum3 || (demoEnum3 = {}));
console.log('demoEnum3 - ', demoEnum3);
var ShapeKind;
(function (ShapeKind) {
    ShapeKind[ShapeKind["Circle"] = 0] = "Circle";
    ShapeKind[ShapeKind["Square"] = 1] = "Square";
})(ShapeKind || (ShapeKind = {}));
var s = {
    kind: ShapeKind.Square,
    sideLength: 100
};
console.log('demoEnum4 - s : ' + JSON.stringify(s));
var c = {
    kind: ShapeKind.Circle,
    radius: 100
};
console.log('demoEnum4 - c : ' + JSON.stringify(c));
var demoEnum5;
(function (demoEnum5) {
    demoEnum5[demoEnum5["Foo"] = 0] = "Foo";
    demoEnum5[demoEnum5["Bar"] = 1] = "Bar";
})(demoEnum5 || (demoEnum5 = {}));
function f(x) {
    console.log('demoEnum5 -> ', x);
    if (x !== demoEnum5.Foo && x !== demoEnum5.Bar) {
        // if (x !== E.Foo || x !== E.Bar) {
        //             ~~~~~~~~~~   前边条件不满足后无需判断后边条件  使用‘||’会直接报错！
    }
}
console.log('declear demoEnum5 : ' + JSON.stringify(demoEnum3));
// 外部枚举和非外部枚举之间有一个重要的区别，在正常的枚举里，没有初始化方法的成员被当成常数成员。 对于非常数的外部枚举而言，没有初始化方法时被当做需要经过计算的。
