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
