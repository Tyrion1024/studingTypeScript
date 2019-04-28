// demo 1
function greeter(person) {
    return 'hello,' + person.firstName + ' ' + person.lastname;
}
var user = {
    firstName: 'Jerry',
    lastname: 'Lee'
};
console.log('demo1:', greeter(user));
// demo 2
var Student = (function () {
    function Student(firstname, middlename, lastname) {
        this.firstname = firstname;
        this.middlename = middlename;
        this.lastname = lastname;
        this.fullname = this.firstname + this.middlename + this.lastname;
    }
    return Student;
})();
var student = new Student('jerry', '· M ·', 'Lee');
console.log('demo2:', student);
