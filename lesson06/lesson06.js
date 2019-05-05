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
//静态属性: 必须用类名点出静态属性，不可直接用this，派生类也会继承静态属性！
var Person = /** @class */ (function () {
    function Person(userInfo) {
        for (var key in userInfo) {
            this[key] = userInfo[key];
        }
    }
    Person.prototype.getStatics = function () {
        // console.log(this.habits)        用this访问会报错      
        console.log(Person.habits); //必须用类名点出静态属性
    };
    Person.habits = [1, 2, 3, 4, 5];
    return Person;
}());
var Man = /** @class */ (function (_super) {
    __extends(Man, _super);
    function Man(userInfo) {
        return _super.call(this, userInfo) || this;
    }
    Man.prototype.getStaticsByMan = function () {
        console.log(Man.habits); //必须用类名点出静态属性
    };
    return Man;
}(Person));
var user = {
    name: 'Lee',
    age: 24,
    address: 'shanghai',
    from: 'shandong',
    gender: 'woman'
};
var man = new Man(user);
man.getStatics();
man.getStaticsByMan();
console.log(Man.habits); //必须用类名点出静态属性
//抽象类
// 定义一个抽象类Department
var Department = /** @class */ (function () {
    function Department(name) {
        this.name = name;
    }
    Department.prototype.printName = function () {
        console.log('Department name: ' + this.name);
    };
    return Department;
}());
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment(name) {
        return _super.call(this, name) || this;
    }
    AccountingDepartment.prototype.printMeeting = function () {
        console.log('The Accounting Department meets each Monday at 10am.');
    };
    AccountingDepartment.prototype.generateReports = function () {
        console.log('Generating accounting reports...');
    };
    return AccountingDepartment;
}(Department));
var department; // 允许创建一个对抽象类型的引用
// department = new Department(); // 错误: 不能创建一个抽象类的实例
department = new AccountingDepartment('Lee'); // 允许对一个抽象子类进行实例化和赋值
department.printName();
department.printMeeting();
// department.generateReports(); // 错误: 方法在声明的抽象类中不存在
//构造函数
var Greeter = /** @class */ (function () {
    function Greeter() {
    }
    Greeter.prototype.greet = function () {
        return Greeter.standardGreeting;
    };
    Greeter.standardGreeting = "Hello, there";
    return Greeter;
}());
var greeter1;
greeter1 = new Greeter();
console.log(greeter1.greet());
var greeterMaker = Greeter; //（进入懵B状态。。。）
console.log(typeof greeterMaker, greeterMaker);
greeterMaker.standardGreeting = "Hey there!";
var greeter2 = new greeterMaker();
console.log(greeter2.greet());
// 这个例子里 我们实例化 Greeter类，并使用这个对象。
// 再之后，我们直接使用类。 我们创建了一个叫做 greeterMaker的变量。 这个变量保存了这个类或者说保存了类构造函数。 然后我们使用 typeof Greeter，意思是取Greeter类的类型，而不是实例的类型。 或者更确切的说，"告诉我 Greeter标识符的类型"，也就是构造函数的类型(function)。 这个类型包含了类的所有静态成员和构造函数。 之后，就和前面一样，我们在 greeterMaker上使用 new，创建 Greeter的实例。        说实话，这里很懵！！！！
