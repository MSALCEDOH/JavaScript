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


class Order {
    static contOrders = 0;

    static get MAX_PRODUCTOS(){
        return 5;
    }

    constructor(){
        this._idOrder = ++Order.contOrders;
        this._products = [];
        this._contAddProducts = 0;
    }

    get idOrder(){
        return this._idOrder;
    }

    addProduct(product){

        if (this._products.length < Order.MAX_PRODUCTOS){
            this._products.push(product);

        }
        else
        {
            console.log('Cant add more products');
        }
    }

    calculateTotal(){
        let totalSale = 0;

        for (let product of this._products){
            totalSale += product.price;
        }
        return totalSale;
    }

    showOrder(){
        let productOrders = '';
        for (let product of this._products)
        {
            productOrders += '\n{' + product.toString() + '}';
        }

        console.log(`Order: ${this._idOrder} Total: ${this.calculateTotal()}, Products: ${productOrders}`);
    }
}

let product1 = new Product('Pant',200);
let product2 = new Product('Shirt',100);

console.log(product1.toString());
console.log(product2.toString());


let order1 = new Order();
order1.addProduct(product1);
order1.addProduct(product2);

order1.showOrder();

let order2 = new Order();
let product3 = new Product('Built',300);

order2.addProduct(product1);
order2.addProduct(product2);
order2.addProduct(product3);
order2.addProduct(product1);
order2.addProduct(product2);
order2.addProduct(product3);
order2.addProduct(product3);    
order2.showOrder();