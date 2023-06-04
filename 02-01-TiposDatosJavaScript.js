//Tipo de dato String
var nombre = "Martin";
console.log(typeof nombre);

//Tipo de datos numerico
var numero = 1000;
console.log(typeof numero);

//Tipo de datos object
var objeto = {
    nombre: "Martin",
    apellido: "Salcedo",
    telefono: "1234"
}
console.log(typeof objeto);

//Boolean
var flg = true;
console.log(typeof flg);

//Tipo de dato function

function mifuncion(){}
console.log(mifuncion);
console.log(typeof mifuncion);

var simbolo = Symbol("mi simbolo");
console.log(typeof simbolo);

//Clase
class Persona {
    constructor(nombre,apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

console.log(typeof Persona);

//undifend

var x;
console.log(typeof x);

//null
var y = null;
console.log(typeof y);

var autos = ["bmw","audi","volvo"];
console.log(typeof autos);
console.log(autos);

var firstname = "Martin";
var lastname = "Salcedo";

var fullname = firstname + " " + lastname;
console.log(fullname);
console.log(fullname + 300 + 22);
console.log(fullname + (300 + 22));
console.log(300 + 22 + fullname);

//
//let para variables
//const para constantes

let nombre2;
nombre2 = "Martin";
console.log(typeof nombre2);
console.log(nombre2);

const nombre3 = "Salcedo";
//nombre3 = "Martin";
console.log(typeof nombre3);
console.log(nombre3);