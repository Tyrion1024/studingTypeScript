// demo 1

interface Person{
    firstName:string,
    lastname:string
}

function greeter(person:Person):string{
    return 'hello,'+ person.firstName+' '+person.lastname
}
let user = {
    firstName:'Jerry',
    lastname:'Lee'
}

console.log('demo1:',greeter(user));



// demo 2

class Student{
    fullname:string
    constructor(public firstname,public middlename, public lastname){
        this.fullname = this.firstname+this.middlename+this.lastname
    }
}


let student = new Student('jerry','· M ·','Lee');
console.log('demo2:',student);