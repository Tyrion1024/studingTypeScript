function prientLabel(labelObj) {
    console.log('demo1 label->', labelObj.label);
    console.log('demo1 size->', labelObj.size);
    console.log('demo1 width->', labelObj.width); //labelObj中不存在就会打印 undefined
}
var myObj1 = {
    label: 'size = ten',
    size: 10
};
prientLabel(myObj1);
//接口（interface）demo2
function returnSTH(labelObj) {
    var result = {};
    for (var i in labelObj) {
        result['key_' + i] = labelObj[i];
    }
    return result;
}
console.log('demo2:', returnSTH(myObj1));
;
function demo3(user) {
    console.log("demo3 name:" + user.name);
    console.log("demo3 age:" + user.age);
    // if(!user.from){
    //     user.from  = '保密'  //直接报错，不能通过编译
    // }
    if (user.from) {
        console.log("demo3 from" + user.from);
    }
    else {
        console.log("demo3 from:保密");
    }
}
var me = {
    name: 'Lee',
    age: 24,
    birthday: '1995-05-21'
};
demo3(me);
//demo4 readonlyArray 只读数组，我接受二次赋值
var a = [1, 2, 3, 4];
var ro = a;
console.log('demo4 readonlyArray:', ro);
// ro[0] = 12; //直接报错，不能通过编译
// ro.push(5); //直接报错，不能通过编译
// ro.length = 100; //直接报错，不能通过编译
// a = ro; //直接报错，不能通过编译
// demo5 使用类型断言重写ro
a = ro;
a[0] = 500; //类型断言重写后，可以通过修改数组a，映射到数组ro  也就完成了对ro的修改   直接修改ro还是会报错的！
console.log('demo5 :', ro);
//demo6   使用类型断言绕过了demo2中的属性检查
console.log('demo6=>', returnSTH({ label: 'size = 5', size: 5, color: 'black' }));
//demo7  使用字符串索引签名(在labelVal中加入了 “[propName: string]: any;”)；
console.log('demo7=>', returnSTH({ label: 'size = 5', size: 5, height: 175 }));
var sumNum;
sumNum = function (num1, num2) {
    var res = num1 - num2;
    return res >= 0;
};
console.log('demo8=>', sumNum(-4, -12));
var myArray;
myArray = ['aaa', 'ddd'];
var myStr = myArray[1];
console.log('demo9=>', myStr);
