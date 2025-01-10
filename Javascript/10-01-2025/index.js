console.log("Hello ");

var city = "Karachi";
var city2 = "Lahore";
var city3 = "Quetta";
var city4 = "Peshawar";
var city5 = "Islamabad";
console.table([city, city2, city3, city4, city5]);

// alert("Welcome to " + city2);

let cities = ["Karachi", "Lahore", "Quetta", "Peshawar", "Islamabad"];
console.log(cities);
// Find index
console.log(cities[0]); // Karachi
console.log(cities[1]); // Lahore
console.log(cities[2]); // Quetta
console.log(cities[3]); // Peshawar
console.log(cities[4]); // Islamabad;

// Different Types we can use an arrays
var mixArrays = [1, "Bob", true, null];
console.log(mixArrays);

let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits);
// Output: Apple , Banana , Mango

// Fruits Aik Array hai aur 3 elements hai
// Indexing 0 se start hoti hai

// Array Methods (Important Operations)
//  **JavaScript Array Methods (With Examples)**

// push()
// unshift()
// pop()
// shift
// sort()
// reverse()

// // push() Add Last  Element of an arrays
let numbers = [30, 40, 50];
console.log(numbers);
numbers.push(60, 70);
console.log(numbers);

let heros = ["Javed Mian Dad", "Wasim Akram", "Imran Khan"];
console.log(heros);
heros.push("Ramiz Raja", "Sarfaraz");
console.log(heros);

let fruitNames = ["Apple", "Mango"];
fruitNames.push("Banana");
console.log(fruitNames);

// // pop()  Remove last  Element of an array
var books = ["A smarter way to learn Js", "Html and Css"];
books.pop();
// books.pop();
console.log(books);

let removeElements = ["Apple", "Mango", "Banana"];
removeElements.pop();
console.log(removeElements);

// unshift() Add  element  in Starty of an array ;

let addElements = ["Apple", "Mango", "Banana"];
addElements.unshift("Grapes");
console.log(addElements);

// shift()
let removeElementsInFirst = ["Apple", "Mango", "Banana"];
removeElementsInFirst.shift();
console.log(removeElementsInFirst);

//  concat()   // Merge two arrays

let myFruits = ["Guava", "Pineapple"];
let myVegetables = ["Carrot", "Potato"];
let food = myFruits.concat(myVegetables);
console.log(food);

// slice()  // create a copy of an elements

let capitals = ["Tokyo", "Paris", "New Delhi", "Islamabad"];
let capitalsSliced = capitals.slice(3);
console.log(capitalsSliced);

// splice()  // Add or remove elements from an array

let fvtFruits = ["Apple", "Banana", "Lemon"];
fvtFruits.splice(1, 1);
console.log(fvtFruits);

// let  cities;

// KeyPoints to remember:
// Arrays is a container

let pets = [];
console.log(pets);
