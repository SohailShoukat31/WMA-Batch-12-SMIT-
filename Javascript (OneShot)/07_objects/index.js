console.log("Object");
//syntax of Object

//Singleton

// objects
Object.create;

const mySym = Symbol("Key1");

const jsUser = {
  name: "Sohail",
  // "name" : "Sohail",
  "full name": "Sohail Shoukat",
  // [mySym] : "mykey1",
  age: 18,
  location: "Karachi",
  email: "example@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

// jsUser.email
// console.log(jsUser.email);
// console.log(jsUser[email]);
console.log(jsUser["email"]);
console.log(jsUser["full name"]);
console.log(jsUser[mySym]);

jsUser.email = "sohail@gmail";
console.log(jsUser["email"]);
jsUser.email = "sohail@microgmail.com";
console.log(jsUser["email"]);
Object.freeze(jsUser); // Lock

jsUser.greeting = function () {
  console.log("Hello Js User ");
};
console.log(jsUser.greeting());

jsUser.greetingTwo = function () {
  console.log(`Hello Js User ${this.name}`);
};
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());

// const myArray = ["s" , "o"];
// console.log(myArray[0]);

const myObj = new Object(); //Singleton Object
const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Bobby";
tinderUser.isLoggedIn = false;

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty(''));

console.log(myObj);

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "Sohail",
      lastname: "Shoukat",
    },
  },
};
console.log(regularUser.fullname.userfullname.firstname);

// Merge

const obj1 = {
  1: "a",
  2: "b",
};
const obj2 = {
  3: "c",
  4: "d",
};
// const obj3 = {obj1 , obj2};
// console.log(obj3);

// const obj3 = Object.assign( {} , obj1 , obj2);

const obj3 = { ...obj1, ...obj2 };
console.log(obj3);

const users = [
  {
    id: "1",
    email: "sohail@google.com",
  },
  {
    id: "2",
    email: "sohail@chatgpt.com",
  },
];
users[1].email;
