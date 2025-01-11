// String
// ''  ""

let hello = "Hello";
// let world = "World";
// let helloWorld = hello +" " + world;
// console.log(helloWorld);

console.log(`${hello} , My name is Sohail Ahmed  `);

let gameName = new String("sohail");
// console.log(gameName);
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf("l"));

let newString = gameName.substring(2, 5);
console.log(newString);

let newStringOne = "             Sohail";
console.log(newStringOne);
console.log(newStringOne.trim());
// Ignore the Space

let url = "https://www.google.com/";
console.log(url.includes("yooo"));

let buyNow = "A-Smarter-way-book";
console.log(buyNow.split("-"));

// mdn
// Length
const str = "Life, the universe and everything.";
console.log(`${str}  ${str.length}`);

// `` Backtick sign
// toUpperCase()
const sentence = "The quick brown fox jumps over the lazy dog";
console.log(`${sentence} ${sentence.toUpperCase()}`);

// trim()  // remove spaces

const greeting = "         Hello.     ";
console.log(`${greeting}  ${greeting.trim()}`);

// The includes() method of String values performs a case-sensitive
// search to determine whether a given string may be found within this string,
// returning true or false as appropriate.

const includeText = "Hello";
console.log(includeText.includes("H"));

// slice(start, end)

const str2 = "The quick brown fox jumps over the lazy dog";
console.log(str2.slice(4, 19));
console.log(str2.slice(-9, -5));

// replace(search, replacement)

const helloWorld = "Hello , World";
console.log(helloWorld.replace("World", "Everyone"));

// Output Hello Every one
