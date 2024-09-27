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

//6. Unions with Literal Types
type Status = "idle" | "downloading" | "complete";

function downloadStatus(status: Status) {
  if (status === "idle") {
    console.log("Download");
  }
  if (status === "downloading") {
    console.log("Downloading...");
  }
  if (status === "complete") {
    console.log("Your download is complete!");
  }
}

downloadStatus("idle");

//7. Type guards
function formatStatistic(stat: string | number) {
  if (typeof stat === "number") {
    return stat.toFixed(2);
  }
  if (typeof stat === "string") {
    return stat.toUpperCase();
  }
}

console.log(formatStatistic("Win"));
console.log(formatStatistic(0.364));

//8. Using 'in' with Type Guards
// write a type guard using `in` inside the move() and checks if 'run' and 'swim' exists on pet
type Cat = {
  name: string;
  run: () => string;
};

type Fish = {
  name: string;
  swim: () => string;
};

const siameseCat = {
  name: "Proxie",
  run: () => "pitter pat",
};

const bettaFish = {
  name: "Neptune",
  swim: () => "bubble blub",
};

function move(pet: Cat | Fish) {
  if ("run" in pet) {
    return pet.run();
  }
  if ("swim" in pet) {
    return pet.swim();
  }
}

console.log(move(siameseCat));
