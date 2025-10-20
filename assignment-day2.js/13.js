const prompt = require('prompt-sync')();

let saves = prompt("Enter your monthyly savings = ");

let total= parseInt(saves) * 12 ;
console.log("The monthy total will be " + total);