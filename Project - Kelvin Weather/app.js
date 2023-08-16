//created variable kelvin, value is 293
const kelvin = 293;

// converted Kelvin to Celsius by subtracting 
const celsius = kelvin - 273;

//calculated Fahrenheit and stored it to the variable
let fahrenheit = celsius * (9/5) + 32;

//rounded down the Fahrenheit temperature.
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

//converted celsius to the Newton scale
let newton = celsius * (33/100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton.`);