/*for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++){
    console.log(`${i} x ${j} = ${i * j}`);
  }
  console.log('===========')
}

//While

let i = 0;

while(i <= 10) {
  console.log(i);
  i++
}

let i = 10;

while(i) {
  console.log(i);
  i--
}

//do while

let i = 0;

do {
  console.log(i);
  i++
} while (i < 10)

let i = 0;

do {
  console.log(i);
  i++
} while (i > 1)

//Break

for (let i = 0; i <= 5; i++) {
  if (i === 3) {
    break
  }
  console.log(i);
}

//Continue 

for (let i = 1; i <= 5; i++) {
  if (i == 2) {
    continue
  }
  console.log(i);
}

for (let i = 0; i <= 10; i++) {
  if (i % 2 === 0) {
    continue
  }
  console.log(i);
}

for (let i = 0; i <= 10; i++) {
  if (i % 2 !== 0) {
    continue
  }
  console.log(i);
}
//Number data type

console.log(10 + 10);
console.log(10 * 10);
console.log(10 - 10);
console.log(10 / 10);
console.log(10 % 5);
console.log(10 ** 2);
console.log(25 ** (1/2));
console.log(64 ** 0.5);

//Number Methods

let num = 10;
console.log(Number.isInteger(num));

let num = 10.34334; 
console.log(Number.isInteger(num));

let num = 10.4567;
console.log(Number.parseInt(num));

let num = 10.4567;
console.log(num.toFixed(2));

let a = 10;
P = 4 * a;
console.log(P);

let a = 5;
S = a ** 2;
console.log(S);
let a = 5;
let b = 8;
S = a * b;
console.log(S);
P = 2 * (a + b);
console.log(P);
let d = 4;
let p = 3.14;
L = p * d;
console.log(L);
let a = 6;
V = a ** 3;
console.log(V);
S = 6 * (a ** 2);
console.log(S);
let a = 2;
let b = 3;
let c = 4;
V = a * b * c;
console.log(V);
S = 2 * (a * b + b * c + a* c);
console.log(S);

let R = 150;
let P = 3.14;
L = 2 * P * R;
S = P * (R ** 2);
console.log(L, S);

let a = 4;
let b = 3;
let average = (a + b)/2;
console.log(average);
let a = 4;
let b = 3;
let geoAverage = (a * b)**(1/2);
console.log(geoAverage);
*/