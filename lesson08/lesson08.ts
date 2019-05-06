//枚举

enum demoEnum1{
    up=1,
    down,
    left,
    right
}
console.log('demoEnum1 - ',demoEnum1);
console.log('demoEnum1[2] - ',demoEnum1[2]);
console.log('demoEnum1.up',demoEnum1.up)



enum demoEnum2 {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = 1
}
console.log('demoEnum2 - ',demoEnum2);




enum demoEnum3 {
    None,
    Read    = 1 << 1,
    Write   = 1 << 2,
    ReadWrite  = Read | Write,
    G = "123".length
}
console.log('demoEnum3 - ',demoEnum3);



enum ShapeKind {
    Circle,
    Square,
}

interface Circle {
    kind: ShapeKind.Circle;
    radius: number;
}

interface Square {
    kind: ShapeKind.Square;
    sideLength: number;
}

let s: Square = {
    kind: ShapeKind.Square,
    sideLength: 100,
}
console.log('demoEnum4 - s : '+JSON.stringify(s))

let c: Circle = {
    kind: ShapeKind.Circle,
    radius: 100,
}
console.log('demoEnum4 - c : '+JSON.stringify(c));




enum demoEnum5 {
    Foo,
    Bar,
}

function f(x: demoEnum5) {
    console.log('demoEnum5 -> ',x)
    if (x !== demoEnum5.Foo && x !== demoEnum5.Bar) {
        // if (x !== E.Foo || x !== E.Bar) {
        //             ~~~~~~~~~~   前边条件不满足后无需判断后边条件  使用‘||’会直接报错！
    }
}




// 外部枚举
// 外部枚举用来描述已经存在的枚举类型的形状。

declare enum demoEnum6 {
    A = 1,
    B,
    C = 2
}
// 外部枚举和非外部枚举之间有一个重要的区别，在正常的枚举里，没有初始化方法的成员被当成常数成员。 对于非常数的外部枚举而言，没有初始化方法时被当做需要经过计算的。