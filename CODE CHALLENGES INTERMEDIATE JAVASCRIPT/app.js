/*
const sentence = ['sense.', 'make', 'all', 'will', 'This'];

const reverseArray = arr => {
  let newArr = [];
  for (let i = arr.length-1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  console.log(newArr);
};

reverseArray(sentence);
// Should return ['This', 'will', 'all', 'make', 'sense.'];



const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];

const greetAliens = arr => {
  for (let i = 0; i < arr.length; i++){
    console.log(`Oh powerful ${arr[i]}, we humans offer our unconditional surrender`);
  }
};

greetAliens(aliens);
// Should print:
// Oh powerful Blorgous, we humans offer our unconditional surrender! 
// Oh powerful Glamyx, we humans offer our unconditional surrender! 
// Oh powerful Wegord, we humans offer our unconditional surrender! 
// Oh powerful SpaceKing, we humans offer our unconditional surrender! 


const animals = ["panda", "turtle", "giraffe", "hippo", "sloth", "human"];

const convertToBaby = arr => {
  let newArr = [];
  
  for (let i = 0; i < arr.length; i++) {
    newArr.push(`baby ${arr[i]}`);
  }
  return newArr;
};

console.log(convertToBaby(animals));


const numbers = [5, 3, 9, 30];

const smallestPowerOfTwo = arr => {
  let results = [];
  for(let i = 0; i < arr.length; i++) {
    number = arr[i]
    let j = 1;
    while (j < number) {
      j *= 2;
    }
    results.push(j);
  }
  return results
}


console.log(smallestPowerOfTwo(numbers));



const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const politelyDecline = veg => {
  console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
}

const declineEverything = arr => {
  arr.forEach(politelyDecline);
}

const acceptEverything = arr => {
  for (let i = 0; i < arr.length; i++) {
    console.log(`Ok, I guess I will eat some ${arr[i]}`);
  }
}
declineEverything(veggies);
//acceptEverything(veggies);



const numbers = [2, 4, 6, 8, 10];
const toSquare = num => num * num;

const squareNums = arr => arr.map(toSquare);
console.log(squareNums(numbers));



const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];

const shoutGreetings = arr => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i].toUpperCase() + '!');
  }
  return newArr
};

console.log(shoutGreetings(greetings));



const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922];

const sortYears = arr => arr.sort((a, b) => b - a);

console.log(sortYears(years));



let arr1 = ['this', 'not this', 'nor this'];
let arr2 = ['thing 1', 'thing 2', 'this'];

const justCoolStuff = (arr1, arr2) => {
  
  
  
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        return arr1[i]
      }
    }
  }
  
};

console.log(justCoolStuff(arr1, arr2));



const justCoolStuff = (arr1, arr2) => arr1.filter(item => arr2.includes(item));

const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];
const myStuff = [ 'rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway']; 

console.log(justCoolStuff(myStuff, coolStuff));



const isTheDinnerVegan = arr => arr.every(food => food.source === 'plant')
const meal = [{name: 'arugula', source: 'plant'}, {name: 'tomatoes', source: 'plant'}, {name: 'lemon', source:'plant'}, {name: 'olive oil', source: 'plant'}];

console.log(isTheDinnerVegan(meal));



const speciesArray = [ {speciesName:'shark', numTeeth:50}, {speciesName:'dog', numTeeth:42}, {speciesName:'alligator', numTeeth:80}, {speciesName:'human', numTeeth:32}];

const sortSpeciesByTeeth = arr => arr.sort ((a, b) => a.numTeeth - b.numTeeth);

console.log(sortSpeciesByTeeth(speciesArray));



const randomStuff = ['credit card', 'screwdriver', 'receipt', 'gum', 'keys', 'used gum', 'plastic spoon'];

const findMyKeys = arr => arr.findIndex(item => item === 'keys');
console.log(findMyKeys(randomStuff));
*/


const dogFactory = (name, breed, weight) => {
  return {
    _name: name,
    _breed: breed,
    _weight: weight,
    
    get() {
      return this._name;
    },
    set(newName) {
      this._name = newName;
    },
    get() {
      return this._breed;
    },
    set(newBreed) {
      this._breed = newBreed;
    },
    get() {
      return this._weight;
    },
    set(newWeight) {
      this._weight = newWeight;
    },
    bark() {
      return 'ruff! ruff!'; 
    },
    eatTooManyTreats() {
      this._weight++
    }
  }
};



console.log(dogFactory('Joe', 'Pug', 27));