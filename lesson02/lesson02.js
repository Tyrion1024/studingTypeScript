//基础数据类型
var boo = false;
var num = 0;
var str = 'Lee'; //支持模板字符串
//数组
var arr1 = [1, 3, 42, 5, 0];
var arr2 = [1, 3, 42, 5, 0];
//元组
var tup;
tup = ['123', 123];
//枚举 枚举对象中的的值是read-only的
var Color;
(function (Color) {
    Color[Color["bule"] = 123] = "bule";
    Color[Color["red"] = 456] = "red";
    Color[Color["black"] = 789] = "black";
})(Color || (Color = {}));
;
console.log('enum:', Color);
console.log('enum by index:', Color[123]);
console.log('enum by key:', Color.black);
//any类型
var a = 'any';
a = 0;
a = [1];
a = false;
a = {
    ex: 1
};
console.log('any:', a);
var arr3 = ['1', 1, {}, false];
arr3[0] = true;
console.log('Array<any> arr3:', arr3);
//规定函数返回值的类型 void
function test1() {
    console.log('test void');
}
//规定函数返回值的类型 never（有毒！！！）
// function test2(msg:string) :never{
//     console.log('test never function:',msg)
// }
//object  表示非原始类型，也就是除number，string，boolean，symbol，null或undefined之外的类型。
var obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5
};
console.log('object 类型', obj);
//类型断言
// let someValue: any = "this is a string";
var someValue = { a: 1, b: 34 };
var strLength1 = someValue;
var strLength2 = someValue; //若结果不是number，这个值就自动变为结果的数据类型   则（安装jsx后只有这个生效！）
console.log('strLength1:', strLength1);
console.log('strLength2:', strLength2);
