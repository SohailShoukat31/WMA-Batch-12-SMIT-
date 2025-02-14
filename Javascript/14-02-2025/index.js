console.log("Hello Array");

let newArray = new Array();
console.log(newArray);

let array = [];
console.log(array);

let fruits = ["Apple", "Banana", "Plum"];
console.log(fruits);
console.log(fruits[0]); // Apple
console.log(fruits[1]); // Banana
console.log(fruits[2]); // Plum

// We can replace an element:

fruits[2] = "Orange";
console.log(fruits);
// Apple Banana Orange

// Or add a new one to the array:

fruits[3] = "Lemon";
console.log(fruits);

// The total count of the elements in the array is its length:

console.log(fruits.length);

// var cities = ["Karachi" , "Lahore" , "Islamabad"];
// alert(cities);

// Mix Value

let mixArray = ["String", 31, true, { name: "sohail" }];
console.log(mixArray);

// Methods
// Push

let teams = ["PAK", "IND", "SA", "NZ", "AUS"];
console.log(teams);
teams.push("BGD", "AFG");
console.log(teams);

// Pop

teams.pop();
teams.pop();
console.log(teams);

let students = ["John", "Nora", "Joseph"];
console.log(students);
students.unshift("Sohail");
console.log(students);

// Shift
students.shift();
console.log(students);
// Deep copy and Shallow Copy
