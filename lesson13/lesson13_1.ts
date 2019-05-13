let pets = new Set(["Cat", "Dog", "Hamster"]);
pets["species"] = "mammals";

for (let pet in pets) {
    console.log('for in',pet); // "species"
}

for (let pet of pets) {
    console.log('for of',pet); // "Cat", "Dog", "Hamster"
}

/**
 * 
 * for..in可以操作任何对象；它提供了查看对象属性的一种方法。 但是 for..of关注于迭代对象的值。
 * 
 * for..of和for..in均可迭代一个列表；但是用于迭代的值却不同，for..in迭代的是对象的 键 的列表，而for..of则迭代对象的键对应的值
 * 
 * 
 */