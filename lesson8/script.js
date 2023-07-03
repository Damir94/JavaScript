
// This keyword
/*
let obj = {
    name: 'Webbrain',
    age: 5,
    info: function() {
        console.log('Hey');
    }
};

obj.info() // prints: Hey


let obj = {
    name: 'Webbrain',
    age: 5, 
    info: function(input) {
        console.log('Hey', input);
    }
};

obj.info('Example'); // prints: Hey Example



let obj = {
    name: 'Webbrain',
    age: 5,
    status: 'Academy',
    info: function() {
        console.log(`${this.name} ${this.status} is ${this.age} years old`);
        console.log(this); // prints: { name: 'Webbrain', age: 5, status: 'Academy', info: [Function: info] }
    }
};

obj.info();


//Arrow function with this keyword

let obj = {
    name: 'Webbrain', 
    age: 5,
    status: 'Academy',
    info: () => {
        console.log(this);
    }
};

obj.info(); //prints: {}



let obj = {
    name: 'Webbrain',
    age: 5,
    status: 'Academy',
    info: () => {
        console.log(obj.name);
    }
};

obj.info(); // prints: Webbrain



// Array

let arr = [
    {name: 'Ford', engine: 2.5},
    {name: 'Toyota', engine: 2.4},
    {name: 'Honda', engine: 2.3},
    {name: 'Nissan', engine: 2.2}
];



let arr = [100, 'Hello', null, undefined, true, function(){}, {name: 'example'}];

console.log(arr[3]); // prints: undefined
console.log(arr.length -1); // prints: 6
console.log(arr[arr.length -1]); // prints: {name: 'example'}
console.log(arr.at(-1)); // prints: {name: 'example'}



let arr = [];
let arr2 = new Array();

console.log(arr, arr2); // prints: [] []



let arr = [3];
let arr2 = new Array(3);

console.log(arr.length); //prints: 1
console.log(arr2.length); // prints: 3



let arr = [];
arr[0] = 'apple';
arr[10] = 'peach';
console.log(arr); // prints: [ 'apple', <9 empty items>, 'peach' ]



let arr = [true];
arr[0] = false;

console.log(arr); // prints: [false]



let arr = [];
console.log(Array.isArray(arr)); // prints: true



// Array methods 


let arr = ['Hello', true, 'a', 'c'];
console.log(arr.join(' ')); // prints: Hello true a c



let arr1 = ['Hello', true, 'a', 'c'];
let arr2 = ['World'];

console.log(arr1.concat(arr2)); // prints: [ 'Hello', true, 'a', 'c', 'World' ]



let arr = ['John', 'Peter', 'Kane'];

console.log(arr.slice(0, 2)); // prints: [ 'John', 'Peter' ]
console.log(arr.splice(0, 2)); // prints: [ 'John', 'Peter' ]
console.log(arr); // prints: ['Kane']



let str = 'Webbrain';
console.log(str.split(' ')); // prints: [ 'Webbrain' ]



let arr = ['John', 'Peter', 'Kane'];
console.log(arr.reverse()); // prints: [ 'Kane', 'Peter', 'John' ]



let str = 'Webbrain';
console.log(str.split('').reverse().join('')); // prints: niarbbeW



let num = 123456789;
console.log( +num.toString().split('').reverse().join('')); // prints: 987654321



let arr = ['John', 'Peter', 'Kane'];
console.log(arr.includes('John')); // prints: true



let arr = [
    {id: 1, name: 'John'},
    {id: 2, name: 'Oscar'},
    {id: 3, name: 'Adam'},
    {id: 4, name: 'Elton'}
];


let Filtered = [];


function onSearch(text) {
    for (let i of arr) {
        if (i.name.includes(text)) {
            Filtered.push(i)
        } 
    }
}

onSearch('o')
console.log(Filtered);




let str = 'ABBACC';
let arr = str.split('');
let result = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i+1]) {
        result = arr[i];
    }
}

console.log(result);
*/




 


















