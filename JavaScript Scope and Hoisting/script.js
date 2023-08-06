
/*

//Scope

myFunction();

function myFunction() {
    let carName  = "Volvo";
    document.getElementById("demo1").innerHTML = typeof carName + " " + carName;
}

document.getElementById("demo2").innerHTML = typeof carName;



let carName = "Volvo";
myFunction();

function myFunction() {
    document.getElementById("demo").innerHTML = "I can display " + carName;
}


myFunction();
document.getElementById("demo").innerHTML = "I can display " + carName;

function myFunction() {
    carName = "Volvo";
}

var carName = "Volvo";

document.getElementById("demo").innerHTML = "I can display " + window.carName;



let carName = "Volvo";

document.getElementById("demo").innerHTML = "I can not display " + window.carName;


//JavaScript Hoisting

x = 5; // Assign 5 to x

elem = document.getElementById("demo"); //Find an element
elem.innerHTML = x; //Display x in the element

var x; // Declare x



try {
    carName = "Saab";
    let carName = "Volvo";
}
catch(err) {
    document.getElementById("demo").innerHTML = err;
}



carName = "Volvo";
//const carName;
document.getElementById("demo").innerHTML = carName;



var x = 5;
var y = 7;

elem = document.getElementById("demo").innerHTML = x + " " + y;

*/

var x = 5; //Initialize x

elem = document.getElementById("demo"); //Find an element
elem.innerHTML = "x is " + x + " and y is " + y; // Display x and y
var y = 7; // Initialize y