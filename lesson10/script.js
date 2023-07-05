
// Array method

/*let arr = ['John', 'David', 'Mark'];
let finding = arr.find(value => value === 'John');
console.log(finding); // prints: John


let arr = ['John', 'David', 'Mark'];
let findIndex = arr.findIndex(value => value === 'David');
console.log(findIndex); // prints: 1



let arr = [12, 34, 54, 63, 72, 18, 20];
let check = arr.every(value => value > 50);
console.log(check); // prints: false



let arr = [12, 34, 54, 63, 72, 18, 20];
let check = arr.some(value => value > 13);
console.log(check); // prints: true



let arr = [12, 34, 54, 63];
let filling = arr.fill('100');
console.log(filling); // prints: [ '100', '100', '100', '100' ]



let str = '5555';
let arr = str.split('');
let sum = arr.reduce((initial, total) => initial + +total, 0);
console.log(sum); // prints: 20


let arr = [12, 34, 54, 63, 72, 18, 20];
let sum = arr.reduce((initial, total) => initial + total, 0);
console.log(sum); // prints: 273



let arr = [2, [3, [1, [2],[3]]],[9]];
let flatting = arr.flat(Infinity);
console.log(flatting); // prints: [ 2, 3, 1, 2, 3, 9 ]

let summing = flatting.reduce((initial, total) => initial + total, 0);
console.log(summing) // prints: 20


//Array spreading

let arr = ['John', 'Dave'];
let spreading = [...arr, 'Alex'];
console.log(spreading); // prints: [ 'John', 'Dave', 'Alex' ]


// Destructure with array


let users = ['Dave', 'John'];
const [first, second] = users;
console.log(second); // prints: John



let cars = [
    {id: 1, name: 'Ford', engine: 1.2, year: 2023},
    {id: 2, name: 'Mustang', engine: 2.2, year: 2020},
];

const names = cars.map(({id, year, name, engine}) => {
    console.log(engine); // prints: 1.2, 2.2
});



let arr = [4, 10, 888, 99, 100];

let minNum = Math.min(...arr)
let maxNum = Math.max(...arr);

console.log(-maxNum, -minNum);
*/