// function one (){
//     const username  = "Sohail";

//     function two(){
//         const website = "youtube"
//         console.log(username)
//     }
//     console.log(website)
//     two()
// }
// one();

// Arrow Function

const user = {
  username: "sohail",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username} , welcome to website`);
  },
};
user.welcomeMessage();
user.username = "Tehmoor";
user.welcomeMessage();

function myFunc() {
  console.log(this);
}

myFunc();

function helloSay() {
  let myname = "sohail";
  console.log(this.myname);
}
helloSay();

// Syntax of Arrow Function

const arrowFunc = (num1, num2) => {
  return num1 + num2;
};

console.log(arrowFunc(4, 6));

// Implicit

const arrowFunc2 = (num1, num2) => num1 + num2;
console.log(arrowFunc2(4, 10));

// Objects
const arrowObject = (num1, num2) => ({ username: "Sohail" });
console.log(arrowObject(4, 10));

const person = {
  firstname: "Sohail",
  lastname: "Shoukat",
  id: 12345,
  fullname: function () {
    return this.firstname + " " + this.lastname;
  },
};
console.log(person.fullname);

//  this Alone
console.log(this); // Object Global
let x = this;
console.log(this);
// this is not a variable. It is a keyword. You cannot change the value of this

// this in a Function
function myFunction() {
  return this;
}

console.log(myFunction());
