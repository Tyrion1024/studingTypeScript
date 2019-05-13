let pets = new Set(["Cat", "Dog", "Hamster"]);
pets["species"] = "mammals";
for (let pet in pets) {
    console.log('for in', pet); // "species"
}
for (let pet of pets) {
    console.log('for of', pet); // "Cat", "Dog", "Hamster"
}
