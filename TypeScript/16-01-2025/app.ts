console.log("Hello , Sohail !  Welcome to TypeScript. ");

// let a:string = "sohail";
// console.log(a);

// let name :string = "Typescript";
// name : 123;
// console.log(name)

// Ye error dega, kyun ke 'name' sirf string accept karega

//  function add(a: number , b:number ):number{
//     return a + b
//  }
// console.log(add(5 + "10"));   //Compile hone se pehle error dega

function myFunc(name: string, role: string): string {
  return name + role;
}
console.log(myFunc("Sohail",  "Learner "));
