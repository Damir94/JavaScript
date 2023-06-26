/*Implicit with Strings:

let result = '5' + 10; prints: 510,
let result = 10 + '5'; prints: 105,
let result = '5' + true; prints: 5true,
let result = '5' + underfined; prints: 5underfined

Implicit with Number:

let result = '4' - '2';
console.log(result); print: 2,
console.log(typeof result); prints: number

let result = 4 - '2';
console.log(result); prints: 2,
console.log(typeof result); prints: number,

let result = 4 * '2';
console.log(result); prints: 8,
console.log(typeof result); prints: number.


Implicit with Boolean 

let result = '4' - true;
console.log(result); prints: 3
console.log(typeof result); prints: number.

let result = 4 + null;
console.log(result); prints: 4
console.log(typeof result); prints: number,

Implicit with undefined

let result = 4 + undefined;
console.log(result); prints: NAN
console.log(typeof result); print: number

let result = true + undefined;
console.log(result); prints: NAN
console.log(typeof result); prints: number

Explicit to Number 

let result = Number('200');
console.log(result); prints: 200
console.log(typeof result); prints: number

let result = Number(true);
console.log(result); prints: 1

let result = Number(null);
console.log(result); print: 0

let result = Number('');
console.log(result); prints: 0

let result = Number(undefined);
console.log(result); prints NAN

let result = Number('Hello');
console.log(result); prints number

Explicit to String 

let result = String(204);
console.log(result); prints: 204

let result = String(2+3);
console.log(result); prints: 5
console.log(typeof result); prints string

let result = String(true);
console.log(result); prints: true
console.log(typeof result); prints: string

Explicit to Boolean 

let result = Boolean(0);
console.log(result); prints: false

let result = Boolean(1);
console.log(result); prints: true

let result = Boolean('Hello');
console.log(result); prints: true


Comparison

console.log(4===4); prints: true
console.log(4===6); prints: false
console.log(4==6); prints: false
console.log(100=='100'); prints: true
console.log(100==='100'); prints false
console.log(4 < 6); prints: true
console.log(4 > 6); prints: false
console.log(4 >= 4); prints: true
console.log(4 <= 4); prints: true

Logical operators

let car = "Ford";
car === 'Ford' && console.log('$35,000); prints: $35,000

let car = 'Ford';
let car2 = 'Toyota';
car === 'Ford' && car2 === 'Toyota' && console.log('$70,000');

console.log(4 == 5 || 5==5 || 6 == 3); prints: true

let car = 'Ford';
car == 'Ford' && console.log($10000);
car !== 'Ford' && console.log("There is no such a car!")

console.log(!false); prints true
console.log(!true); prints false
console.log(!0); prints true
console.log(!1); prints false

if else 

if (true) {
    console.log('Hey'); 
} prints Hey

if (false) {
    console.log('Hey');
} prints nothing

if (1) {
    console.log('Hey');
} prints Hey

if (4 === 4) {
    console.log('Hey');
} prints Hey

if (5 === 4) {
    console.log('Hey');
} prints nothing

Switch case

let day = 1;

switch (day) {
    case 1 : console.log('Monday'); break
    case 2 : console.log('Tuesday'); break
    default : console.log('There is no such a day');
}

Ternary

let color = 'red';

color === 'red' ? console.log('Right') : console.log('Wrong');

let num = 10;

num % 2 === 0 ? console.log('Even') : console.log('Odd');*/

/*var ball = 49;

if (ball <= 100 && ball >= 86) {
  console.log('A');
}else if (ball <= 85 && ball >= 61) {
    console.log('B');
}else if (ball <= 60 && ball >= 50) {
    console.log('C');
}else {
    console.log('Failed');
}*/

/*let meva = 'nol'

switch (meva) {
    case 'olma' : console.log(10000);break
    case 'nok' : console.log(12000);break
    case 'tarvuz' : console.log(20000);break
    default : console.log('Bunday meva yuq');
}*/

/*let num = 3;

if (num % 2 === 0) {
    console.log('Juft son');
} else {
  console.log('Toq son');
}*/

/*let meva = 'o';

meva === 'olma' && console.log(10000) || meva === 'nok' && console.log(20000) || meva === 'tarvuz' && console.log(20000) || meva !== 'olma' && console.log('Bunday meva yuq');*/

/*let num = 4;

num % 2 === 0 && console.log("Juft son") || num % 2 !== 0 && console.log('Toq son');*/

/*let ball = 48;

ball <= 100 && ball >= 86 && console.log("A");
ball <= 85 && ball >= 60 && console.log("B");
ball <= 59 && ball >= 50 && console.log("C");
ball <= 49 && console.log("Failed");*/