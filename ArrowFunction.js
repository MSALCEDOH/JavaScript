function myFunction(){
    console.log("Greetings");
}

myFunction();

const myFunction2 = () => {
    console.log("Greetings 2");

}

myFunction2();

const myFunction3 = () => 'Greetings 3'

console.log(myFunction3());

const myFunction4 = () => ({name: 'Juan'})

console.log(myFunction4());

const myFunction5 = (a) => console.log(a);

myFunction5('asas');

const myFunction6 = (a, b) => a*b;

console.log(myFunction6(8,3));