// console.log("First name : " + "Sohail");
// console.log( "Last name : "+"Shoukat");
// console.log("Age : " + 18);
function mySayName() {
  console.log("First name : " + "Sohail");
  console.log("Last name : " + "Shoukat");
  console.log("Age : " + 18);
}
mySayName();

function addTwoNubers(number1, number2) {
  console.log(number1 + number2);
}
addTwoNubers(3, 5);

//  const result = addTwoNubers(3,5);
//  console.log(result);
// Output Undefined

function myFunc(name, role) {
  let result = name + role;
  console.log(result);
}
let result = myFunc("Sohail", "Web developer ");
console.log(result);

function issLoginIn(username) {
  if (!undefined) {
    console.log("Please enter username");
  }
  return `${username}  Just login in`;
}
// console.log(issLoginIn("Sohail"));
console.log(issLoginIn());

// example
function calculatorCartPrice(value1, valu2, ...number1) {
  return number1;
}
console.log(calculatorCartPrice(200, 300, 300, 400));

// example for practice

function practiceFunc(val1, ...val2) {
  return val2;
}
console.log(practiceFunc(1, 2, 3));
// Object 1
const user = {
  username: "Sohail",
  age: 19,
};

function handleObject(anyobject) {
  console.log(
    `Username is ${anyobject.username} and user age is ${anyobject.age}`
  );
}
handleObject(user);
// Object 2
const car = {
  color: "red",
  model: 2023,
};
function myCar(mycar) {
  console.log(
    `The color of car is ${mycar.color} , and The model of car is ${mycar.model}`
  );
}
myCar(car);

// How pass array in function
const myNewArray = [100, 200, 300];

function returnSecondValue(getArray) {
  return getArray[1];
}
console.log(returnSecondValue(myNewArray));
