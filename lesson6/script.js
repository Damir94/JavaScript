
//Object

/*let student = {
    name: 'Mat',
    age: 29,
    status: 'Developer'
}; 

let car = {
    name: 'Ford',
    year: 2023,
    engine: 2.6
};

console.log(car);

let car1 = {
    name: 'Ford',
    year: 2023,
    engine: 2.5
};

let car2 = {
    name: 'Ford',
    year: 2023,
    engine: 2.5
};

console.log(car1 == car2);   // prints: false
console.log(car1 === car2); // prints: false

let car1 = new Object();
car1.name = 'Toyota';

console.log(car1);

let car = {
    name: 'Ford',
    year: 2023,
    engine: 2.5,
    'full name': 'Ford Mustang',
    111: 'one hundred eleven'
};

console.log(car.name); // prints: Ford
console.log(car['name']); // prints: Ford
console.log(car['full name']); // prints: Ford Mustang
console.log(car['111']); // prints: one hundred eleven

let car = {
    name: 'Toyota', 
    year: 2022,
    engine: 2.4
};

let key = 'name';

console.log(car.key); //prints: undefined
console.log(car['key']); // prints: undefined
console.log(car[key]); // prints: Toyota

// update object's value

let car = {
    name: 'Toyota',
    year: 2022,
    engine: 2.5
};

car.engine = 2; // value updated to 2
car.color = 'Black'; // property created
delete car.name; // name is deleted

console.log(car); 

//Object Methods 

let car = {
    name: 'Toyota',
    year: 2023,
    engine: 2.5
};

let arr = [ [ 'name', 'Toyota' ], [ 'year', 2023 ], [ 'engine', 2.5 ] ];

console.log(Object.keys(car)); // prints: Object keys into array
console.log(Object.values(car)); // prints Object values into array
console.log(Object.entries(car)); // prints each object's values into separate arrays
console.log(Object.fromEntries(arr)); // prints turns array into object


//Freeze Methods

let car = {
    name: 'Toyota',
    year: 2023,
    engine: 2.5
};

Object.freeze(car);
delete car.name; // doesnt delete
car.name = 'Ford'; // doesnt not update value
car.color = 'Black'; // doesnt create new property
console.log(car);

//Object Seal

let car = {
    name: 'Toyota',
    year: 2023,
    engine: 2.5
};
Object.seal(car);

delete car.name; // doesn't delete it
car.name = 'Ford'; // updated value
car.color = 'Black'; // doesn't create new property
console.log(car);



let user = {
    name: 'John',
    surname: 'Smith'
};

user.name = 'Pete';
delete user.name;

console.log(user);

let salaries = {
    John: 100,
    Ann: 160, 
    Pete: 130
};

let sum = 0;

for (let i in salaries) {
    sum += salaries[i];
}

console.log(sum);



function multiplyNumeric(menu) {
    for ( let key in menu) {
    if (typeof menu[key] === 'number') {
        menu[key] *= 2
    }
    return menu;
}
}


let menu = {
    width: 200,
    height: 300,
    title: 'My menu'
};

console.log(multiplyNumeric(menu));


let obj = {
    n: '1'
};

let getSize = (obj) => {
    let n = Object.keys(obj);
    if (n.length) {
        console.log('inNotEmpty');
    } else {
        console.log('isEmpty')
    }
};

getSize(obj);
*/
