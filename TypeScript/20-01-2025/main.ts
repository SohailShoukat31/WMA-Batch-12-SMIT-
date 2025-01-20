console.log("Hello World ");

// TS Simple Types
const isStudent: boolean = true;
console.log(isStudent);

let myName: string = "sohail";
console.log(myName);

let number: number = 123;
console.log(number);

// number = ""

// Explicit
let firstName: string = "Sohail";
console.log(firstName);
// Implicit
let lastName = "Shoukat";
console.log(lastName);

// Error In Type Assignment

// let myAge:number = 19;
// myAge = "Nineteen"
// let u = true;
// u = "true";
// Math.round(u)

let v: any = true;
v = "Sohail";
console.log(v);

let str: any = "sohail";
str = true;

let w: unknown = 1;
console.log(w);
w = 2;
console.log(w);

// . Number
let age: number = 19;
console.log(age);
let price: number = 199.99;
console.log(price);

let temp: number = 66;
console.log(typeof temp);

let fName: string = "Sohail";
let greetings: string = `Hello ${fName}`;
console.log(greetings);

let isLoggedIn: boolean = true;
console.log(isLoggedIn);

// any

let randomValue: any;

randomValue = 10;
randomValue = "Sohail";
randomValue = true;
console.log(randomValue);
