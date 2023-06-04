//let cars = new Array("BWM","VOLVO","Mazda");
const cars = ["BWM","VOLVO","Mazda"];
console.log(cars);

console.log(cars[2]);

cars[1] = "Otro"
console.log(cars);

cars.push("Nuevo");
console.log(cars);

cars[cars.length] = "Mmm";
console.log(cars);

cars[6] = "Otro2"
console.log(cars);

console.log(typeof cars);

console.log(Array.isArray(cars));

console.log(cars instanceof Array);