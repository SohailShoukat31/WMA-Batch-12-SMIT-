// Assignment  #05
// 01
var addNum1 = 20;
var addNum2 = 10;
var totalAddition = addNum1 + addNum2;
console.log("Sum of 20 and 10 is" + " " + totalAddition);

// 02
var minusNum1 = 20;
var minusNum2 = 10;
var totalSubtraction = minusNum1 - minusNum2;
console.log("Subtraction of 20 and 10 is" + " " + totalSubtraction);

var productNum1 = 20;
var productNum2 = 10;
var totalProduct = productNum1 * productNum2;
console.log("Product of 20 and 10 is " + " " + totalProduct);

var divideNum1 = 20;
var didvideNum2 = 10;
var totalDivivid = divideNum1 / didvideNum2;
console.log("Divide of 20 and 10 is " + totalDivivid);

// 03
var abc = "Value after variable declaration is: undefined  <br/> ";
document.write(abc);
var variableNum = 5;
document.write("Initial value: 5 <br>");
++variableNum;
document.write("Value after increment is:" + variableNum + "<br>");
variableNum = 6 + 7;
// console.log(variableNum)
document.write("Value after addition is:" + variableNum + "<br>");
--variableNum;
document.write("Value after decrement is:" + variableNum + "<br>");
variableNum = 12 / 3;
document.write("The remainder is :" + variableNum + "<br>");
// Note

// 04

var ticketMoviePrice = 600;
var ticketBuy = 5;
var totalCost = 600 * 5;
document.write(
  "Total cost to buy" +
    " " +
    ticketBuy +
    " " +
    "tickets to a movie is " +
    " " +
    totalCost +
    "PKR <br>"
);

document.write("Table of 4 <br>");

var table = 4;
document.write(table + " X 1 = " + table * 1 + "<br>");
document.write(table + " X 1 =  " + table * 2 + "<br>");
document.write(table + " X 1 = " + table * 3 + "<br>");
document.write(table + " X 1 =  " + table * 4 + "<br>");
document.write(table + " X 1 = " + table * 5 + "<br>");
document.write(table + " X 1 =  " + table * 6 + "<br>");
document.write(table + " X 1 = " + table * 7 + "<br>");
document.write(table + " X 1 =  " + table * 8 + "<br>");
document.write(table + " X 1 = " + table * 9 + "<br>");
document.write(table + " X 1 =  " + table * 10 + "<br>");

// 05;
var priceOfItem1 = 650;
document.write("Price of Item 1 is " + priceOfItem1 + "<br>");
var quantityOfItem1 = 3;
document.write("Quantity of Item 1 is " + quantityOfItem1 + "<br>");
var priceOfItem2 = 100;
document.write("Price of Item 2 is " + priceOfItem2 + "<br>");
var quantityOfItem2 = 7;
document.write("Quantity of Item 2  is " + quantityOfItem1 + "<br>");
var totalCost1 = 650 * 3;
var totalCost2 = 100 * 7;
var shippingCharges = 100;
document.write(" Shipping Charges " + shippingCharges + "<br>");
var totalCostOfOrder = totalCost1 + totalCost2 + shippingCharges;
document.write("Total Cost of Your order is " + totalCostOfOrder + "<br>");

document.write("  Marks Sheet  <br>");

var totalMarks = 550;
var obtainedMarks = 416;
document.write("Total Marks" + " " + totalMarks + "<br>");
document.write("obtainedMarks" + " " + obtainedMarks + "<br");
document.write("Percentage: " + (totalMarks * 100) / obtainedMarks);
console.log("Percentage " + (totalMarks * 100) / obtainedMarks);

// 06
var totalPkr = 10 * 104.8 + 1 * 28;
console.log("Total currency of PKR:" + totalPkr);

// 07

var someNumber = 10 + (5 * 10) / 2;
console.log(someNumber);

// 08
// The Age Calculator:

var currentYear = 2025;
var birthYear = 2006;
var totalAge = 2025 - 2006;
// console.log("Your Age is " + totalAge);

// 09;
// The Lifetime Supply Calculator:

var favouriteSnack = "chocolate chip";
var currentAge = 15;
var estimatedAge = 65;
var amountOfSnackPerDay = 3;
var totalChocolate = 50 * 3;
console.log(
  "You will need" +
    " " +
    totalChocolate +
    " " +
    "to last you until the ripe old age of" +
    " " +
    estimatedAge
);
