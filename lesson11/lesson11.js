//函数...
//    可选参数和默认参数
function buildName1(firstName, lastName) {
    return firstName + " " + lastName;
}
// let result1 = buildName1("Bob");                  少一个参数
// let result2 = buildName1("Bob", "Adams", "Sr.");   多一个参数
var result0 = buildName1("Bob", "Adams"); // ah, just right
function buildName2(firstName, lastName) {
    if (firstName === void 0) { firstName = '123'; }
    return firstName + " " + lastName;
}
var result1 = buildName2("Bob"); // 可以运行
// let result2 = buildName2("Bob", "Adams", "Sr.");  多一个参数
var result3 = buildName2("Bob", "Adams"); // ah, just right
//     剩余参数
function buildName3(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + " " + restOfName.join(" ");
}
var employeeName = buildName3("Joseph", "Samuel", "Lucas", "MacKinzie");
var buildNameFun = buildName3;
