//接口（下）


//字符型 字符串索引（字符型和数字型索引不可同时出现）
class Animal {
    name: string;
}
class Dog extends Animal {
    breed: string;
}

interface Okay {
    animal: Animal;
    dog: Dog;
}


let obj:Okay;
obj = {
    animal:{name:'Animal类'},
    dog:{
        name:'Dog类',
        breed:'shit'
    }
}
console.log(obj);




//类类型
interface ClockInterface1 {
    currentTime: Date;
    setTime(d: Date);
}

//接口中的中的属性和方法 类中必须都有！
class Clock implements ClockInterface1 {
    currentTime: Date;
    newProp:number;
    setTime(d: Date) {
        this.currentTime = d;
    }
    constructor(h: number, m: number) { 
        this.newProp = h+m
     }
}


// 类类型  demo

//定义一个接口 在借口中new出一个实例 ClockConstructor
interface ClockConstructor {
    new (hour: number, minute: number): ClockInterface;
}
//定义一个接口 ClockInterface   规定一个函数tick
interface ClockInterface {
    tick();
}

// 定义一个类DigitalClock，ClockInterface接口
class DigitalClock implements ClockInterface {
    hm:number;
    constructor(h: number, m: number) { 
        this.hm = h+m
    }
    tick() {
        console.log("beep beep "+this.hm);
    }
}
// 定义一个类AnalogClock，ClockInterface接口
class AnalogClock implements ClockInterface {
    hm:number;
    constructor(h: number, m: number) { 
        this.hm = h+m
    }
    tick() {
        console.log("tick tock " + this.hm);
    }
}

// 定义一个函数createClock  传入一个 类名 hour minute
function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
    // 根据传入的类名  new出 一个实例，传入hour和minute
    return new ctor(hour, minute);
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 20, 32);
digital.tick();
analog.tick();






// 接口继承
interface Shape {
    color: string;
}

interface PenStroke {
    penWidth: number;
}

interface Square extends Shape, PenStroke {
    sideLength: number;
}

let square:Square = {
    color : "blue",
    sideLength : 10,
    penWidth : 5.0
};



// 接口继承类

// 定义一个类 Control
class Control {
    private state: any;
}

// 定义一个接口SelectableControl 继承 Control，并添加了一个函数select
interface SelectableControl extends Control {
    select(): void;
}

// 定义一个类Button 继承Control类   又   继承SelectableControl接口写入函数select   
class Button extends Control implements SelectableControl {
    select() { }
}

// 定义一个类TextBox 继承Control类但与SelectableControl无关，写入或不写入select函数都无所谓
class TextBox extends Control {
    // select() { }
}

// 错误：“Image”类型只继承了SelectableControl，但没有继承 Control 所以缺少“state”属性。
// class Image implements SelectableControl {
//     select() { }
// }
// SelectableControl包含了Control的所有成员，包括私有成员state。 因为 state是私有成员，所以只能够是Control的子类们才能实现SelectableControl接口。 因为只有 Control的子类才能够拥有一个声明于Control的私有成员state，这对私有成员的兼容性是必需的。
// 在Control类内部，是允许通过SelectableControl的实例来访问私有成员state的。 实际上， SelectableControl接口和拥有select方法的Control类是一样的。 Button和TextBox类是SelectableControl的子类（因为它们都继承自Control并有select方法），但Image并不是这样的。