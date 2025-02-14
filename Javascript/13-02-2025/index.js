console.log("Hello Js ");

let fName = "sohail";
console.log(fName);

alert("Hello Js ");
confirm("Do you save file");
prompt("Enter the first name ");

function showMessage() {
  alert("Hello World ");
  // body
}

showMessage();
showMessage();

function show() {
  let message = "Hello Iam Javascript";
  alert(message);
}
show();
// alert(message);  // error

// Outer Variable

let userName = "Sohail";
function myFunc() {
  let message = `Hello ${userName}`;
  alert(message);
}
myFunc();

let firstName = "John";

function showName() {
  firstName = "Sohail";
  alert(firstName);
}
showName();

// let arr = new Array();
// console.log(arr);

let arr2 = [];
console.log(arr2);

console.log(window.innerHeight);
console.log(window.outerWidth);

let userValue = prompt("Enter the name ");
console.log(userValue);

var result = "Welcome to my online Shop";

let age = prompt("How old are you ", 100);
console.log(`You are ${age} years old!`);

let userAge = prompt("Kindly enter your Age  ");

userAge = Number(userAge);
if (userAge >= 18) {
  alert("✅ You are eligible ");
} else {
  alert(" ❌ You are not  eligible ");
}

let isSure = confirm("Are you sure !");
console.log(isSure);

// Task
let name = prompt("Enter the name", "");
alert(name);

// Array
let arr = ["Karachi", "Lahore"];
arr[0] = [arr[1], (arr[1] = arr[0])][0];

console.log(arr);

let fruits = ["Apple", "Banana", "Grapes"];
console.log(fruits);

fruits[0] = [fruits[2], (fruits[2] = fruits[2])][0];
console.log(fruits);

let num = [3, 7, 12];
console.log(num);
