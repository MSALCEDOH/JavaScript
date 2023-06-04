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