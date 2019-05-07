//  类型推论


//demo1     基础
let demo1 = 'string1';   //系统对a进行类型推论  结果为string
// a = 12345;   error，因为12345是number类型，与类型推论得到的string不一致
demo1 = 'string2'  //编译成功！符合类型推论的到的结果

//demo2    最佳通用类型
class Animal{
    public sign=123;
}
class Rhino{
    sign = 456;
}
class Elephant{
    sign = 789;
}
class Snake extends Animal{
    constructor(){
        super();
    }
}

let zoo1 = [new Rhino(), new Elephant(), new Snake()];
console.log('类型推断 demo2-zoo1 =>'+JSON.stringify(zoo1));    //想让zoo1被推断为Animal[]， 但数组中没有Animal类的对象因此不能推断为Animal;
let zoo2:Animal[] = [new Rhino(), new Elephant(), new Snake()];
console.log('类型推断 demo2-zoo2 =>'+JSON.stringify(zoo2));    //zoo2的类型是Animal[]


function createZoo(): Animal[] {
    return [new Rhino(), new Elephant(), new Snake()];
    // 这个例子里，最佳通用类型有4个候选者：Animal，Rhino，Elephant和Snake。 当然， Animal会被做为最佳通用类型。
}

//demo3    上下文类型
/*
window.onmousedown = function(mouseEvent) {
    console.log(mouseEvent.button);  //<- Error，mouseEvent被推断为window.onmousedown的类型（function），所以会出现一个类型错误，编译失败。。。
};



window.onmousedown = function(mouseEvent:any) {
    console.log(mouseEvent.button);  //<- success，mouseEvent被规定为any类型，不会被推断为function，所以会编译成功
};
*/