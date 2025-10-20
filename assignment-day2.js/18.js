const prompt = require('prompt-sync')();

let cel = prompt("Enter the temperature in Celcius = ");

let total= (parseInt(cel) * 9/5) + 32 ;
console.log(" The converted temperature is " + total + " Fahrenheit")