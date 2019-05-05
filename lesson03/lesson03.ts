//接口(interface 上)demo1
interface labelVal{
    label:string,
    size:number,
    width?:number, //可选属性
    [propName: string]: any;
}

function prientLabel(labelObj:labelVal){
    console.log('demo1 label->',labelObj.label)
    console.log('demo1 size->',labelObj.size)
    console.log('demo1 width->',labelObj.width) //labelObj中不存在就会打印 undefined
}
let myObj1 = {
    label:'size = ten',
    size:10
}
prientLabel(myObj1);


//接口（interface）demo2
function returnSTH(labelObj:labelVal):{key_label?:string,key_size?:number,key_width?:number}{
    let result = {}
    for(let i in labelObj){
        result['key_'+i] = labelObj[i]
    }
    return result
}
console.log('demo2:',returnSTH(myObj1));
//console.log(returnSTH({color:'black'}))  //会报错，原因是因为labelVal中并没有写color这个属性，  所以没有逃过ts的额外属性检查





//接口（interface）demo3 接口中使用只读属性
interface userInfo{
    readonly name : string;
    readonly age : number;
    readonly from? : string;
};

function demo3(user:userInfo){
    console.log("demo3 name:"+user.name)
    console.log("demo3 age:"+user.age)
    // if(!user.from){
    //     user.from  = '保密'  //直接报错，不能通过编译
    // }
    if(user.from){
        console.log("demo3 from"+user.from);
    }else{
        console.log("demo3 from:保密");
    }
}
let me = {
    name:'Lee',
    age:24,
    birthday:'1995-05-21'
}
demo3(me);


//demo4 readonlyArray 只读数组，我接受二次赋值
let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
console.log('demo4 readonlyArray:',ro)
// ro[0] = 12; //直接报错，不能通过编译
// ro.push(5); //直接报错，不能通过编译
// ro.length = 100; //直接报错，不能通过编译
// a = ro; //直接报错，不能通过编译



// demo5 使用类型断言重写ro
a = ro as number[];
a[0] = 500; //类型断言重写后，可以通过修改数组a，映射到数组ro  也就完成了对ro的修改   直接修改ro还是会报错的！
console.log('demo5 :',ro);



//demo6   使用类型断言绕过了demo2中的属性检查
console.log('demo6=>',returnSTH({ label: 'size = 5', size: 5, color:'black'} as labelVal));

//demo7  使用字符串索引签名(在labelVal中加入了 “[propName: string]: any;”)；
console.log('demo7=>',returnSTH({ label: 'size = 5', size: 5, height:175}));


//demo8    函数接口
interface Sumfunc{
    (num1:number,num2:number):boolean;
}

let sumNum:Sumfunc;
sumNum = function(num1:number,num2:number):boolean{
    let res = num1 - num2
    return res>=0
}
console.log('demo8=>',sumNum(-4,-12));



//demo9     可索引的类型 数值型的字符串索引
interface StringArray {
    // [index: number]: string;
    readonly [index: number]: string;
  }
  
  let myArray: StringArray;
  myArray = ['aaa','ddd'];
  
  let myStr: string = myArray[1];
  console.log('demo9=>',myStr);
//   myArray[0] = 'bbb'  会报错，因为StringArray中的索引类型是只读的。。。



//demo10 
interface NumberDictionary {
  [index: string]: number;
  length: number;    // 可以，length是number类型
//   name: string       // 错误，`name`的类型与索引类型返回值的类型不匹配
}