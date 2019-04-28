
//基础数据类型
let boo:boolean = false;
let num:number = 0;
let str:string = 'Lee'; //支持模板字符串

//数组
let arr1:number[] = [1,3,42,5,0]
let arr2:Array<number> = [1,3,42,5,0]

//元组
let tup : [string,number]
tup = ['123',123]


//枚举 枚举对象中的的值是read-only的
enum Color {bule = 123,red = 456,black = 789};
console.log('enum:', Color);
console.log('enum by index:', Color[123])
console.log('enum by key:', Color.black);



//any类型
let a:any = 'any';
a = 0;
a = [1];
a = false;
a = {
    ex:1
}
console.log('any:',a);

let arr3:Array<any> = ['1',1,{},false];
arr3[0] = true;
console.log('Array<any> arr3:',arr3)


//规定函数返回值的类型 void
function test1():void{
    console.log('test void')
}

//规定函数返回值的类型 never（有毒！！！）
// function test2(msg:string) :never{
//     console.log('test never function:',msg)
// }

//object  表示非原始类型，也就是除number，string，boolean，symbol，null或undefined之外的类型。
let obj:Object = {
    a:1,
    b:2,
    c:3,
    d:4,
    e:5
}
console.log('object 类型',obj);



//类型断言
// let someValue: any = "this is a string";
let someValue: any = {a:1,b:34};
let strLength1: boolean = (<boolean>someValue);    //若结果不是number，这个值就自动变为结果的数据类型，值也会变更
let strLength2: number = (someValue as number);    //若结果不是number，这个值就自动变为结果的数据类型，值也会变更（安装jsx后只有这个生效！）
console.log('strLength1:',strLength1);
console.log('strLength2:',strLength2);

