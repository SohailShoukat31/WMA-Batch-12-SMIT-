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
