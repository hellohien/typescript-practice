//1. Defining Unions
//Add a union to the statement parameter with two type members: string and number
function printNumsAndStrings(statement: string | number) {
  console.log(`ℹ️ LOG:: ${statement}`);
}

printNumsAndStrings("hello!");
printNumsAndStrings(2);
