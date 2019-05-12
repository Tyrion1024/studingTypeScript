
//字符串(数字)字面量类型
type Easing = "ease-in" | "ease-out" | "ease-in-out";   //1|2|3|4|5|6|7|8|9
class UIElement {
    animate(dx: number, dy: number, easing: Easing) {
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
    }
}

let button = new UIElement();
button.animate(0, 0, "ease-in");
// button.animate(0, 0, "uneasy");  error: "uneasy" is not allowed here 




//索引类型（Index types）
function pluck<T, K extends keyof T>(o: T, names: K[]): T[K][] {
    return names.map(n => o[n]);
}

interface Person {
    name: string;
    age: number;
}
let person: Person = {
    name: 'Jarid',
    age: 35
};
let strings: string[] = pluck(person, ['name']); // ok, string[]






// 映射类型
interface PersonPartial {
    name?: string;
    age?: number;
}
interface PersonReadonly {
    readonly name: string;
    readonly age: number;
}


type Readonly_<T> = {
    readonly [P in keyof T]: T[P];
}
type Partial_<T> = {
    [P in keyof T]?: T[P];
}
type PersonPartial_ = Partial_<Person>;
type ReadonlyPerson_ = Readonly_<Person>;




// 装箱操作
class Proxy_<T> {
    vlaue:T;
    constructor(value:T){
        this.vlaue = value;
    }
    get():T{
        return this.vlaue
    }
    set(value: T){
        this.vlaue = value
    }
}

interface Student  {
    name:string;
    age:number;
}

// let student = new Proxy_<Student>({name:'Lee',age:24});


type Proxy_fy<T> = {
    [P in keyof T]:Proxy_<T[P]>
}

type StudentProxy = Proxy_<Student>;
let studentProxy:StudentProxy;



function ProxyFy<T>(o:T):Proxy_fy<T>{
    let result = {} as Proxy_fy<T>;
    for(let k in o){
        result[k] = new Proxy_(o[k]);
    }
    return result
}


let student = ProxyFy<Student>({
    name:'Lee',
    age:24
})
// student.age.set(123);
console.log(student);




//拆箱操作
function unProxy<T>(o:Proxy_fy<T>):T{
    let result = {} as T;
    for(let k in o){
        result[k] = o[k].get();
    }
    return result
}

let _student = unProxy<Student>(student)
console.log(_student)





//预定义有条件类型

/**
 * 
    Exclude<T, U> -- 从T中剔除可以赋值给U的类型。
    Extract<T, U> -- 提取T中可以赋值给U的类型。
    NonNullable<T> -- 从T中剔除null和undefined。
    ReturnType<T> -- 获取函数返回值类型。
    InstanceType<T> -- 获取构造函数类型的实例类型。
 * 
 */


type T00 = Exclude<"a" | "b" | "c" | "d", "a" | "c" | "f">;  // "b" | "d"(取差集)
type T01 = Extract<"a" | "b" | "c" | "d", "a" | "c" | "f">;  // "a" | "c"（取交集）

type T02 = Exclude<string | number | (() => void), Function>;  // string | number
type T03 = Extract<string | number | (() => void), Function>;  // () => void

type T04 = NonNullable<string | number | undefined>;  // string | number
type T05 = NonNullable<(() => string) | string[] | null | undefined>;  // (() => string) | string[]

function f1(s: string) {
    return { a: 1, b: s };
}

class C {
    x = 0;
    y = 0;
}

type T10 = ReturnType<() => string>;  // string
type T11 = ReturnType<(s: string) => void>;  // void
type T12 = ReturnType<(<T>() => T)>;  // {}
type T13 = ReturnType<(<T extends U, U extends number[]>() => T)>;  // number[]
type T14 = ReturnType<typeof f1>;  // { a: number, b: string }
type T15 = ReturnType<any>;  // any
type T16 = ReturnType<never>;  // any
// type T17 = ReturnType<string>;   Error
// type T18 = ReturnType<Function>;   Error

type T20 = InstanceType<typeof C>;  // C
type T21 = InstanceType<any>;  // any
type T22 = InstanceType<never>;  // any
// type T23 = InstanceType<string>;   Error
// type T24 = InstanceType<Function>;   Error