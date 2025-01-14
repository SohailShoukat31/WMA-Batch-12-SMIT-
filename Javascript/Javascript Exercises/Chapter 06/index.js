// Assignment  #06

// 01
var a = 10;
document.write(`Result : <br/> The value of a is : ${a} <br/> <br/>`);
// ++a;
document.write(
  `The value of ++a is : ${++a} <br/>Now the value of a is : ${a} <br/> <br/>`
);
// a++;
document.write(`The value of a a++ is : ${a++} <br/>`);
document.write(`The value of a a++ is : ${a} <br/> <br/>`);
document.write(`The value of a -aa is : ${--a} <br/>`);
document.write(`The value of a  is : ${a} <br/> <br/>`);
document.write(`The value of a--  is : ${a} <br/>`);
document.write(`The value of ${a--}  is : ${a}`);

// 02
var a = 2,
  b = 1;
// var result = --a - --b  + ++b + b;
var result = --a - --b + ++b + b;
console.log(result);
// output 3

// 03
var userInput = prompt("Enter your name :");
userInput.toLowerCase();
alert(` Hey 👋 Welcome to Javascript : ${userInput}`);

//output: Hey 👋 Welcome to Javascript : name

// // 04

// // 05

var tableNumber = parseInt(prompt("Enter the table Number :"));
document.write(`${tableNumber} X 1 = ${tableNumber * 1} <br/> `);
document.write(`${tableNumber} X 2 = ${tableNumber * 2} <br/> `);
document.write(`${tableNumber} X 3 = ${tableNumber * 3} <br/> `);
document.write(`${tableNumber} X 4 = ${tableNumber * 4} <br/> `);
document.write(`${tableNumber} X 5 = ${tableNumber * 5} <br/> `);
document.write(`${tableNumber} X 6 = ${tableNumber * 6} <br/> `);
document.write(`${tableNumber} X 7 = ${tableNumber * 7} <br/> `);
document.write(`${tableNumber} X 8 = ${tableNumber * 8} <br/> `);
document.write(`${tableNumber} X 9 = ${tableNumber * 9} <br/> `);
document.write(`${tableNumber} X 10 = ${tableNumber * 10} <br/> `);

// ______________________________________________________________________//
