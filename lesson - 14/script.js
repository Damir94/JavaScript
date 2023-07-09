
//Eval()

/*
let a = 5;
let b = 10;

let result = 'a + b';
console.log(eval(result)); // prints: 15


// IIFE 

//syntax
(() => {
    console.log('Hello World!');
})(); // prints: Hello World! 



(function () {
    console.log('Hello World!');
})(); // prints: Hello World!



(function myIIFE () {
    console.log('Hello World!');
})(); // prints: Hello World!


//Prototype 

Object.prototype.getAge = function() {
    console.log('I am 24 years old');
}


//OOP and FP

//constructor function

function User(name) {
    this.name = name;
}
let user = new User('John');
console.log(user.name); // prints: John


// Class

class User {
    constructor(name) {
        this.name = name;
    }
    greeting() {
        console.log(this.name);
    }
}

let user = new User('Jonh');
user.greeting(); // prints: John



class Car {
    constructor(color, name, price) {
        this.color = color;
        this.name = name;
        this.price = price;
    }
    showInfo() {
        console.log(`${this.color} ${this.name} is ${this.price}`);
    }
}

const car1 = new Car('Black', 'Toyato', '$25,000');
car1.showInfo(); // prints: Black Toyato is $25,000

const car2 = new Car('White', 'Ford', '$20,000');
car2.showInfo(); // prints: White Ford is $20,000



class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }
    register() {
        console.log(`${this.username} is now registered.`);
    }
}

class Member extends User {
    constructor(username, email, password, memberPackage) {
        super(username, email, password);
        this.package = memberPackage;
    }
    getPackage() {
        console.log(`${this.username} is subscribed to the ${this.package} package.`);
    }
}

let member = new Member('John', 'example@gmail.com', '12345', 'monthly');

member.getPackage(); // prints: John is subscribed to the monthly package.

member.register(); // prints: John is now registered.

*/