//高级类型 


//交叉类型（Intersection Types）
function extend<T, U>(first: T, second: U): T & U {
    let result = <T & U>{};
    for (let id in first) {
        (<any>result)[id] = (<any>first)[id];
    }
    for (let id in second) {
        if (!result.hasOwnProperty(id)) {
            (<any>result)[id] = (<any>second)[id];
        }
    }
    return result;
}

class Person {
    constructor(public name: string) { }
}
// class Person {
//     public name:string;
//     constructor(name:string){
//         this.name = name;
//     }
// }

interface Loggable {
    log(): void;
}
class ConsoleLogger implements Loggable {
    log() {
        console.log(this)
    }
}
var jim = extend(new Person("Jim"), new ConsoleLogger());
jim.log();




// 联合类型（Union Types）
function padLeft(value: string, padding: number|string) {
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
        return padding + value;
    }
    throw new Error(`Expected string or number, got '${padding}'.`);
}

let indentedString = padLeft("Hello world", 3); // 编译阶段通过，运行时报错
console.log(indentedString)



//类型保护与区分类型（Type Guards and Differentiating Types）
interface Bird {
    fly();
    layEggs();
}

interface Fish {
    swim();
    layEggs();
}

function getSmallPet(): Fish | Bird {
    let result = {
        fly(){
            console.log('bird fly')
        },
        layEggs(){
            console.log('bird egg')
        }
    }
    return result
}

let pet = getSmallPet();
if ((<Fish>pet).swim) {
    (<Fish>pet).swim();
}
else if ((<Bird>pet).fly) {
    (<Bird>pet).fly();
}
//自定义类型保护
function isFish(pet:Fish|Bird):pet is Fish{
    return !!(<Fish>pet).swim
}
// function isBird(pet:Fish|Bird):pet is Bird{
//     return !!(<Bird>pet).fly
// }
if(isFish(pet)){
    pet.swim()
}else{
    pet.fly()
}


//  instanceof类型保护
interface Padder {
    getPaddingString(): string
}

class SpaceRepeatingPadder implements Padder {
    constructor(private numSpaces: number) { }
    getPaddingString() {
        return Array(this.numSpaces + 1).join(" ");
    }
    print(){
        console.log('SpaceRepeatingPadder')
    }
}

class StringPadder implements Padder {
    constructor(private value: string) { }
    getPaddingString() {
        return this.value;
    }
    say(){
        console.log('StringPadder')
    }
}

function getRandomPadder() {
    return Math.random() < 0.5 ?
        new SpaceRepeatingPadder(4) :
        new StringPadder("  ");
}

// 类型为SpaceRepeatingPadder | StringPadder
let padder: Padder = getRandomPadder();

if (padder instanceof SpaceRepeatingPadder) {
    padder.print();
}
if (padder instanceof StringPadder) {
    padder.say();
}






// 可以为null的类型 任何类型的值都可以被赋值为null和undefined
let s = 123;
s = null; 
s = undefined; 
let sn: string = "bar";
sn = undefined; 
sn = null; 






