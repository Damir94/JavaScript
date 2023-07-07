
// new Date

/*let d = new Date();

console.log(d.getDate());
console.log(d.getDay());
console.log(d.getMonth());
console.log(d.getFullYear());
console.log(d.getHours());
console.log(d.getMinutes());
console.log(d.getSeconds());
console.log(d.getMilliseconds());



//Set 

const arr = [1, 1, 2, 3, 3, 4, 3, 2, 5, 6];
const set = new Set(arr); 

console.log(arr); //prints: [1, 1, 2, 3, 3, 4, 3, 2, 5, 6]
console.log(set); // prints: Set(6) { 1, 2, 3, 4, 5, 6 }



const set = new Set([1, 1, 3, 3, 'hey', 'hey']);
const uniqueArray = [...set];

console.log(uniqueArray); // prints: [ 1, 3, 'hey' ]



const set = new Set([1, 1, 2, 3, 3, 4, 'Hey', 'Hey']);
set.add(100);

console.log(set); // prints: Set(6) { 1, 2, 3, 4, 'Hey', 100 }


const set = new Set([1, 1, 2, 3, 3, 4, 'Hey', 'Hey']);
set.delete('Hey');

console.log(set); // prints: Set(4) { 1, 2, 3, 4 }


const set = new Set([1, 1, 2, 3, 3, 4, 'Hey', 'Hey']);
set.clear();

console.log(set); // prints: Set(0) {}


const set = new Set([1, 1, 2, 3, 3, 4, 'Hey', 'Hey']);
console.log(set.has('Hey')); // prints: true



const set = new Set([1, 1, 2, 3, 3, 4, 'Hey', 'Hey']);
console.log(set.size); // prints: 5


//Map

const map = new Map( [['name', 'John'], ['surname', 'Doe']]);

console.log(map); // prints: Map(2) { 'name' => 'John', 'surname' => 'Doe' }


const a = {};
const b = {};

const myMap = new Map([['a', 'a'], ['b', 'b']]);

console.log(myMap); // prints: Map(2) { 'a' => 'a', 'b' => 'b' }


const myMap = new Map();
myMap.set('1', 'str1');
myMap.set(1, 'num1');
myMap.set(true, 'boolean');

console.log(myMap); // prints: Map(3) { '1' => 'str1', 1 => 'num1', true => 'boolean' }
console.log(myMap.get('1')); // prints: str1
console.log(myMap.get(1)); // prints: num1



myMap = new Map([['1', 'str1'], [1, 'num1'], [true, 'boolean']])
console.log(myMap.has(1)); // prints: true


myMap = new Map([['1', 'str1'], [1, 'num1'], [true, 'boolean']]);
myMap.delete(1);
console.log(myMap); // prints: Map(2) { '1' => 'str1', true => 'boolean' }


myMap = new Map([['1', 'str1'], [1, 'num1'], [true, 'boolean']]);
myMap.clear();
console.log(myMap); // prints: Map(0) {}


myMap = new Map([['1', 'str1'], [1, 'num1'], [true, 'boolean']]);
console.log(myMap.size); // print: 3


// JSON

const user = [{
    "name": "Webbrain"
},
{
    "name": "Academy"
}
];

console.log(user[1].name); // prints: Academy


// Object to JSON

let test = {
    name: 'Webbrain',
    status: 'Academy'
};

let objtoJson = JSON.stringify(test);
console.log(objtoJson); // prints: {"name":"Webbrain","status":"Academy"}


//JSON to Object

let test = {"name": "Webbrain","status": "Academy"};

let objtoJson = JSON.stringify(test);
let jsonToObj = JSON.parse(objtoJson);

console.log(jsonToObj); // prints: { name: 'Webbrain', status: 'Academy' }



const findSum = (n) => {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum+= i
    }
    console.log(sum)
}

findSum(5);*/
