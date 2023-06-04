class Product {
    
    static contProduct = 0;

    constructor(name,price){
        this._idProduct = ++Product.contProduct;
        this._name = name;
        this._price = price;
    }

    get idProduct(){
        return this._idProduct;
    }

    get name(){
        return this._name;
    }

    set name(name){
        this._name=name;
    }

    get price(){
        return this._price;
    }

    set price(price){
        this._price = price;
    }

    toString(){
        return `idProduct: ${this._idProduct}, name: ${this._name}, price: ${this._price}`
    }
}