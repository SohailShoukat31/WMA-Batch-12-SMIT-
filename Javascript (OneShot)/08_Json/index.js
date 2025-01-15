console.log("Hello World !");

let car = {
  brand: "Toyota",
  color: "Red",
  model: 2022,
};
console.log(car);

// Object Ki Properties Access Karna

// Dot Notation:
// car.brand;
console.log(car.brand);

// Bracket Notation:
console.log(car["color"]);

//  Properties Add Aur Update Karna

car.year = 2022;
// car.color = "blue"
console.log(car);

let student = {
  name: "Sohail",
  age: 18,
  email: "sohailshoukat149@gmail.com",
  greet: function () {
    return `Hello , my name is ${this.name}`;
  },
};
console.log(student);
console.log(student.greet());

// Object.keys()

console.log(Object.keys(student));
// Object.values()
console.log(Object.values(student));

// Object.entries()
console.log(Object.entries(student));

// Object.assign()

let carNew = {
  brand: "Audi",
  color: "Red",
  model: 2021,
};

console.log({}, car, carNew);

let person = {
  name: "Saira",
  address: {
    city: "Karachi",
    postalCode: 1234,
  },
};
console.log(person.address.city);

// Looping Through Object Properties
