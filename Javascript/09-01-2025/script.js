// if Statement

var x = prompt("Where does the You live");
if (x === "Pakistan") {
  alert("Correct");
}
if (x !== "Pakistan") {
  alert("Wrong Answer");
}

// // if else  statement
var userName = prompt("Enter your name ?");
if (userName === userName) {
  alert("OK Thanks");
} else {
  alert("Try Again");
}

let userCountry = prompt("Enter your country name ?");
if ((userCountry === "pakistan", "india", "china")) {
  alert("Country is found");
}
if ((userCountry !== "pakistan", "india", "china")) {
  alert("Not found country");
}

let userAccount = prompt("Enter Account Number");
if (userAccount == 12345) {
  alert("Account Login");
} else {
  alert("Doest not Match Account Number");
}

// if Statement;
// Agar condition sahi hai, to code chalayein;

let age = prompt("Check yourself for vote ?");

if (age >= 18) {
  alert("You are eligible for vote");
}
// If-Else Statement
// Agar condition sahi hai to ek kaam karo, warna doosra kaam karo;
let myAge = prompt("Check yourself for vote");
if (myAge == 18) {
  alert("You are not  eligible for vote");
} else {
  alert("You are not  eligible for vote");
}
// If-Else If-Else Statement

let marks = prompt("Enter your marks ?");

if (marks >= 90) {
  alert("You got A+ Grade");
} else if (marks >= 80) {
  alert("You got A Grade ");
} else if (marks >= 70) {
  alert("You got B Grade ");
} else {
  alert("Sorry Your are Failed ");
}

// Practic Task;

var temp = 30;
if (temp >= 30) {
  console.log("Weather is Cold");
} else {
  console.log("Weather is Hot");
}

let number = parseInt(prompt("Enter number to chech odd | Even"));
if (number % 2 === 0) {
  alert("It is an  Even Number");
} else {
  alert("It is an Odd Number");
}

// Nested

let username = "Sohail";
let password = "12345";

if (username === "Sohail") {
  if (password === "12345") {
    console.log("Login successful!");
  } else {
    console.log("Incorrect password.");
  }
} else {
  console.log("Username not found.");
}

// Comparison operators

// ===    Triple equation
// !==    Not Equal
// ==     Equal
// >      Greater than
// <      less than
// >=     is greater than or equal to
// <=     is less than or equal to
