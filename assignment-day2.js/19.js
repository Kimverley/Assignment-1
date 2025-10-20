const prompt = require('prompt-sync')();

let cel = prompt("Enter the temperature in Fahrenheit = ");

let total= (parseInt(cel) - 32) * 5/9 ;
console.log(" The converted temperature is " + total + " celcius")