console.log("Hello World !");
let name = "Sohail";
let age = 20;
let welComeMes = `Hello  ${name} , You are ${age} years old`;
console.log(welComeMes);

let myName = "Sohail";
let intro = "My name is";
console.log(`${intro} ${myName}`);

function shoutToTheWorld() {
  console.log("Greetings, realm og JavaScript!");
}
shoutToTheWorld();

console.log("Hello , World !");

let yourName = prompt("What's your name?");
let yourAge = parseInt(prompt("What's your age?"));
let yourCountry = prompt("Where are you from ?");
console.log(`Hello ${yourName}, You are ${yourAge} years old and from ${yourCountry}`);

const firstName = "Alice";
const greeting = "Hello";
console.log(`${greeting} ${firstName}`);

let array = ["K", "S"];
let temp = array[0];
array[0] = array[1];
console.log(array);
array[1] = temp;
console.log(array);

// [array[0], array[1]] = [array[1], array[0]];
// console.log(array);

let SwapNum = [1, 2];
let temp1 = SwapNum[0];
SwapNum[0] = SwapNum[1];
console.log(SwapNum);
SwapNum[1] = temp1;
console.log(SwapNum);







