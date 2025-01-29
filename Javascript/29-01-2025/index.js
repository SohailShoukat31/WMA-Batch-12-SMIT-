let marks = [80, 75, 80];
console.log(marks);
console.log(marks.length); // Property ; Return the value

let cities = ["karachi", "lahore", "Tokyo", "Berlin"];
console.log(cities.length);
console.log(typeof cities); // Return the object

// Array Indices
// plural form

// String Immutable
// Array Mutable

let fruits = ["Apple", "Banana", "Carrot"];
console.log(fruits);

fruits[2] = "Grapes";
console.log(fruits);

// Looping Over Array :

let num = [1, 2, 3, 4, 5];
for (let i = 0; i < num.length; i++) {
  console.log(num[i]);
}

let names = ["sohail", "tufail", "noman", "ayan"];
console.log(names);
console.log(names.length);
console.log(typeof names);
names[2] = "israr";
console.log(names);
// for of
let heros = ["Elon Musk", "Newton", "JJ Thomsan"];
for (let hero of heros) {
  console.log(hero);
}

// Practice Question
let myMarks = [72, 84, 87, 70, 90];
let sum = 0;
for (val of myMarks) {
  console.log(val);
  sum += val;
}
let ave = sum / myMarks.length;
console.log(ave);
console.log(sum);
