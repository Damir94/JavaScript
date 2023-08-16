
const getSleepHours = day => {
    if (day === 'monday') {
        return 8;
    } else if (day === 'tuesday') {
        return 7;
    } else if (day === 'wednesday') {
        return 5;
    } else if (day === 'thursday') {
        return 9;
    } else if (day === 'friday') {
        return 9;
    } else if (day === 'saturday') {
        return 10;
    } else if (day === 'sunday') {
        return 1;
    }
};

const getActualSleepHours = () =>  8 + 7 + 5 + 9 + 9 + 10 + 1;


const getIdealSleepHours = idealHours => idealHours * 7;


const calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours(8);
    
    if (actualSleepHours === idealSleepHours) {
        console.log('You got the perfect of amount of sleep.');
    } else if (actualSleepHours > idealSleepHours) {
        console.log('You got ' + (actualSleepHours - idealSleepHours) + ' hour(s) more sleep than needed.');
    } else if (actualSleepHours < idealSleepHours) {
        console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.');
    }
};

calculateSleepDebt();