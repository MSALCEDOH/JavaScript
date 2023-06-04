let person = {
    firstname : "Juan",
    lastname : "Perez",
    email: "fsdfs@edfewf",
    age: 34,
    fullname: function(){
        return this.firstname + ' ' + this.lastname;
    }
}

console.log(person.age);
console.log(person.fullname());

let person2 = new Object();
person2.name = "Carlos";
person2.addres = "Av A";
person2.phone = "123456";

console.log(person2.addres);

console.log(person["firstname"]);

for (nameProperty in person)
{
    console.log(nameProperty);
    console.log(person[nameProperty]);
}

person.phone = "123456";
console.log(person);

delete person.phone;
console.log(person);

let personArray = Object.values(person);
console.log(personArray);

let personString = JSON.stringify(person);
console.log(personString);


let person3 = {
    firstname : "Juan",
    lastname : "Perez",
    email: "fsdfs@edfewf",
    age: 34,
    language: "es",
    get lang(){
        return this.language.toUpperCase();
    },
    set lang(lang){
        this.language = lang.toUpperCase();
    },
    get fullname(){
        return this.firstname + ' ' + this.lastname;
    }
}

console.log(person3.fullname);
console.log(person3.lang);

person3.lang = "en";
console.log(person3.lang);
console.log(person3.language);

//Constructor
function Person(firstname,lastname, email){
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.fullname = function(){
        return this.firstname + ' ' + this.lastname;
    }
}

let father = new Person("Juan", "Perez","sdss@ewwerwe");
console.log(father);

let mather = new Person("Alicia", "Hidalgo","opiopi@ewwerwe");
console.log(mather);

console.log(father.fullname());
console.log(mather.fullname());

let myObject = new Object();
let myObject2 = {};

Person.prototype.tel = 1232131;

console.log(father.tel);
console.log(mather.tel);

father.tel = 789987978;

console.log(father.tel);

let person1 = {
    name: 'Maaaaaaaa',
    lastname:'Paaaaaaa',
    fullname: function(title, phone){
        return this.name + ' ' + this.lastname + ' ' + title + ' ' + phone;
    }
}

let person4 = {
    name: 'Meeeeee',
    lastname:'Peeeeeeee'
}

console.log(person1.fullname());

console.log(person1.fullname.call(person4));
console.log(person1.fullname.call(person4,'Ing','1234556'));