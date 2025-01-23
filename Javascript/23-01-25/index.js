console.log("Hello World !");

// IIFE

(function iifeFunc() {
  console.log("DB Connected");
})();

// ()

(function myName() {
  // Name iife
  console.log("Hello Sohail !");
})();

// Arrow Function
(() => {
  console.log("DB Connected Two");
})();

((name) => {
  console.log(`DB Connected Two ${name}`);
})("Sohail");

// // standard IIFE
(function () {
  // Statement
})();

(function () {
  console.log("Hello Function IIFE ");
})();

// // arrow function variant

(() => {
  console.log("Hello Function IIFE in Arrow ");
})();
(function add(a, b) {
  console.log(a + b);
})(3, 5);
