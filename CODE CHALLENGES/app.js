/*
function greetWorld () {
    return 'Hello, World!';
};

console.log(greetWorld());


const canIVote = (number) => {
    if (number >= 18) {
        return true;
    } else {
        return false;
    } 
};

console.log(canIVote(20));


const agreeOrDisagree = (param1, param2) => {
    if (param1 === param2) {
        return 'You agree!';
    } else {
        return 'You disagree!';
    }
};

console.log(agreeOrDisagree('yeah', 'yeah'));



const lifePhase = (age) => {
    if (age >= 0 && age <= 3) {
        return 'baby';
    } else if (age >= 4 && age <= 12) {
        return 'child';
    } else if (age >= 13 && age <= 19) {
        return 'teen';
    } else if (age >= 20 && age <= 64) {
        return 'adult';
    } else if (age >= 65 && age <= 140) {
        return'senior citizen';
    } else {
        return 'This not a valid age';
    }
};

console.log(lifePhase(29));



const finalGrade = (param1, param2, param3) => {
    let average = (param1 + param2 + param3 ) / 3;
    if (average >= 90 && average <= 100) {
        return 'A';
    } else if (average >= 80 && average <= 89) {
        return 'B';
    } else if (average >= 70 && average <= 79) {
        return 'C';
    } else if (average >= 60 && average <= 69) {
        return 'D';
    } else if (average >= 0 && average <= 59) {
        return 'F';
    } else {
        return 'You have entered an invalid grade';
    }
};

console.log(finalGrade(80, 96, 75));




const reportingForDuty = function(rank, lastName) {
    return `${rank} ${lastName} reporting for duty!`;
};

console.log(reportingForDuty('Private', 'Fido'));



const rollTheDice = () => {
    let die1 = Math.floor(Math.random() * 6 + 1);
    let die2 = Math.floor(Math.random() * 6 + 1);
    return die1 + die2;
}

console.log(rollTheDice());



const calculateWeight = (earthWeight, planet) => {
    if (planet === 'Mercury') {
        return earthWeight * 0.378;
    } else if (planet === 'Venus') {
        return earthWeight * 0.907;
    } else if (planet === 'Mars') {
        return earthWeight * 0.377;
    } else if (planet === 'Jupiter') {
        return earthWeight * 2.36;
    } else if (planet === 'Saturn') {
        return earthWeight * 0.916;
    } else {
        return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn';
    }
};

console.log(calculateWeight(2.97, 'Mercury'));



const truthyOrFalse = value => {
    if (value) {
        return true;
    } else {
        return false;
    }
};

console.log(truthyOrFalse(' '));



const numImaginaryFriends = totalNum => {
    let realNum = Math.ceil(totalNum * (1/4));
    return realNum;
};

console.log(numImaginaryFriends(13));



const sillySentence = (adj, verb, noun) => {
    return `I am so ${adj} because I ${verb} coding! Time to write some awesome ${noun}!`;
};

console.log(sillySentence('excited', 'love', 'functions'));




const howOld = (age, year) => {
    let dateToday = new Date();
    let thisYear = dateToday.getFullYear();
    
    
    const yearDifference = year - thisYear;
    const newAge = age + yearDifference;
    
    if (newAge > age) {
        return `You will be ${newAge} in the year ${year}`;
    } else if (newAge < 0) {
        return `The year ${year} was ${-newAge} years before you were born`;
    } else {
        return `You were ${newAge} in the year ${year}`;
    }
};

console.log(howOld(29, 2004));



const whatRelation = percentSharedDNA => {
    if (percentSharedDNA === 100) {
        return 'You are likely identical twins.';
    } else if (percentSharedDNA >= 35 && percentSharedDNA <= 99) {
        return 'You are likely parent and child or full siblings.';
    } else if (percentSharedDNA >= 14 && percentSharedDNA <= 34) {
        return 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.';
    } else if (percentSharedDNA >= 6 && percentSharedDNA <= 13) {
        return 'You are likely 1st cousins.';
    } else if (percentSharedDNA >= 3 && percentSharedDNA <= 5) {
        return 'You are likely 2nd cousins.';
    } else if (percentSharedDNA >= 1 && percentSharedDNA <= 2) {
        return 'You are likely 3rd cousins.';
    } else {
        return 'You are likely not related.';
    }
};

console.log(whatRelation(3));



const tipCalculator = (quality, total) => {
    switch (quality) {
        case 'excellent':
            return total * 30 / 100;
            break;
            case 'good':
                return total * 20 / 100;
                break;
        case 'ok':
            return total * 15 / 100;
            break;
            case 'bad':
                return total * 5 / 100;
                break;
                default:
                    return total * 18 / 100;
                }
            };
            
console.log(tipCalculator('not good', 100));


const toEmoticon = (emotion) => {
    switch (emotion) {
        case 'shrug':
            return '|_{"}_|';
            break;
        case 'smiley face':
            return ':)';
            break;
        case 'frowny face':
            return ':(';
            break;
        case 'winky face':
            return ';)';
            break;
        case 'heart':
            return '<3';
            break;
        default:
            return '|_(* ~ *)_|';
    }
};
                        
console.log(toEmoticon('shrug'));
                        */