//1. Interfaces and Types
interface Run {
  miles: number;
}

function updateRunGoal(run: Run) {
  console.log(`
Miles left:       ${50 - run.miles}
Percent of goal:  ${(run.miles / 50) * 100}% complete
  `);
}

updateRunGoal({
  miles: 5,
});

//2. Interfaces and Classes
// In the code editor, there’s a program that we’d like to type. The program is the beginning of a computer’s operating system and will allow its users to create directories (aka folders).

// Every directory on the operating system should be able to add a file. Declare an interface named Directory at the top of index.ts. Give it a method name, addFile, whose type is a function with one parameter, name, of type string and returns void.
interface Directory {
  addFile: (name: string) => void;
}

//Using the implements keyword, apply Directory to the DesktopDirectory class.
class DesktopDirectory implements Directory {
  addFile(name: string) {
    console.log(`Adding file: ${name}`);
  }

  showPreview(name: string) {
    console.log(`Opening preview of file: ${name}`);
  }
}

const Desktop = new DesktopDirectory();

Desktop.addFile("lesson-notes.txt");
Desktop.showPreview("lesson-notes.txt");

//3. Deep Types
// Inside the Directory interface, add a config type member that matches the config property of DesktopDirectory. You should write a type that has a nested default object
interface Directory2 {
  addFile: (name: string) => void;
  config: {
    default: {
      encoding: string;
      permissions: string;
    };
  };
}

class DesktopDirectory2 implements Directory {
  config = {
    default: {
      encoding: "utf-8",
      permissions: "drw-rw-rw-",
    },
  };

  addFile(name: string) {
    console.log(`Adding file: ${name}`);
  }

  showPreview(name: string) {
    console.log(`Opening preview of file: ${name}`);
  }
}

const Desktop2 = new DesktopDirectory2();

console.log(Desktop2.config);

// 4. Composed Types
interface Directory {
  addFile: (name: string) => void;
  config: Config;
}

interface DefaultConfig {
  encoding: string;
  permissions: string;
}

interface Config {
  default: DefaultConfig;
}

class DesktopDirectory3 implements Directory {
  config = {
    default: {
      encoding: "utf-8",
      permissions: "drw-rw-rw-",
    },
  };

  addFile(name: string) {
    console.log(`Adding file: ${name}`);
  }

  showPreview(name: string) {
    console.log(`Opening preview of file: ${name}`);
  }
}

const Desktop3 = new DesktopDirectory3();

console.log(Desktop3.config);

//5. Extending Interfaces
// Declare an interface named Human, and give it two type members: name typed as a string and hobbies typed as string[]
// Add the members from Human to the Developer interface using the extends keyword
interface Developer extends Human {
  code: () => void;
}

// Add your interface here
interface Human {
  name: string;
  hobbies: string[];
}

const me: Developer = {
  code: () => console.log("Headphones on. Coffee brewed. Editor open."),
  name: "Corrina",
  hobbies: ["Building rockets"],
};

me.code();

//6. Index Signatures
// Declare an interface named Budget. Use an index signature to make all of its type members have property names of a variable category typed as a string with each key’s value typed as a number
// Apply the Budget interface to the result variable inside the getBudget() function
import { getBudgetAsync } from "./api";
interface Budget {
  [category: string]: number;
}

async function getBudget() {
  const result: Budget = await getBudgetAsync();
  console.log(result);
}

getBudget();

//7.Optional Type Members
// Declare an interface at the top of the file named UserNameOptions
//Apply the UserNameOptions type to the getUserName() function’s options parameter
interface UserNameOptions {
  firstName?: string;
  lastName?: string;
  username: string;
}

function getUserName(options: UserNameOptions) {
  if (options.firstName && options.lastName) {
    return console.log(`${options.firstName} ${options.lastName}`);
  }

  return console.log(options.username);
}

getUserName({
  firstName: "Mr.",
  lastName: "Oshiro",
  username: "hotelowner304",
});

getUserName({
  firstName: "Madeline",
  username: "mountainClimber",
});
