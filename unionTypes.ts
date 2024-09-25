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

//4. Unions and Arrays
//Define a union array type on the listings parameter
function formatListings(listings: (string | number)[]) {
  return listings.map((listing) => {
    if (typeof listing === "string") {
      return listing.toUpperCase();
    }

    if (typeof listing === "number") {
      return `$${listing.toLocaleString()}`;
    }
  });
}

const result = formatListings([
  "123 Main St",
  226800,
  "580 Broadway Apt 4a",
  337900,
]);

console.log(result);

//5. Common Key Value Pairs
//Add a type to the getFriendNameFromEvent()’s event parameter. Use a union to allow event to be a Like or a Share, then save your code.
type Like = {
  username: string;
  displayName: string;
};

type Share = {
  username: string;
};

function getFriendNameFromEvent(event: Like | Share) {
  return event.displayName || event.username;
}

const newEvent = {
  username: "vkrauss",
  displayName: "Veronica Krauss",
};

const friendName = getFriendNameFromEvent(newEvent);

console.log(`You have an update from ${friendName}.`);
