// 类  （下）
interface userModel {
    name:string,
    age:number,
    address:string,
    others?:string,
    [propName:string]:any
}


//静态属性: 必须用类名点出静态属性，不可直接用this，派生类也会继承静态属性！

class Person {
    static habits = [1,2,3,4,5];

    constructor(userInfo:userModel){
        for(let key in userInfo){
            this[key] = userInfo[key]
        }
    }
    
    getStatics(){
        // console.log(this.habits)        用this访问会报错      
        console.log(Person.habits)       //必须用类名点出静态属性
    }
}

class Man extends Person {
    constructor(userInfo:userModel){
        super(userInfo)
    }
    getStaticsByMan(){
        console.log(Man.habits)       //必须用类名点出静态属性
    }
}


let user = {
    name:'Lee',
    age:24,
    address:'shanghai',
    from:'shandong',
    gender:'woman'
}

let man = new Man(user);
man.getStatics();
man.getStaticsByMan();
console.log(Man.habits)       //必须用类名点出静态属性






//抽象类
// 定义一个抽象类Department
abstract class Department {
    public name:string;
    constructor(name: string) {
        this.name = name
    }

    printName(): void {
        console.log('Department name: ' + this.name);
    }

    abstract printMeeting(): void; // 定义抽象函数   它必须在派生类中实现
}

class AccountingDepartment extends Department {

    constructor(name:string) {
        super(name); // 在派生类的构造函数中必须调用 super()
    }

    printMeeting(): void {              //实现父类中的抽象函数，如果删掉会报错
        console.log('The Accounting Department meets each Monday at 10am.');  
    }

    generateReports(): void {           //派生类中新添加的方法，抽象父类中没有声明，所以不可以使用！！！
        console.log('Generating accounting reports...');
    }
}

let department: Department; // 允许创建一个对抽象类型的引用
// department = new Department(); // 错误: 不能创建一个抽象类的实例
department = new AccountingDepartment('Lee'); // 允许对一个抽象子类进行实例化和赋值
department.printName();
department.printMeeting();
// department.generateReports(); // 错误: 方法在声明的抽象类中不存在





//构造函数
class Greeter {
    static standardGreeting = "Hello, there";
    greet() {
        return Greeter.standardGreeting;
    }
}

let greeter1: Greeter;
greeter1 = new Greeter();
console.log(greeter1.greet());
let greeterMaker: typeof Greeter = Greeter; //（进入懵B状态。。。）
greeterMaker.standardGreeting = "Hey there!";

let greeter2: Greeter = new greeterMaker();
console.log(greeter2.greet());

// 这个例子里 我们实例化 Greeter类，并使用这个对象。
// 再之后，我们直接使用类。 我们创建了一个叫做 greeterMaker的变量。 这个变量保存了这个类或者说保存了类构造函数。 然后我们使用 typeof Greeter，意思是取Greeter类的类型，而不是实例的类型。 或者更确切的说，"告诉我 Greeter标识符的类型"，也就是构造函数的类型(function)。 这个类型包含了类的所有静态成员和构造函数。 之后，就和前面一样，我们在 greeterMaker上使用 new，创建 Greeter的实例。        说实话，这里很懵！！！！