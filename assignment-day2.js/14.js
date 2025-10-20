const prompt = require('prompt-sync')();

let friend = prompt("Enter how much friends = ");
let slice = prompt("Enter slice for each friend = ");

let total= (parseInt(friend) * parseInt(slice)) ;
console.log("You need a total of " + total + " for " + friend + " friends." );