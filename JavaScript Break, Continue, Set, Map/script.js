
/*
let text = "";
for (let i = 0; i < 10; i++) {
    if (i === 3) { break; }
    text += "The number is " + i + "<br>";
}
document.getElementById("demo").innerHTML = text;



let text = "";
for(let i = 0; i < 10; i++) {
    if (i === 3) { continue; }
    text += "The number is " + i + "<br>";
}
document.getElementById("demo").innerHTML = text;


const cars = ["BMW", "Volvo", "Saab", "Ford"];
let text = "";

list: {
    text += cars[0] + "<br>";
    text += cars[1] + "<br>";
    break list;
    text += cars[2] + "<br>";
    text += cars[3] + "<br>";
}
document.getElementById("demo").innerHTML = text;


//Create a string
const name = "W3Schools";

//List all Elements
let text = "";
for (const x of name) {
    text += x + "<br>";
}
document.getElementById("demo").innerHTML = text;


//Create array
const letters = ["a", "b", "c"];

//List all Elements
let text = "";
for (const x of letters) {
    text += x + "<br>";
}
document.getElementById("demo").innerHTML = text;



//Create a Set
const letters = new Set(["a", "b", "c"]);

//List all Elements
let text = "";
for (const x of letters) {
    text += x + "<br>";
}
document.getElementById("demo").innerHTML = text;



//Create a Map 
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);

// List all entries
let text = "";
for (const x of fruits) {
    text += x + "<br>";
}
document.getElementById("demo").innerHTML = text;



//Create a Set
const letters = new Set(["a", "b", "c"]);

//Display set.size
document.getElementById("demo").innerHTML = letters.size;



//Create a Set
const letters = new Set();

//Add Values to the Set
letters.add("a");
letters.add("b");
letters.add("c");

//Display set.size 
document.getElementById("demo").innerHTML = letters.size;



//Create a Set
const letters = new Set();

//Create Variables
const a = "a";
const b = "b";
const c = "c";

//Add the Variables to the Set
letters.add(a);
letters.add(b);
letters.add(c);

//Display set.size
document.getElementById("demo").innerHTML = letters.size;



//Create a new Set
const letters = new Set(["a", "b", "c"]);

//Add a new Element
letters.add("d");
letters.add("e");

//Display set.size
document.getElementById("demo").innerHTML = letters.size;


//Create a Set
const letters = new Set();

//Add values to the Set
letters.add("a");
letters.add("b");
letters.add("c");
letters.add("c");
letters.add("c");
letters.add("c");
letters.add("c");

//Display set.size
document.getElementById("demo").innerHTML = letters.size;



//Create a Set
const letters = new Set(["a", "b", "c"]);

//List all Elements
let text = "";
letters.forEach (function(value) {
    text += value + "<br>";
})
document.getElementById("demo").innerHTML = text;



//Create a Set 
const letters = new Set(["a", "b", "c"]);

//Display set.size
document.getElementById("demo").innerHTML = letters.values();


//Create a Set 
const letters = new Set(["a", "b", "c"]);

//List all Elements
let text = "";
for (const x of letters.values()) {
    text += x + "<br>";
}
document.getElementById("demo").innerHTML = text;



//Create a Map
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);
document.getElementById("demo").innerHTML = fruits.get("apples");



//Create a Map
const fruits = new Map();

//Set Map Values
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);

document.getElementById("demo").innerHTML = fruits.get("apples");



//Create a Map
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);

fruits.set("apples", 200);

document.getElementById("demo").innerHTML = fruits.get("apples");



//Create a Map 
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);

//Delete an Element
fruits.delete("apples");

document.getElementById("demo").innerHTML = fruits.size;



//Create a Map
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);

document.getElementById("demo").innerHTML = fruits.has("apples");


//Create a Map
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);

let text = "";
fruits.forEach (function(value, key) {
    text += key + ' = ' + value + "<br>"
})

document.getElementById("demo").innerHTML = text;
*/


//Create a Map
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);

let text = "";
for (const x of fruits.entries()) {
    text += x + "<br>";
}
document.getElementById("demo").innerHTML = text;
