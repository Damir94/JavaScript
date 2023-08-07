/*

//Create an object:
const person = {
    firstName: "John",
    lastName: "Doe",
    language: "eng",
    get lang() {
        return this.language;
    }
};

//Display data from the object using a getter:
document.getElementById("demo").innerHTML = person.lang;



//Create an object:
const person = {
    firstName: "John",
    lastName: "Doe",
    language: "NO",
    set lang(value) {
        this.language = value;
    }
};

//Set a property using set:
person.lang = "eng";

//Display data from the object:
document.getElementById("demo").innerHTML = person.language;



const person = {
    fname: "John",
    lname: "Doe",
    language: "eng",
    get lang() {
        return this.language.toLocaleUpperCase();
    }
};

document.getElementById("demo").innerHTML = person.lang;




//Object Constructors

//Constructor function for Person objects:
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.nationality = "English";
}

//Create a Person object:
const myFather = new Person("John", "Doe", 50, "blue");

//Display age
document.getElementById("demo").innerHTML = "My father is " + myFather.nationality + ".";



//Constructor function for Person objects:
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.name = function() {
        return this.firstName + " " + this.lastName
    };
}

//Create a Person object
const myFather = new Person("John", "Doe", 50, "blue");

//Display full name
document.getElementById("demo").innerHTML = "My father is " + myFather.name();




//Constructor function for Person objects 
function Person(firstName, lastName, age, eyeColor) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.eyeColor = eyeColor;
    this.changeName = function (name) {
        this.lastName = name;
    }
}
//Create a Person object:
const myMother = new Person("Sally", "Rally", 48, "green");

//Change last name:
myMother.changeName("Doe");

//Display last name 
document.getElementById("demo").innerHTML = "My mothe's last name is " + myMother.lastName;



//Object Prototypes

function Person(first, last, age, eye) {
    this.firtsName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

Person.prototype.nationality = "English";

const myFather = new Person("John", "Doe", 50, "blue");
document.getElementById("demo").innerHTML = "The nationality of the my father is " + myFather.nationality;


function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.eyeColor = eye;
}

Person.prototype.name = function() {
    return this.firstName + " " + this.lastName
};

const myFather = new Person("John", "Doe", 50, "blue");
document.getElementById("demo").innerHTML = "My father is " + myFather.name();
*/