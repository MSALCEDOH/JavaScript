class Person{

    static contPerson = 0;

    constructor(name,lastname,age){
        this._idPerson=++Person.contPerson;
        this._name=name;
        this._lastname=lastname;
        this._age=age;
    }

    get idPerson(){
        return this._idPerson;
    }

    get name(){
        return this._name;
    }

    get lastname(){
        return this._lastname;
    }

    get age(){
        return this._age;
    }
    
    set name(name){
        this._name = name;
    }

    set lastname(lastname){
        this._lastname = lastname;
    }

    set age(age){
        this._age= age;
    }

    toString(){
        return `
        ${this._idPerson} 
        ${this._name} 
        ${this._lastname} 
        ${this._age}`;
    }

}

class Employee extends Person {
    static contEmployee = 0;

    constructor(name,lastname,age,salary){
        super(name,lastname,age);
        this._idEmployee = ++Employee.contEmployee;
        this._salary=salary;
    }

    get idEmployee(){
        return this._idEmployee;
    }

    get salary(){
        return this._salary;
    }

    set salary(salary){
        this._salary=salary;
    }

    toString(){
        return `${super.toString()} ${this._idEmployee} ${this._salary}`;
    }

}

class Client extends Person{
    static contClient = 0;

    constructor(name,lastname,age,regDate){
        super(name,lastname,age);
        this._idClient = ++Client.contClient;
        this._regDate = regDate;
    }

    get idClient(){
        return this._idClient;
    }

    get regDate(){
        return this._regDate;
    }

    set regDate(regDate){
        this._regDate = regDate;
    }

    toString(){
        return `${super.toString()} ${this._idClient} ${this._regDate}`;
    }
}

let person1 = new Person ('Martin','Salcedo',34)
console.log(person1.toString());

let person2 = new Person ('Carlos','Angeles',33)
console.log(person2.toString());

let employee1 = new Employee ('Karla','Gonmez',35, 5000)
console.log(employee1.toString());

let employee2= new Employee ('Laura','No esta',36, 6000)
console.log(employee2.toString());

let client1 = new Client ('Miguel','Narcizo',37, new Date())
console.log(client1.toString());

let client2 = new Client ('Maria','Lamas',38, '2023-06-03')
console.log(client2.toString());