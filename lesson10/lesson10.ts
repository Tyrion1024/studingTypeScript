//类型兼容性    TypeScript结构化类型系统的基本规则是，如果x要兼容y，那么y至少具有与x相同的属性；

// demo1
interface Named {
    name: string;
    // birthday:string;     
}

class Person {
    name: string;
    age:number;
    address:string;
}

let p: Named;
p = new Person(); //编译成功，因为p是Person的实例，且p.name的类型 与 Named中的name的类型 匹配。如果在Named接口中加一个birthday属性就会报错，因为Person实例中没有birthday属性

//demo2
let fn1 = (a: number) => 0;
let fn2 = (b: number, s: string) => 0;

fn2 = fn1; // OK
//fn1 = fn2;  Error
/*
要查看fn1是否能赋值给fn1，首先看它们的参数列表。 fn1的每个参数必须能在fn2里找到对应类型的参数。 注意的是参数的名字相同与否无所谓，只看它们的类型。 这里，fn1的每个参数在fn2中都能找到对应的参数，所以允许赋值。

第二个赋值错误，因为fn2有个必需的第二个参数，但是fn1并没有，所以不允许赋值。
*/




//demo3  可选参数及剩余参数
function invokeLater(args: any[], callback: (...args: any[]) => void) {
    /* ... Invoke callback with 'args' ... */
    callback();
}

// Unsound - invokeLater "might" provide any number of arguments
invokeLater([1, 2], (x=0, y=10) => console.log(x + ', ' + y));

// Confusing (x and y are actually required) and undiscoverable
invokeLater([1, 2], (x?, y?) => console.log(x + ', ' + y));