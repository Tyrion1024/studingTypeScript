//函数...


//    可选参数和默认参数
function buildName1(firstName: string, lastName: string) {
    return firstName + " " + lastName;
}

// let result1 = buildName1("Bob");                  少一个参数
// let result2 = buildName1("Bob", "Adams", "Sr.");   多一个参数
let result0 = buildName1("Bob", "Adams");         // ah, just right



function buildName2(firstName: string = '123', lastName?: string) {
    return firstName + " " + lastName;
}


let result1 = buildName2("Bob");  // 可以运行
// let result2 = buildName2("Bob", "Adams", "Sr.");  多一个参数
let result3 = buildName2("Bob", "Adams");  // ah, just right



//     剩余参数
function buildName3(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}
let employeeName = buildName3("Joseph", "Samuel", "Lucas", "MacKinzie");
let buildNameFun: (fname: string, ...rest: string[]) => string = buildName3;

