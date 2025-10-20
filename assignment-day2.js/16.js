const prompt = require('prompt-sync')();


let dogage = prompt("What is your dog age? = ");

let total= parseInt(dogage) * 7 ;
console.log("Your dog is " + total + " in human years!");