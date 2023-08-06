/*
let car;
document.getElementById("demo").innerHTML = car + "<br>" + typeof car;


let car = "Volvo";
car = undefined;

document.getElementById("demo").innerHTML = car + "<br>" + typeof  car;


let car = "";
document.getElementById("demo").innerHTML = "The value is: " + car + "<br>" + "The type is: " + typeof car;



let person = {firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue"};
person = null;
document.getElementById("demo").innerHTML = typeof person;



const cars = ["Saab", "Volvo", "BMW"];

document.getElementById("demo").innerHTML = (cars instanceof Array) + "<br>" +
(cars instanceof Object) + "<br>" + (cars instanceof String) + "<br>" + (cars instanceof Number);



document.getElementById("demo").innerHTML = Number("3.14") + "<br>" +
Number(Math.PI) + "<br>" + Number("    ") + 
"<br>" + Number("") + 
"<br>" + Number("99 88") + "<br>" +
Number("John") + "<br>";



let y = "5"; 
let x = + y;
document.getElementById("demo").innerHTML = typeof y + "<br>" + typeof x;



let y = "John";
let x = + y;
document.getElementById("demo").innerHTML = typeof y + "<br>" + typeof x;



let x = 123;
document.getElementById("demo").innerHTML = String(x) + "<br>" +
String(123) + "<br>" + String(100 + 23);


let x = 123;
document.getElementById("demo").innerHTML = x.toString() + "<br>" + (123).toString() + "<br>" + (100 + 23).toString();



document.getElementById("demo").innerHTML = 5 & 1;
document.getElementById("demo").innerHTML= 5 | 1;
document.getElementById("demo").innerHTML = 5 ^ 1;
document.getElementById("demo").innerHTML = ~ 5;
document.getElementById("demo").innerHTML = 5 << 1;
document.getElementById("demo").innerHTML = -5 >> 1;
document.getElementById("demo").innerHTML = 5 >> 1;
document.getElementById("demo").innerHTML = dec2bin(-5);
function dec2bin(dec) {
    return (dec >>> 0).toString(2);
}
document.getElementById("demo").innerHTML = bin2dec(101);
function bin2dec(bin) {
    return parseInt(bin, 2).toString(10);
}



let text = "Visit W3Schools!";
let n = text.search("W3Schools");
document.getElementById("demo").innerHTML = n;


let text = "Visit W3Schools!";
let n = text.search(/w3Schools/i);
document.getElementById("demo").innerHTML = n;


function myFunction() {
    let text = document.getElementById("demo").innerHTML;
    document.getElementById("demo").innerHTML = text.replace("Microsoft", "W3Schools");
}
*/
