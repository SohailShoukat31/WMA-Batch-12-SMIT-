console.log("Hello Everyone 👋👨‍💻");
// JavaScript Comparison Operators: Easy Explanation
// = (Assignment Operator)
let x = 5;
// == (Equality Operator);
// note
// Compares values but ignores data types.
// If the values are the same, even if types are different, it returns true.
let nbr = 5;
console.log(typeof nbr);
// typeof number
let str = "5";
// let str  = "9";
console.log(typeof str);
// typeof  string
console.log(nbr == str);

console.log(1 == 1);
console.log("1" == 1);
console.log("hello" == "hello");
console.log(0 == false);
console.log(1 == true);
console.log(null == undefined);
// console.log(null == 0)
// === (Strict Equality Operator);
// Compares both values and types.
let number = 5;
let string = "5";
console.log(number === string); // output false Beacuse it check datatypes
console.log(1 === 1);
console.log("1" === 1); // output false
console.log(0 === false); // output false
// != (Not Equal Operator)
console.log(5 != 6);
console.log(1 != 2);
console.log("hello" != "hell");
console.log("1" != 1);
console.log(0 != false);
console.log();
// console.log("5" != 10)
// !== (Strict Not Equal Operator)
console.log(1 !== 1);
// Greater >
console.log(5 > 8);
console.log(3 > 3);
console.log("abc" > "ab");
