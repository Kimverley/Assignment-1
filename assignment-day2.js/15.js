

const prompt = require('prompt-sync')();

let mins = parseInt(prompt("Enter how many minutes = "));
let hour = 60;
let convertToHours = mins /60 ;
let hr =parseInt(convertToHours);
console.log(hr);
 let ch = mins%60;
console.log(ch); 

console.log("Movie Duration is   " + hr +" hour(s)" + "and " + ch + " minutes"  );