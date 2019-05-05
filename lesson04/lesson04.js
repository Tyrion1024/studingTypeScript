//接口（下）
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
//字符型 字符串索引（字符型和数字型索引不可同时出现）
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Dog;
}(Animal));
var obj;
obj = {
    animal: { name: 'Animal类' },
    dog: {
        name: 'Dog类',
        breed: 'shit'
    }
};
console.log(obj);
//接口中的中的属性和方法 类中必须都有！
var Clock = /** @class */ (function () {
    function Clock(h, m) {
        this.newProp = h + m;
    }
    Clock.prototype.setTime = function (d) {
        this.currentTime = d;
    };
    return Clock;
}());
// 定义一个类DigitalClock，ClockInterface接口
var DigitalClock = /** @class */ (function () {
    function DigitalClock(h, m) {
        this.hm = h + m;
    }
    DigitalClock.prototype.tick = function () {
        console.log("beep beep " + this.hm);
    };
    return DigitalClock;
}());
// 定义一个类AnalogClock，ClockInterface接口
var AnalogClock = /** @class */ (function () {
    function AnalogClock(h, m) {
        this.hm = h + m;
    }
    AnalogClock.prototype.tick = function () {
        console.log("tick tock " + this.hm);
    };
    return AnalogClock;
}());
// 定义一个函数createClock  传入一个 实例名 hour minute
function createClock(ctor, hour, minute) {
    // 根据传入的类名  new出 一个实例，传入hour和minute
    return new ctor(hour, minute);
}
var digital = createClock(DigitalClock, 12, 17);
var analog = createClock(AnalogClock, 20, 32);
digital.tick();
analog.tick();
