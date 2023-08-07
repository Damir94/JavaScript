/*

let person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

document.getElementById("demo").innerHTML = person.firstName + " " + person.lastName;



const person = {};
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "Blue";

document.getElementById("demo").innerHTML = person.firstName + "  " + person.lastName + " is " + person.age + " years old."



const person = new Object();
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";

document.getElementById("demo").innerHTML = person.firstName + " is " + person.age + " years old."



const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

const x = person;
x.age = 10;

document.getElementById("demo").innerHTML = person.firstName + " is " + person.age + " years old."



const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

document.getElementById("demo").innerHTML = person["firstName"] + " is " + person["age"] + " years old."



const person = {
    fname: "John",
    lname: "Doe",
    age: 25
};

person.nationality = "English";

let txt = "";
for (let x in person) {
    txt += person[x] + " ";
}

document.getElementById("demo").innerHTML = txt;



const person = {
    fname: "John",
    lname: "Doe",
    age: 50,
    eyeColor: "blue"
};

delete person.age;

document.getElementById("demo").innerHTML = person.fname + " is " + person.age + " years old."


const myObj = {
    name: "John",
    age: 30,
    cars: {
        car1: "Ford",
        car2: "BMW",
        car3: "Fiat"
    }
}

document.getElementById("demo").innerHTML = myObj.cars.car2;



let x = "";

const myObj = {
    name: "John",
    age: 50,
    cars: [
        {name: "Ford", models: ["Fiesta", "Focus", "Mustang"]},
        {name: "BMW", models: ["320", "X3", "X5"]},
        {name: "Fiat", models: ["500", "Panda"]}
    ]
}

for (let i in myObj.cars) {
    x += "<h2>" + myObj.cars[i].name + "</h2>";
    for (let j in myObj.cars[i].models) {
        x += myObj.cars[i].models[j] + "<br>";
    }
}

document.getElementById("demo").innerHTML = x;



const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

document.getElementById("demo").innerHTML = person.fullName();



const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
};
person.name = function() {
    return (this.firstName + " " + this.lastName).toUpperCase();
};

document.getElementById("demo").innerHTML = "My father is " + person.name();



const person = {
    name: "John",
    age: 30,
    city: "New York"
};

document.getElementById("demo").innerHTML = Object.values(person);



const person = {
    name: "John",
    age: 30,
    city: "New York"
};

document.getElementById("demo").innerHTML = JSON.stringify(person);



const person = {
    name: "John",
    age: function() {return 30;}
};
person.age = person.age.toString();

document.getElementById("demo").innerHTML = JSON.stringify(person);



const arr = ["John", "Peter", "Sally", "Jane"];
document.getElementById("demo").innerHTML = JSON.stringify(arr);
*/


