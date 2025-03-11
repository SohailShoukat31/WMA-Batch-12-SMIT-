console.log("Hello World !");

//  replace 
// replace All 

// reverse  direct string pr nhn chale ga 
// yein array ka method haio 

let str = "Hello";
let copy = str.split("").reverse();
console.log(copy);

// let str = "Hello";
// let copy = str.split("").reverse().join("-")
// document.write(copy);



// Task 
// let userValue = prompt("User the Para");

// let copy = userValue.split("").reverse().join("-");
// document.write(copy);

// if ( copy === userValue){
//     console.log("This is paradim word")
// } else{
//     cons("This is not ")
// }


// this is very important 
// round floor ceil  random 

console.log(Math.random() * 11)


// head tail 

var heads  = prompt("Player 1");
var tails  = prompt("Player 2");
var toss = Math.floor(Math.random() * 2) // 0 se one tk chale ga 

if(toss === 0){
    Swal.fire({
        title: `${heads}`,
        text: "You won the toss!",
        icon: "success"
      });
} else { 
    Swal.fire({
        title: `${tails}`,
        text: "You lost the toss",
        icon: "Best of luck"
      });
}

// Index of 
// sweet alert   

// Task 
// factotorial 
// 5===> 5 * 4 * 3 * 2 * 1


// 2 

// var para = "this is a paragraph" ; 

var para =   "lorem ipssuun is a sohai"








 