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
