//1. Defining Unions
//Add a union to the statement parameter with two type members: string and number
function printNumsAndStrings(statement: string | number) {
  console.log(`ℹ️ LOG:: ${statement}`);
}

printNumsAndStrings("hello!");
printNumsAndStrings(2);

//2. Type Narrowing
function formatValue(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toLowerCase());
  }
  if (typeof value === "number") {
    console.log(value.toFixed(2));
  }
}

formatValue("Hiya");
formatValue(42);

//3. Inferred Union Return Types
//Declare a variable named userData that stores the returned value of createUser(). Then, go back and provide userData with the correct union type.
type User = {
  id: number;
  username: string;
};

function createUser() {
  const randomChance = Math.random() >= 0.5;

  if (randomChance) {
    return { id: 1, username: "nikko" };
  } else {
    return "Could not create a user.";
  }
}

let userData: User | string = createUser();
