// Math.round()
// static method returns the value of a number rounded to the nearest integer.
console.log(Math.round(0.9));
// output :  1
console.log(Math.round(5.95));
// output :  6
// syntax
// Math.round(x);  // X A number

//  Agar 0.5 se ziyada ho:
console.log(Math.round(2.5));
console.log(Math.round(2.6));
console.log(Math.round(1.9));
console.log(Math.round(-2.5));

// // Agar 0.5 se kam ho:

console.log(Math.round(1.4));
let numbers = [1.2, 2.6, 3.7, 4.1];
let roundedNumbers = numbers.map((num) => Math.round(num));
console.log(roundedNumbers);

// Task
// let userInput = parseInt(prompt("Enter the decimal number :"));
// alert("Your Decimal number is  : " + Math.round(userInput));

// Math.floor()

console.log(Math.floor(5.4));
console.log(Math.floor(-5.4));

// // Math.ceil()

console.log(Math.ceil(4.1));
console.log(Math.round(5.6));

// Notes
// Math.round()	Sabse qareebi integer par round karega	Math.round(4.5) → 5
// Math.floor()	Neeche wale integer par round karega	Math.floor(4.9) → 4
// Math.ceil()	Upar wale integer par round karega	Math.ceil(4.1) → 5

// Generating random numbers
console.log(Math.random());
let bigDecimal = Math.random();
let improvedNum = bigDecimal * 6 + 1;
// console.log(improvedNum);
var numberOfStars = Math.floor(improvedNum);
console.log(numberOfStars);

// Converting strings to integers and decimals

let currentAge = prompt("Enter your Age ");
console.log(currentAge);
let yearsEligibleToVote = currentAge - 18;
console.log(yearsEligibleToVote);

let profit = "200" - "100";
console.log(profit); // output : 100
// typeof Number;

let checkValue = "100" - "duck";
console.log(checkValue);

let result = "200" + 150;
console.log(result); // concatenates two strings

// Converting strings to numbers, numbers to strings

// parseInt
// parseFloat

let intergerString = "24";
console.log(typeof intergerString);
let num = Number(intergerString);
console.log(num);
console.log(typeof num);

let floatingNumString = "24.9876";
console.log(typeof floatingNumString);
let num1 = Number(floatingNumString);
console.log(num1);
console.log(typeof num1);

let numberAsNumber = 12345;
console.log(typeof numberAsNumber);
let numberAsString = numberAsNumber.toString();
console.log(typeof numberAsNumber);

// Controlling the length of decimals
// toFixed()

let price = 10000;
let textRate = 6.5;
let total = price + price * textRate;
console.log(total.toFixed(2));
