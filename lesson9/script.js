// Array methods

/*
let arr = ['a', 'b'];
arr.push('c');

console.log(arr); //prints: [ 'a', 'b', 'c' ]


let arr = ['a', 'b'];
arr.pop();

console.log(arr); //prints: [ 'a' ]


let arr = ['a', 'b'];
arr.shift();

console.log(arr); // prints: [ 'b' ]


let arr = ['a', 'b'];
arr.unshift(1, 2, 3,);

console.log(arr); // prints: [ 1, 2, 3, 'a', 'b' ]



let num = [4, 1, 2, 9, 6, 5];
console.log(num.sort()); // prints: [ 1, 2, 4, 5, 6, 9 ]


let num = [4, 1, 2, 9, 6, 5, 10, 100];
console.log(num.sort((a, b) => a - b)); // prints: [ 1, 2, 4, 5, 6, 9, 10, 100 ]
console.log(num.sort((a, b) => b -a)); // prints: [100, 10, 9, 6, 5, 4, 2, 1]


let arr = ['a', 'c', 'b', 'd'];
console.log(arr.sort()); // prints: [ 'a', 'b', 'c', 'd' ]


let arr = ['a', 'b', 'c', 'd', 'A', 'B'];
console.log(arr.sort((a, b) => a.localeCompare(b))); // prints: [ 'a', 'A', 'b', 'B', 'c', 'd' ]


let arr1 = [1, 2, 3];
let arr2 = arr1;

console.log(arr1 == arr2); // prints: true
console.log(arr1 === arr2); // prints: true


let num = 12436587;
console.log(+num.toString().split('').sort().join('')); // prints: 12345678


// Array map, forEach, filter


let arr = ['John', 'Foden', 'Dane', 'Mike'];
arr.map((value, index, array) => {
    console.log(value); // prints: John, Foden, Dane, Mike
    console.log(index); // prints: 0, 1, 2, 3
    console.log(array);
})                      


let arr = ['John', 'Foden', 'Dane', 'Mike'];
arr.forEach((value, index, array) => {
    console.log(value); // prints: John, Foden, Dane, Mike
})



let arr = ['Mike'];
let mapping = arr.map((value) => {
    return 'Hello World'
});

console.log(mapping); // prints: [ 'Hello World' ]



let arr = ['Mike'];
let checking = arr.forEach((value) => {
    return 'Hello World'
});

console.log(checking); // prints: undefined


let arr = [57, 86, 43, 25, 13];
let filtered = arr.filter((value, index, array) => {
    console.log(value); // prints: 57, 86, 43, 25, 13
});


let arr = [57, 86, 43, 25, 13];
let filtered = arr.filter((value) => value < 50);

console.log(filtered); // prints: [ 43, 25, 13 ]


let arr = ['John', 'Mike'];
let filtered = arr.filter(value => value === 'John');
console.log(filtered); // prunts: [ 'John' ]

*/  


/*let cars = [
    {id: 1, year: 1998, engine: 1,   name: 'Ford'},
    {id: 2, year: 2005, engine: 1.2, name: 'Honda'},
    {id: 3, year: 2010, engine: 1.6, name: 'Toyota'},
    {id: 4, year: 2010, engine: 1.5, name: 'Nissan'},
    {id: 5, year: 2012, engine: 2,   name: 'Hyundai'},
    {id: 6, year: 2000, engine: 1.2, name: 'Kia'},
    {id: 7, year: 2018, engine: 2.4, name: 'GM'},
];

 let filtered = cars.filter((value) => value.year < 2000);
 console.log(filtered); // print: all the cars made before 2000*/


 /*let filtered = cars.filter((value) => value.year > 2010);
 console.log(filtered);*/ // prints: all the cars made after 2010
 
 
 /*let sorted = cars.sort((a, b) => a.engine - b.engine);
 console.log(sorted); */  // prints: sorted by engine power
 

 /*let sortingByYear = cars.sort((a, b) => a.year - b.year);
 console.log(sortingByYear);*/


/*let sortingByName = cars.sort((a, b) => a.name.localeCompare(b.name));
console.log(sortingByName);*/


/*cars.forEach(cars => {
    if(cars.year <  2000) {
        cars.status = 'It is an old car'
    }
});

console.log(cars);*/


/*cars.forEach(cars => {
    if (cars.year >= 2000 && cars.year <= 2010) {
        cars.status = 'Average';
    }
});

console.log(cars);*/

/*cars.forEach(cars => {
    if (cars.year > 2010 && cars.year < 2022) {
        cars.status = 'New';
    }
});

console.log(cars);*/



/*const onDelete = (ids) => {
    let filtering = cars.filter(value => value.id !== ids);
    console.log(filtering);
};

onDelete(3);*/