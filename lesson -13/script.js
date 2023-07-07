
//Recursion function

/*let user = {
    name: 'John',
    age: 20,
    child: {
        name: 'Doe',
        age: 15,
        child: {
            age: 10
        }
    }
};

let sum = 0;

function getAge(obj) {
    sum += obj.age;
    if(obj.child) {
        getAge(obj.child)
    }
}

getAge(user);
console.log(sum);


//Closure

function parent() {
    let num = 10;
    
    function child() {
        console.log(num);
    }
    child();
}

parent();


//Higher Order Function

const arr = [1, 2, 3, 4, 5];
arr.forEach((number) => console.log(number +1));


//Getter and Setter

const person = {
    firstName: 'John',
    lastName: 'Doe',
    
    get fullName() {
        return `${person.firstName} ${person.lastName}`
    },
    
    set fullName(value) {
        const values = value.split(' ');
        this.firstName = values[0];
        this.lastName = values[1];
    }
}

person.fullName = 'Mike Johnson';
console.log(person.fullName); // prints: Mike Johnson


//Curry function

const addition = (a) => {
    return (b) => {
        return (c) => {
            return a + b + c
        }
    }
}

console.log(addition(2)(3)(4)); // prints: 9



function sendRequest(greet) {
    return function(name) {
        return function(message) {
            console.log(`${greet} ${name} ${message}`);
        }
    }
}

sendRequest('Hi')('John')('Call me');
*/