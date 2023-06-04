//Can't create an object from a class before declare the class
//let personx = new Person('Martin','Salcedo');

class Person {
    constructor (name, lastname){
        this._name = name;
        this._lastname = lastname;
    }

    get name(){
        return this._name
    }

    set name(name){
        this._name = name;
    }

    get lastname(){
        return this._lastname
    }

    set lastname(lastname){
        this._lastname = lastname;
    }

    fullName(){
        return this._name + ' ' + this._lastname
    }
    toString(){
        return this.fullName();
    }
    static greetings(){

        console.log("Greetings");
    }

    static greetings2(Person){

        console.log("Greetings2");
    }
}

let person1 = new Person('Martin','Salcedo');
console.log(person1);

let person2 = new Person('Luciana','Salcedo');
console.log(person2);

console.log(person1.name);
person1.name = 'Jean'
console.log(person1.name);

class Employee extends Person{
    constructor(name, lastname,department){
        super(name,lastname);//Call father's constructor
        this._department = department;
    }

    get department(){
        return this._department;
    }

    set department(department){
        this._department = department;
    }

    //overwrite
    fullName(){
        ///return this._name + ' ' + this._lastname + ' ' + this._department;
        return super.fullName() + ' ' + this._department
    }
}

let employee1 = new Employee('Martin','Salcedo','TI');
console.log(employee1);
console.log(employee1.fullName());
console.log(employee1.toString());



let person5 = new Person('Martin','Salcedo');
console.log(person5);

//person5.greetings(); no es posible
Person.greetings();
Person.greetings2(person1);