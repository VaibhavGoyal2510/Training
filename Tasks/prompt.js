
let number = parseFloat(prompt("Enter a number:"));


if (number > 0) {
    console.log("The number is positive");
} else if (number < 0) {
    console.log("The number is negative");
} else if (number === 0) {
    console.log("The number is zero");
} else {
    console.log("Invalid input for the number");
}


let age = parseInt(prompt("Enter your age:"));


if (age > 18) {
    console.log("You are eligible to vote");
    let otp = Math.floor(1000+ Math.random()*9000) ;
    let prompt_thr = prompt("Your Otp is",otp);
} else if (age < 18 && age > 0) {
    console.log("You are not eligible to vote");
} else if (age === 18) {
    console.log("You are eligible to vote");
   
} else {
    console.log("Invalid input for the age");
}
