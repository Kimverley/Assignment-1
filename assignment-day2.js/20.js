const prompt = require('prompt-sync')();

let weight = prompt("Enter your weight in pounds = ");
let height= prompt("Enter your height in inches = ");

let bmi= parseFloat(weight) / (parseFloat(height) * parseFloat(height)) * 703;

 let category;
    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = "Normal healthy";
    } else if (bmi >= 25.0 && bmi <= 29.9) {
        category = "Overweight";
    } else {
        category = "Obese";
    }
    

console.log("Your BMI is " + bmi + " you are " + category);