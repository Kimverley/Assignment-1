const prompt = require('prompt-sync')();


let dist = prompt("Enter distance traveled = ");
let time = prompt("Time taken = ")
let total= parseInt(dist)/parseInt(time) ;
console.log("Your speed was " + total);