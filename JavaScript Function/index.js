
/*
let x = myFunction(4, 3);
document.getElementById("demo").innerHTML = x;

function myFunction(a, b) {
    return a * b;
}


const x = function (a, b) {return a * b};
document.getElementById("demo").innerHTML = x;


(function () {
    document.getElementById("demo").innerHTML = "Helolo! I called myself";
})();



function myFunction(a, b) {
    return a * b;
}

let x = myFunction(4, 3) * 2;
document.getElementById("demo").innerHTML = x;


function myFunction(a, b) {
    return arguments.length;
}
document.getElementById("demo").innerHTML = myFunction(4, 3);


function myFunction(a, b ) {
    return a * b;
}
document.getElementById("demo").innerHTML = myFunction.toString();



const x = (x, y) => { return x * y };
document.getElementById("demo").innerHTML = x(5, 5);


function myFunction(x, y) {
    if (y === undefined) {
        y = 2;
    }
    return x * y;
}
document.getElementById("demo").innerHTML = myFunction(4);



function myFunction(x, y = 10) {
    return x + y;
}
document.getElementById("demo").innerHTML = myFunction(5);



function sum(...arguments) {
    let sum = 0;
    for (let arg of arguments) sum += arg;
    return sum;
}

let x = sum(4, 9, 16, 25, 29, 100, 66, 77);
document.getElementById("demo").innerHTML = x;



function findMax() {
    let max = -Infinity;
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}
document.getElementById("demo").innerHTML = findMax(4, 5, 6);


function sumAll() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}
document.getElementById("demo").innerHTML = sumAll(1, 123, 500, 115, 44, 88);


function myFunction(a, b) {
    return a * b;
}
document.getElementById("demo").innerHTML = myFunction(10, 2);



const person = {
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}
const person1 = {
    firstName: "John",
    lastName: "Doe"
}

document.getElementById("demo").innerHTML = person.fullName.call(person1);



const person = {
    fullName: function(city, country) {
        return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
}

const person1 = {
    firstName: "John",
    lastName: "Doe"
}

document.getElementById("demo").innerHTML = person.fullName.call(person1, "Oslo", "Norway");



const person = {
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}

const person1 = {
    firstName: "John",
    lastName: "Doe"
}

document.getElementById("demo").innerHTML = person.fullName.apply(person1);



const person = {
    fullName: function(city, country) {
        return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
}

const person1 = {
    firstName: "John",
    lastName: "Doe"
}

document.getElementById("demo").innerHTML = person.fullName.apply(person1, ["Oslo", "Norway"]);


document.getElementById("demo").innerHTML = Math.max(1, 2, 3);

document.getElementById("demo").innerHTML = Math.max.apply(null, [1,2,3]);



const person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}

const member = {
    firstName: "Hege",
    lastName: "Nilsen"
}

let fullName = person.fullName.bind(member);
document.getElementById("demo").innerHTML = fullName();



const person = {
    firstName: "John",
    lastName: "Doe",
    display: function() {
        let x = document.getElementById("demo");
        x.innerHTML = this.firstName + " " + this.lastName;
    }
}

let display = person.display.bind(person);
setTimeout(display, 3000);



const add = (function () {
    let counter = 0;
    return function () {counter += 1; return counter;}
})();

function myFunction() {
    document.getElementById("demo").innerHTML = add();
}
*/
