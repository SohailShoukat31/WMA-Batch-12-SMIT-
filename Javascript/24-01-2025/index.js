let myName; // Undefined
let myAge; // Undefined
myName = "Sohail";
myAge = 37;
console.log(myName);
console.log(myAge);

let myDog = "Rover";
console.log(myDog);

const buttonA = document.querySelector("#button_A");
const headingA = document.querySelector("#heading_A");

let count = 1;

buttonA.onclick = () => {
  buttonA.textContent = "Try again!";
  headingA.textContent = `${count} clicks so far`;
  count += 1;
};

const product = {
  name: "Parker Jotter Standard CT Ball Pen (Black)",
  rating: 4,
  offer: 5,
  price: 280,
};
console.log(product);

const profile = {
  username: "Sohail",
  followers: 3500,
  following: 0,
  isFollow: true,
  posts: 20,
  bio: "Iam  a Developer ",
};
console.log(profile);
