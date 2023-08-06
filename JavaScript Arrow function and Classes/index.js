
//Arrow function


/*
let myFunction = (a, b) => a * b;
document.getElementById("demo").innerHTML = myFunction(4, 5);


let hello = "";

hello = () => {
    return "Hello World!";
}
document.getElementById("demo").innerHTML = hello();


let hello = "";

hello = () => "Hello World!";
document.getElementById("demo").innerHTML = hello();


let hello = "";

hello = val => "Hello " + val;
document.getElementById("demo").innerHTML = hello("Universe!") 



let hello = "";

hello = function() {
    document.getElementById("demo").innerHTML += this;
}

//The window object calls the function:
window.addEventListener("load", hello);

//A button object calls the function: 
document.getElementById("btn").addEventListener("click", hello);


let hello = "";

hello = () => {
    document.getElementById("demo").innerHTML += this;
}

//The window object calls the function: 
window.addEventListener("load", hello);

//A button object calls the function: 
document.getElementById("btn").addEventListener("click", hello);





//Classes

class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}

const myCar1 = new Car("Ford", 2014);
const myCar2 = new Car("Audi", 2019);

document.getElementById("demo").innerHTML = myCar1.name + " " + myCar2.name;



class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    age() {
        const date = new Date();
        return date.getFullYear() - this.year;
    }
}

const myCar = new Car("Ford", 2014);
document.getElementById("demo").innerHTML = "My car is " + myCar.age() + " years old.";




class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    age(x) {
        return x - this.year;
    }
}

const date = new Date();
let year = date.getFullYear();

const myCar = new Car("Ford", 2014);
document.getElementById("demo").innerHTML = "My car is " + myCar.age(year) + "years old.";
*/


