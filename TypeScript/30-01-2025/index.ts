console.log("Hello Ts");
// Union | or

function printStatusCode(code: string | number) {
  console.log(`My status code is ${code}.`);
}
printStatusCode(404);
printStatusCode("404");

function userInput(id: string | number | boolean) {
  // return userValue
  console.log(id);
}

userInput("A-0091");
userInput(100);
userInput(true);

// Void func

// TS Function

function getTime(): number {
  return new Date().getTime();
}
