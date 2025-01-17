function square(number) {
  return number * number;
}
console.log(square(4, 5));

const myCar = {
  make: "Honda",
  model: "Accord",
  year: 1998,
};

function myFunc(theObject) {
  theObject.make = "Toyato";
}

console.log(myCar.make);

console.log("Hello function");

const arrays = [1, 2, 3];
arrays.push(4);
console.log(arrays);

const str = "abc";
// str.toUpperCase();
console.log(str.toUpperCase());

//
function myFunction() {
  console.log("WelCome to Sohail Vs Code");
  console.log("We are Learning to Js ");
}
myFunction();

function functionName(msg, num1) {
  // Parameter -> Input
  console.log(msg, num1);
}
functionName("I Love Js ", 1);

function sum(x, y) {
  console.log(x + y);
  // console.log(x * y);
}
sum(3, 4);
sum(4, 6);

function sumTwoNum(a, b) {
  s = a + b;
  return s;
}
let value = sumTwoNum(4, 4);
console.log(value);

function sumTwoNum(sum1, sum2) {
  var sumOf = sum1 + sum2;

  return sumOf;
}
let value1 = sumTwoNum(100, 100);
console.log(value1);

const arrowFunc = (a, b) => {
  return a + b;
};
//  arrowFunc( 20 , 20)
console.log(arrowFunc(20, 20));

// Practice Task

function countVowels(str) {
  // "Sohail " = count = 1
  let count = 0;
  for (const char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  console.log(count);
}
// countVowels("Sohail")

// let arr = [1 , 2, 3];
// arr.forEach((val , idx, arr) =>{
//   console.log(val.toUpperCase() , idx , arr)

// })

let nums = [2, 3, 4, 5, 6];
nums.forEach((num) => {
  console.log(num * num);
});
