console.log("Hello World");

let arr = ["Apple", "Banana", "Carrot"];
console.log(arr);

arr[2] = "Plum";
console.log(arr);
arr[3] = "Orange";
console.log(arr);

let mixArray = [
  "Sohail",
  10,
  true,
  { name: "John" },
  function () {
    alert("Hello ");
  },
];
console.log(mixArray[3].name);
// console.log(mixArray[4]());

let cities = ["Karachi", "Lahore", "Islamabad"];
console.log(cities.length - 1);
// same as fruits[fruits.length-1]

console.log(cities.at(-1));

let sorting = ["Karachi", "Lahore", "Islamabad"];
sorting[2] = [sorting[2], (sorting[2] = sorting[1])][0];
console.log(sorting);

// Swipping of Array
// sykorones
// Askrones

let captains = ["Babar", "Smith", "Kohli"];
// captains.length = 0;
console.log(captains);
// Using for loops
for (var i = 0; i < captains.length; i++) {
  console.log(captains[i]);
}
for (var i = 1; i <= 10; i++) {
  console.log(i);
}
for (var i = 0; i <= 10; i++) {
  console.log(`Hello ${i}`);
}

// Palindrome words
// var table = prompt()

for (var i = 1; i <= 10; i++) {
  console.log(`2 X ${i}  = ${2 * i}`);
}

// Router in React
// 3 types of Router
//
