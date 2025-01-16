// console.log("First name : " + "Sohail");
// console.log( "Last name : "+"Shoukat");
// console.log("Age : " + 18);
function mySayName() {
  console.log("First name : " + "Sohail");
  console.log("Last name : " + "Shoukat");
  console.log("Age : " + 18);
}
mySayName();

function addTwoNubers(number1, number2) {
  console.log(number1 + number2);
}
addTwoNubers(3, 5);

//  const result = addTwoNubers(3,5);
//  console.log(result);
// Output Undefined

function myFunc(name, role) {
  let result = name + role;
  console.log(result);
}
let result = myFunc("Sohail", "Web developer ");
console.log(result);

function issLoginIn(username) {
  if (!undefined) {
    console.log("Please enter username");
  }
  return `${username}  Just login in`;
}
// console.log(issLoginIn("Sohail"));
console.log(issLoginIn());
