//类（上）


interface userModel{
    name:string,
    age:number,
    address:string,
    others?:string,
    [propName:string]:any
}


class Person {
    readonly gender:string;
    age:number;
    protected password:string;    //如果是protected，派生类可以修改。   
    // private password:string;     //如果是private，派生类不可以修改。  
    constructor(userInfo:userModel){
        for(let key in userInfo){
            this[key] = userInfo[key]
        }
    }
    getInfo():void{
        console.log(this.password);
    }
    growUp(){
        this.age++;
    }
}


class Man extends Person {
    readonly gender = 'man';
    constructor(userInfo:userModel){
        super(userInfo);
    }
    setPWD(val:string){
        this.password = val;
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

man.setPWD('123456');
man.getInfo();
console.log(man);