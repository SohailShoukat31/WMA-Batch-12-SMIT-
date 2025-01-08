let score = "33";
console.log(typeof score);
let convertScore = Number(score);
console.log(typeof convertScore);

let score1 = 33;
console.log(typeof score1);
let convertNum = String(score1);
console.log(typeof convertNum);

let emptyValue = null;
let numericConversion = Number(emptyValue);
console.log(numericConversion); // output : 0  type : number

// // let undefinedValue  = undefined;
// // let  undefinedConversion = Number(undefinedValue);
// // console.log(undefinedConversion);  // Output NaN

let undefinedValue = undefined;
let undefinedConversion = Number(undefinedValue);
console.log(undefinedConversion);

let testValue = undefined;
let findValue = Number(testValue);
console.log(typeof findValue);
let value;
value = 10;
console.log(value);
