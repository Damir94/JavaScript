
//this keyword
/*
//Create an object:
const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

//Display data from the object:
document.getElementById("demo").innerHTML = person.fullName();


let x = this;
document.getElementById("demo").innerHTML = x;



"use strict";
let x = this;
document.getElementById("demo").innerHTML = x;



document.getElementById("demo").innerHTML = myFunction();
function myFunction() {
    return this;
}


"use strict";
document.getElementById("demo").innerHTML = myFunction();
function myFunction() {
    return this;
}


//Create an object:
const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    myFunction: function() {
        return this;
    }
};

//Display data from the object:
document.getElementById("demo").innerHTML = person.myFunction();



//Create an object:
const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

//Display data from the object: 
document.getElementById("demo").innerHTML = person.fullName();

 

const person1 = {
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}

const person2 = {
    firstName: "John",
    lastName: "Doe",
}

let x = person1.fullName.call(person2);
document.getElementById("demo").innerHTML = x;



const person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}

const member = {
    firstName: "Hege",
    lastName: "Nilsen",
}

let fullName = person.fullName.bind(member);
document.getElementById("demo").innerHTML = fullName();
*/