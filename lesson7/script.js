
// for in loop

/*let car = {
    name: 'Ford',
    year: 2023,
    color: 'black'
};

for (let key in car) {
    //console.log(key); //prints: name, year, color
    console.log(car[key]); // prints: Ford, 2023, black
};



//Primitive copied by value

let stringInput = 'test';
let anotherString = stringInput;

anotherString = 'another test';

console.log(stringInput); // prints: test
console.log(anotherString); //prints:  another test



// Non-primitive copied by reference

const obj = {
    name: 'test'
};

const anotherObj = obj;
anotherObj.name = 'another test';

console.log(obj); //prints: { name: 'another test' }



const obj = {
    name: 'test'
};

const anotherObj = obj;

console.log(anotherObj, obj); //prints: { name: 'test' } { name: 'test' }

const obj = {
    name: 'test'
};



const anotherObj = obj;
anotherObj.name = 'another test';

obj.status = 'Developer';

console.log(anotherObj); // prints: { name: 'another test', status: 'Developer' }
console.log(anotherObj == obj); // prints: true
console.log(anotherObj === obj); // prints: true



// Clone

const obj = {
    name: 'test'
};

const anotherObj = Object.assign({}, obj);

console.log(anotherObj); // prints: { name: 'test' }
console.log(anotherObj === obj); //prints: false



const obj = {
    name: 'test'
};

const anotherObj = Object.assign({}, obj);
anotherObj.status = 'Developer';

console.log(anotherObj); // prints: { name: 'test', status: 'Developer' }
console.log(obj); // prints: { name: 'test' }



//Nested object

const obj = {
    name: 'test',
    properties: {
        location: 'location1'
    }
}

const anotherObj = Object.assign({}, obj);
console.log(anotherObj); // prints: { name: 'test', properties: { location: 'location1' } }



//Shallow clone with object.assign example:

const obj = {
    name: 'test',
    properties: {
        location: 'location1'
    }
};

const anotherObj = Object.assign({}, obj);
anotherObj.name = 'another test';
anotherObj.properties.location = 'location2';

console.log(obj); // prints: { name: 'test', properties: { location: 'location2' } }



//StructuredClone() with deep clone example: 

const obj = {
    name: 'test', 
    properties: {
        location: 'location1'
    }
};

const anotherObj = structuredClone(obj);
anotherObj.name = 'another test';
anotherObj.properties.location = 'location2';

console.log(obj); // prints: { name: 'test', properties: { location: 'location1' } }



// Spread operator... 

const obj = {
    name: 'John',
    age: 30
};

console.log({...obj}); // prints: { name: 'John', age: 30 }
console.log({...obj, name: 'Doe'}); // prints: { name: 'Doe', age: 30 }
console.log({...obj, name: 'Doe', hobby: 'football'}); // prints: { name: 'Doe', age: 30, hobby: 'football' }



const obj = {
    name: 'John',
    age: 30
};
const anotherObj = {...obj};
console.log(anotherObj); // prints: { name: 'John', age: 30 }



const obj = {
    name: 'John',
    age: 30
};

const anotherObj = {status: 'Engineer', ...obj};

console.log(anotherObj); // prints:{ status: 'Engineer', name: 'John', age: 30 }


//Destructure 

const employee = {
    id: 1,
    name: 'John Doe',
    occupation: 'Programmer'
};

const {id, name, occupation} = employee;

console.log(id, name, occupation); // prints: 1 John Doe Programmer



//Nested destructure 

const employees = {
    developers: {
        one: {
            id: 1,
            name: 'John Doe',
            occupation: 'Programmer',
            age: 25
        },
        two: {
            id: 2,
            name: 'Jane Doe',
            occupation: 'Designer',
            age: 23
        }
    }
};

const {
    developers: {
        two: {
            id, name, occupation, age
        }
    }
} = employees;

console.log(occupation); //prints: Designer



const user = {
    name: 'John',
    status: 'Developer'
};

const{name: nickname, status: occupation} = user;
console.log(nickname); // prints: John
console.log(occupation); // prints: Developer


let obj = {
    id: 1, 
    name: 'Webbrain'
};

for (let key in obj) {
    console.log(key);
}


let obj = {
    id: 1,
    name: 'Webbrain'
};

for (let key in obj) {
    if (typeof obj[key] === 'number') {
        console.log(key);
    }
}


let obj = {
    id: 1,
    name: 'Webbrain',
    offline: true,
    online: true,
    individual: false
};

for (let key in obj) {
    if (typeof obj[key] === 'boolean') {
        console.log(`${key}: obj[key]`);
    }
}



let person = {
    id: 1,
    name: 'Odil',
    age: 78,
    child: {
        id: 1,
        name: 'Umar',
        age: 20,
        child: {
            id:2,
            name: 'Ali',
            age: 48
        }
        
    }
};

function calculateAgeSum(obj) {

    let sumAge = 0;

    for (let key in obj) {
        if (key === 'age') {
            sumAge += obj[key];
        } else if (typeof obj[key] === 'object' && obj[key] !== null) {
            sumAge += calculateAgeSum(obj[key]);
        }
    }
    return sumAge
};

let sumAge = calculateAgeSum(person)
console.log(sumAge);



person = {
    id: 1, 
    name: 'John',
    surname: 'Doe',
    ielt: 5.5,
    student: true,
    password: 101
};

function registration(name, password, obj) {
    if (obj.name === name && obj.password === password) {
        console.log('Welcome to your account, John Doe');
    } else {
        console.log('The wrong password or name');
    }
}

registration('John', 102, person);
*/

