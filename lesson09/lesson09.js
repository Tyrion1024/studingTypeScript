// 类型推论
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
//demo1     基础
var demo1 = 'string1'; //系统对a进行类型推论  结果为string
// a = 12345;   error，因为12345是number类型，与类型推论得到的string不一致
demo1 = 'string2'; //编译成功！符合类型推论的到的结果
//demo2    最佳通用类型
var Animal = /** @class */ (function () {
    function Animal() {
        this.sign = 123;
    }
    return Animal;
}());
var Rhino = /** @class */ (function () {
    function Rhino() {
        this.sign = 456;
    }
    return Rhino;
}());
var Elephant = /** @class */ (function () {
    function Elephant() {
        this.sign = 789;
    }
    return Elephant;
}());
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake() {
        return _super.call(this) || this;
    }
    return Snake;
}(Animal));
var zoo1 = [new Rhino(), new Elephant(), new Snake()];
console.log('类型推断 demo2-zoo1 =>' + JSON.stringify(zoo1)); //想让zoo1被推断为Animal[]， 但数组中没有Animal类的对象因此不能推断为Animal;
var zoo2 = [new Rhino(), new Elephant(), new Snake()];
console.log('类型推断 demo2-zoo2 =>' + JSON.stringify(zoo2)); //zoo2的类型是Animal[]
function createZoo() {
    return [new Rhino(), new Elephant(), new Snake()];
    // 这个例子里，最佳通用类型有4个候选者：Animal，Rhino，Elephant和Snake。 当然， Animal会被做为最佳通用类型。
}
//demo3    上下文类型
/*
window.onmousedown = function(mouseEvent) {
    console.log(mouseEvent.button);  //<- Error，mouseEvent被推断为window.onmousedown的类型（function），所以会出现一个类型错误，编译失败。。。
};



window.onmousedown = function(mouseEvent:any) {
    console.log(mouseEvent.button);  //<- success，mouseEvent被规定为any类型，不会被推断为function，所以会编译成功
};
*/ 
