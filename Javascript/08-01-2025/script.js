alert("Hello Welcome ");
var message = "Thanks 👋";
alert(message);

var userName = prompt("Kindly enter your name ");
alert("Thanks , " + " " + userName + "!");

// You can concatenate any combination of strings and variables, or all strings or all
//variables.
// For example, I can rewrite the last example this way.

var userName = prompt("Enter your name ");
var message = "Thanks";
var banger = "!";
alert(message + banger + userName);

var message = "Thanks";
var userName = "Sohail";
var bungar = "!";
var customMess = message + " " + userName + bungar;
alert(customMess);

// If you put numbers in quotes,
// JavaScript concatenates them as strings rather than adding them. This code...

alert("2" + "2");

var a = "2";
var b = "2";
alert(a + b);

var c = "2";
var d = 2;
alert(c + d);

// Prompts
var spec = prompt("Your species ? ", "human");

var question = " Gender";
var defaultAnswer = "male";
var gender = prompt(gender, defaultAnswer);
console.log(gender);
