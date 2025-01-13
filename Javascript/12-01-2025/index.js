// for loops
var a = 1;
console.log(a);
console.log(a + 1);
console.log(a + 2);
console.log(a + 3);

// for is a keyword

// for (initialization; condition; increment/decrement) {
//     // code block to be executed
// }

// initialization
// let i = 0;

// conditions  // Jab tk condition true rahy gii tab tk loops chalta rahy gaa.
// i < 5;

// Increment/Decrement // Yeh loop ke har iteration ke baad variable ko update karta

for (let i = 0; i < 5; i++) {
  console.log(`Iternation  number ${i}`);
}

// Nested Loops

for (let i = 1; i <= 3; i++) {
  for (var j = 1; j <= 12; j++) {
    console.log(`i : ${i}  j : ${j}`);
  }
}

for (var i = 0; i <= 4; i++) {}

for (let i = 0; i <= 30; i++) {
  console.log(i);
}

for (var i = 5; i <= 10; i++) {
  console.log(i);
}

// Task for Practice

// Task 1

for (let number = 0; number <= 10; number++) {
  console.log(`number : ${number}`);
}

// Task 2
for (let i = 2; i <= 12; i += 2) {
  console.log(`Even Numbers ${i}`);
}

// Task 3

for (let i = 10; i >= 1; i--) {
  console.log(i);
}

// for in loop
let obj = {
  name: "Sohail Shoukat",
  role: "Programmer",
  company: "CodeWithSohail",
};
for (const key in obj) {
  {
    const element = obj[key];
    console.log(element);
  }
}

let numbers = [1, 3, 5, 7];
let found = false;

for (let i = 0; i <= numbers.length; i++) {
  if (numbers[1] === 5) {
    found = true;
    break; // loops se nikalne k liye
  }
}
console.log(found);

let fruits = ["apple", "banana", "mango"];
for (var i = 0; i <= fruits.length; i++) {
  console.log(fruits[i]);
}

for (let i = 0; i < 10; i++) {
  if (i === 7) {
    break;
  }
  console.log(i);
}

for (let step = 0; step <= 5; step++) {
  console.log(`Walking east one step`);
}

let sum = 0;
for (let i = 1; i <= 3; i++) {
  sum += i;
}
console.log(sum);
