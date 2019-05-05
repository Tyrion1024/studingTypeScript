// 泛型

//泛型基本应用
function fn1<T>(arg:T):T{
    return arg
}

console.log(fn1<string>('abc'));
console.log(fn1<number>(123));
console.log(fn1([1,2,3]))  //类型推断



//使用参数的某种特殊属性   比如数组或字符串的length属性
function fn2<T>(arg:T[]){
    console.log('arg.length: '+arg.length)
}

fn2<number>([1,2,3]);



// 声明变量，给其赋值
let fn3:<T>(arg:T) => T = fn1;
console.log(fn3<string>('abc'));




// 泛型应用 — 接口
interface Generic <T>{
    (arg:T):T
}

let fn4:Generic<string> = function(arg){
    return arg
};
console.log(fn4('接口应用泛型: '+'abc'));




// 泛型应用 - 类
class demo_T<T>{
    val:T;
    add:<T>(arg1:T,arg2) =>T
}
let demo_C = new demo_T<number>();
demo_C.add = function(arg1,arg2){
    this.val = arg1 + arg2
    return this.val
}
console.log('类应用泛型: '+ demo_C.add(1,2));


// 泛型扩展 - 接口
interface conditions {
    length:number
}
function fn5<T extends conditions>(arg:T){
    console.log('泛型扩展（接口）: '+arg.length)
}
fn5([1,2,3]);
// fn5(123)   错误数字类型不具有length属性
fn5({length:78});


// 泛型应用 - 类类型
function create<T>(c:{new():T;}){
    return new c()
}
class Student{
    constructor(){

    }
    say(){
        console.log('泛型扩展 - 类类型')
    }
}

let stu = create<Student>(Student);
stu.say();




// 泛型应用 - 类类型（进阶）
class BeeKeeper {
    hasMask = '123';
}

class ZooKeeper {
    nametag = '456';
}

class Animal {
    numLegs: number;
}

class Bee extends Animal {
    keeper: BeeKeeper;
    constructor(){
        super();
        this.keeper = new BeeKeeper();
    }
}

class Lion extends Animal {
    keeper: ZooKeeper;
    constructor(){
        super();
        this.keeper = new ZooKeeper();
    }
}

function createInstance<A extends Animal>(c: new () => A): A {
    return new c();
}

console.log('泛型应用 - 类类型（进阶） lion: ' + createInstance(Lion).keeper.nametag);  // typechecks!
console.log('泛型应用 - 类类型（进阶） bee: ' + createInstance(Bee).keeper.hasMask);   // typechecks!