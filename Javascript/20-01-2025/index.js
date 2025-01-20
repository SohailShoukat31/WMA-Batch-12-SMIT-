// Rest Operator
function calculateCardPrice(...num1) {
  return num1;
}
console.log(calculateCardPrice(2, 4, 6));

function myFunc(val1, val2, ...num) {
  return num;
}
console.log(myFunc(200, 400, 500, 600));

// Objects in function

const user = {
  username: "sohail",
  age: 19,
};

function handleObject(anyobject) {
  console.log(
    `Username is ${anyobject.username} and  user age is ${anyobject.age}`
  );
}
// handleObject((user));

handleObject({
  username: "sohail",
  age: 18,
});

const newArray = [1, 2, 3, 4, 5];
function secondReturnValue(getArray) {
  return getArray[0];
}

console.log(secondReturnValue(newArray));

// Global  and Local Scope

let a = 10;
const b = 20;
var c = 30;
// console.table(a , b , c)
console.log(a);
console.log(b);
console.log(c);

// var c = 300;
// let a = 20;
if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
}
console.log(a);
// console.log(b);
// console.log(c);

function myFunc(a, b, ...Args) {
  console.log("a", a);
  console.log("b", b);
  console.log("manyMoreArgs", Args);
}
myFunc("one", "two", "three", "four", "five", "six");

// // alert("Hello")
// alert("Hello world ");
// window.alert("Hello World ");
