const prompt = require('prompt-sync')();

let price = prompt("Enter your price = ");
let discount= prompt("Enter your discount = ");

let final= parseInt(price) - (parseInt(price) * parseInt(discount)/100);
console.log("The discount of this price is " + final);