
let raceNumber = Math.floor(Math.random() * 1000);
let registredEarly = false;
let age = 18;

if (age > 18 && registredEarly) {
    raceNumber += 1000;
}

if (age > 18 && registredEarly) {
    console.log(`You will race at 9:30 am and your number is ${raceNumber}`);
} else if (age > 18 && !registredEarly) {
    console.log(`You will race at 11:00 am and your number is ${raceNumber}`);
} else if (age < 18) {
    console.log(`You will race at 12:30pm and your number is ${raceNumber}`);
}else {
    console.log('You need to see the registration desk');
}
