// 1. Enums
let petOnSale = "chinchilla";
let ordersArray = [
  ["rat", 2],
  ["chinchilla", 1],
  ["hamster", 2],
  ["chinchilla", 50],
];
//Create an num named Pet
enum Pet {
  Hamster,
  Rat,
  Chinchilla,
  Tarantula,
}

//petOnSale is not type safe, to make it type safe..
let petOnSaleTS: Pet = Pet.Chinchilla;

//ordersArray is not type safe, to make it type safe..
//also, add the appropriate type annotation
//[Pet, number][] represents an array of tuples
let ordersArrayTS: [Pet, number][] = [
  [Pet.Rat, 2],
  [Pet.Chinchilla, 1],
  [Pet.Hamster, 2],
  [Pet.Chinchilla, 50],
];

ordersArrayTS.push([Pet.Jerboa, 3]); //Error! Property 'Jerboa' does not exist on type 'typeof Pet'

// 2. String Enums vs. Numeric Enums
let petOnSale = "chinchilla";
let ordersArray = [
  ["rat", 2],
  ["chinchilla", 1],
  ["hamster", 2],
  ["chinchilla", 50],
];

// Write your code below:
// create a string enum named Pet
enum Pet {
  Hamster = "HAMSTER",
  Rat = "RAT",
  Chinchilla = "CHINCHILLA",
  Tarantula = "TARANTULA",
}

//create a type-safe variable petOnSaleTS & assign to it the value Pet.Chinchilla
let petOnSaleTS: Pet = Pet.Chinchilla;

// create a type safe version of ordersArray
// pet names should be replaced by correpsonding enum values
let ordersArrayTS: [Pet, number][] = [
  [Pet.Rat, 2],
  [Pet.Chinchilla, 1],
  [Pet.Hamster, 2],
  [Pet.Chinchilla, 50],
];

ordersArrayTS.push(["HAMSTER", 1]); //error: Type '"HAMSTER"' is not assignable to type 'Pet'
//must use Pet.Hamster instead of HAMSTER

//3. Object Types
function sayHappyBirthdayWithObject(personObject: {
  name: string;
  age: number;
  giftWish: string;
  success: boolean;
}) {
  let output = "";
  output += "Happy Birthday " + personObject.name + "! ";
  output += "You are now " + personObject.age + " years old! ";
  output +=
    "Your birthday wish was to receive " +
    personObject.giftWish +
    ". And guess what? You will ";
  if (!personObject.success) {
    output += "not ";
  }
  output += "receive it! \n";
  console.log(output);
}

let birthdayBabies: {
  name: string;
  age: number;
  giftWish: string;
  success: boolean;
}[] = [
  { name: "Liam", age: 0, giftWish: "karate skills", success: false },
  { name: "Olivia", age: 0, giftWish: "a bright future", success: true },
  { name: "Ava", age: 0, giftWish: "$0.25", success: true },
];

birthdayBabies.forEach(sayHappyBirthdayWithObject);

//4.Type aliases
type Coord = [number, number, string, number, number, string];

let codecademyCoordinates: Coord = [40, 43.2, "N", 73, 59.8, "W"];
let bermudaTCoordinates: Coord = [25, 0, "N", 71, 0, "W"];

//5. Function types
// Math Operations
function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}
function wrongAdd(a, b) {
  return a + b + "";
}

// Add your function type below:

// Math Tutor Function That Accepts a Callback
function mathTutor(operationCallback) {
  console.log("Let's learn how to", operationCallback.name, "!");
  let value25 = operationCallback(2, 5);
  console.log(
    "When we",
    operationCallback.name,
    "2 and 5, we get",
    value25,
    "."
  );
  console.log(
    "When we",
    operationCallback.name,
    value25,
    "and 7, we get",
    operationCallback(value25, 7),
    "."
  );
  console.log("Now fill out this worksheet.");
}

// Call your functions below:
