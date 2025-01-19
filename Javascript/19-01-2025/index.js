console.log("Hello Function ");
const a = "abc";
console.log(a.toUpperCase());

function functionName() {
  console.log("Hello Function !");
  console.log("We are learning Js :");
}

// Function defination

// Now we invoked | call the function
functionName();

// Parameter and Argument
function myFunc(msg, num) {
  console.log(msg, msg, num);
}
myFunc("I Love Js", "I love Function", 100); // Argument

// function myNaN(msg , num){
//     console.log(msg * num)
// }
// console.log("Not a Number " , 100);

function sum(x, y) {
  console.log(x + y);
}
sum(2, 3);
sum(5, 5);

// Return Statement
function sum(a, b) {
  // Local variables
  let s = a + b;
  return s;
}
let val = sum(3, 3);
let val2 = sum(4, 4);
console.log(val);
//  console.log(x);
console.log(val2);

// Arrow Function
// Compact way of writing of function

//  const functionName = (param1 , param2)=>{

//  }

// Normal function
// function add(a , b){
//     return a + b

// Arrow function

// const add = ( a , b) => a + b;

const arrowSum = (a, b) => {
  console.log(a + b);
};

arrowSum(5, 5);

const mulArrow = (x, y) => {
  console.log(x * y);
};
console.log(3 * 3);

const helloWorld = () => {
  console.log("Hello World !");
};
helloWorld();

function xyz() {
  console.log("Hello ");
}

function printFun(xyz) {
  return xyz;
}

let arr = [1, 2, 3, 4, 5];
arr.forEach(function printValue(val) {
  console.log(val);
});

// As a arrow function

arr.forEach((val) => {
  console.log(val);
});

let arry = ["karachi", "sukkur", "jacobabad"];

arry.forEach(function Cities(citiesNames, idx) {
  console.log(citiesNames.toUpperCase(), idx);
});

let numbers = [1, 2, 3, 4, 5];
numbers.forEach((num) => {
  console.log(num * num);
});

let myArray = [1, 2, 3, 4, 5, 6, 7];

let evenArray = arr.filter((val) => {
  return val % 2 === 0;
});
console.log(evenArray);

function addTwoNums(num1, num2) {
  console.log(num1 + num2);
}
const result = addTwoNums(3, 5);
console.group(" Result " + result);
