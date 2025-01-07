// familiar operators

// Arithmetic operators

var popularNumber = 4;
var popularNumber = 2 + 2;
console.log(popularNumber);
// alert(2 + 2);
var popularNumber2 = 24 - 12;
console.log(popularNumber2);
var popularNumber3 = 3 * 12;
console.log(popularNumber3);
var popularNumber4 = 20 / 4;
console.log(popularNumber4);

var num = 10;
var total = num + 50;
console.log(total);

var num1 = 10;
var num2 = 10;
console.log(num1 + num1);

var num1 = 20;
var num2 = 20;
var totalResult = num1 + num2;
console.log(totalResult);

var whatsLeftOver = 10 % 3;
console.log(whatsLeftOver); // output : 1
// % is the modulus operator It gives you the remainder
var whatsLeftOver = 9 % 3;
console.log(whatsLeftOver);
// Remainder 0; so it is a module ;

// Unfamiliar operators

num++;
num--;
var num = 14;
var newNum = num++ + num++ + num++;
14 + 15 + 16;
console.log(newNum);

var num = 14;
var newNum = --num;

console.log(newNum);

var totalCost = 1 + 3 * 4;
console.log(totalCost);
// Output will be 13;
var totalResult = 1 + 3 * 4;
console.log(totalResult);

var totalResult = (1 + 3) * 4;
console.log(totalResult);

// Baisc Math
// Addition +
var sum = 5 + 5;
console.log(sum);

// Subtraction -
var difference = 10 - 5;
console.log(difference);

// Multiplication (*)

var product = 5 * 5;
console.log(product);

// Division (/)
var quotient = 12 / 4;
console.log(quotient);

var remainder = 10 % 3;
console.log(remainder);

// Increment aur Decrement
var num = 5;
num++;
// ++num;
// num--;
// --num;
console.log(num);
// Prefix aur Postfix Difference
// Prefix ++num
var prefixNum = 5;
// console.log(++prefixNum + ++prefixNum + ++prefixNum);
console.log(++prefixNum);
// Postfix num++
var postfixNum = 10;
// console.log(postfixNum++ + postfixNum++ + postfixNum++);
console.log(postfixNum);
// Examples
var num = 5;
var result = ++num;
console.log(num);
console.log(result);

var num = 7;
var result = num++;
console.log(num);
console.log(result);

var num = 5;
var result = --num;
console.log(num);
console.log(result);

var num = 5;
var result = num--;
console.log(num);
console.log(result);

var a = 10;
var b = ++a;
var c = a++;
console.log(a, b, c);
