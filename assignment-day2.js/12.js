const prompt = require('prompt-sync')();

let bill = prompt("Enter your bill = ");
let tip= prompt("Enter your tip = ");

let total= parseInt(bill) + (parseInt(bill) * parseInt(tip)/100);
console.log("The tip is " + total);