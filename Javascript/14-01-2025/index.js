// slice method();

// slice( start , end );

const animals = ["ant", "bison", "camel", "duck", "elephant"];
// console.log(animals.slice(2));
console.log(animals.slice(2, 4));
console.log(animals.slice(1, 5));
console.log(animals.slice(-2));

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log(`citrus contains :  ${fruits.slice(1, 3)}`);
// output : Orange  Lemon

const favourite_fruits = ["Apple", "Banana", "Orange", "Mango", "Pineapple"];
const tropical = favourite_fruits.slice(2);
console.log(tropical);

const favourite_fruits2 = ["Apple", "Banana", "Orange", "Mango", "Pineapple"];
const lastTwo = favourite_fruits2.slice(-4);

let fullName = "Sohail Shoukat";
let firstName = fullName.slice(0, 6);
console.log(firstName);

let cardNumber = "1234567890123456";
let lastFourDigits = cardNumber.slice(-4);
console.log(lastFourDigits);

let cities = ["Karachi", "Tokyo", "Beiging", "Paris", "Cape Town"];
console.log(cities);
cities.push("New Delhi");
console.log(cities.slice(1, 4));

// replace()
// Syntax:

// string.replace(searchValue, newValue);

// searchValue: Jo portion replace karna hai.
// newValue: Jo value searchValue ki jagah aayegi
// Note: Sirf pehla occurrence hi replace hota hai

let text = "Hello World !";
let newText = text.replace("World", "Javascript");
console.log(newText);

let oneFruit = "Banana is tasty. Banana is yellow.";
let result = oneFruit.replace(/Banana/g, "Mango");
console.log(result); // Output: "Mango is tasty. Mango is yellow."

// Syntax:
// string.charAt(index);

let userName = "Javascript";
let char = userName.charAt(5);
console.log(char); // Output c

let str = "Hello World ";
console.log(str.charAt(1));
