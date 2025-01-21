function myFunc() {
  console.log("Hello");
}
myFunc();

function passedNum(num1, num2) {
  let result = num1 + num2;
  return result;
}

let value = passedNum(3, 4);
console.log(value);

let user = {
  username: "sohail",
  email: "example@gmail.com",
  age: 19,
};

function handleValue(anyobject) {
  console.log(
    `Username is ${anyobject.username} and user email is ${anyobject.email} and user age is ${anyobject.age}`
  );
}
handleValue(user);

let fruits = ["Apple", "Banana", "Grapes"];

function arrayFunc(getNewArray) {
  console.log(arrayFunc);
  return getNewArray[1];
}

console.log(arrayFunc(fruits));

let rightNow = new Date();
console.log(rightNow);

let getDay = new Date();
let day = getDay.getDay();
console.log(day);

let dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let now = new Date();
let nameOfToday = now.getDay();
console.log(nameOfToday);

// Data Types in Javascript :

let value1 = "";
console.log(typeof value1);
