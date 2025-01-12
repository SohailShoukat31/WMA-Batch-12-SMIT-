// Array
// a structure that holds a list of variables | multiples values
// The syntax of arrays let arrays = [a , b , c];

let arrays = [1, 2, 3, 4, 5];
console.log(arrays);
arrays.push(6);
arrays.pop();
arrays.unshift(0);
arrays.shift();

const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
console.log(shopping.length);
console.log(shopping[1]);
// returns milk;
shopping[3] = "tahini";
console.log(shopping);

const birds = ["Parrot", "Falcon", "Owl"];
console.log(birds.indexOf("Owl")); // 2
console.log(birds.indexOf("Rabbit")); // -1

const cities = ["Karachi", "Landon", "Tokyo"];
cities.push("New Delhi");
console.log(cities);

// To add an item to the start of the array, use unshift():

const cities2 = ["Karachi", "Landon", "Tokyo"];
cities2.unshift("New Delhi");
console.log(cities2);

// //  // To remove the last item from the array, use pop().

cities.pop();
console.log(cities);
cities.pop();
console.log(cities);

const number = [10, 20, 30, 40];
number.map();
console.log(number);

const sequence = [1, 1, 2, 3, 5, 8, 13];
const random = ["tree", 775, [0, 1, 2]];
console.log(random);
