// Data Types
// Primitive
// Simple and Immutable(Original Value does not change)
// Store in the memory directly;
// 7 Types :
// String , Number  , Boolean , null , undefined , bigInt , symbol;

// String
let str = "Sohail";
console.log(str);
// Number
let nbr = 123;
console.log(nbr);
// Boolean
let isStudent = true;
console.log(isStudent);
// Null
let emptyValue = null;
console.log(emptyValue);
// Undefined
let undefinedValue;
console.log(undefinedValue);
// bigInt
let bigNumber = 3434567891n;
console.log(bigNumber);

// Symbol
let id = Symbol("123");
console.log(id);

let anotherId = Symbol("123");
console.log(id === anotherId);
// Output false

// Non-Primitive (Reference);
// Complex and Mutable (Original value can changed);
// Call by reference
// Array , Object , Function

// Array
let heroes = ["Allama Iqbal ", "Quaid-e-Azam", "Sir Syed Ahmed"];
console.log(heroes);

// Object {}
let myObj = {
  name: "Sohail",
  age: 21,
};
console.log(myObj);

// Function

const myFunc = function () {
  console.log("Hello World !");
};
console.log(myFunc);

// You can use type of for check data type;

// //  alert("Sohail Shoukat");

// ++++++++++++++++++++++++++++ Stack  and  Heap +++++++++++++++++++++++++++

// Stack (Primitiveb Data Types ) , Heap (Non-Primitive);

let myYoutubename = "Ai Shows";
let anotherName = myYoutubename;
anotherName = "Ai Shows with Sohail";
console.log(anotherName);
console.log(myYoutubename);

let userOne = {
  email: "user@gmail.com",
  upi: "user@ybl",
};
console.log(userOne);

let userTwo = userOne;
// console.log(userTwo)

userTwo.email = "sohailshoukat131@gmail.com";
console.log(userTwo.email);
console.log(userOne.email);
