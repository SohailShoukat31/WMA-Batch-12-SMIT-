console.log("Hello Ts");
// Union | or
function printStatusCode(code) {
    console.log("My status code is ".concat(code, "."));
}
printStatusCode(404);
printStatusCode('404');
function userInput(id) {
    // return userValue
    console.log(id);
}
userInput("A-0091");
userInput(100);
userInput(true);
// Void func
// TS Function
function getTime() {
    return new Date().getTime();
}
