console.log("Ts Arrays");
// TypeScript has a specific syntax for typing arrays.

// Ts Arrays ;

// We could write an arrays like this in JavaScript :
let students = ["Sohail", 25, false];
console.log(students);

// Better way to write in typescript :
let strArrays: string[] = ["Waqas", "Mashood", "Sohail"];
console.log(strArrays);

let nbrArrays: number[] = [1, 2, 3];
console.log(nbrArrays);
nbrArrays.toString();
console.log(typeof nbrArrays); // Objects

// for loop
for (let i: number = 0; i < nbrArrays.length; i++) {
  console.log(nbrArrays[i]);
}

const names: string[] = [];
names.push("Zain");
names.push("1");
console.log(names);
// for in => in return the index.
// for of  => of return the value.

// Task of Class  21-01-2025
// Revise all the methods of arrays;
