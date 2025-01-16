function myFunction() {
  console.log("This is simple function 🤷‍♀️");
}
myFunction();

function myFunctionTwo() {
  console.log("This is second function");
}
myFunctionTwo();

// Parameters & Arguments
function greet(name, age) {
  console.log(`My name is:` + name + ` and My age is ${age}`);
}
greet("Sohail", 19);

// Task

// function hey(){
//     var userName =  prompt("Enter your sweet name ❤:");
//     alert( `How are you Mr : ${userName}`)
// }
// hey()

function addTwoNumbers(num1, num2) {
  return num1 + num2;
}
console.log(addTwoNumbers(5, 2));

function addNumbers(a, b) {
  return a + b;
}
console.log(addNumbers(5, 5)); // Output 15

// Store the function as Variable

const multiplyTwoNumber = function (number1, number2) {
  return number1 * number2;
};
console.log(multiplyTwoNumber(4, 5)); // Output : 20

// Default Parameters

function myGuest(name = "Guest") {
  console.log(`Hello ${name}`);
}

myGuest();
myGuest("Ali");

// How to pass objects in an Array :
const person = {
  name: "Sohail",
  age: 19,
  email: "example@gmail.com",
};
function printDetails(person) {
  console.log(
    `My name is ${person.name} and my age is ${person.age} and My email is ${person.email}`
  );
}
printDetails(person);

const arrays = ["Sohail", 19, true];

function printArrays(getArray) {
  return getArray[2];
}
// printArrays(arrays);
console.log(printArrays(arrays));
