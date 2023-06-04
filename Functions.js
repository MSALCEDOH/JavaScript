function myFunction (a , b){
    console.log(a+b);
}

myFunction (4,6);
myFunction (1,2);

function myFunction2(a,b){
    return a+b;
}

console.log(myFunction2 (1,2));

let x = function (a,b) {return a+b};
console.log(x(1,3));

(function (a,b)
{
    console.log(a+b);
})(3,4);

function myFunction3 (a , b, c){
    console.log(arguments.length);
    return a+b;
}

//Arrows
const sumArrow = (a,b) => a + b;
console.log(sumArrow(3,4));

const person = {
    firstname : "Martin",
    lastname : "Salcedo"
}

function changeObject (p){
    p.firstname = "Luciana";
    p.lastname = "Manco"

}

changeObject(person)
console.log(person);