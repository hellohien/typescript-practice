//1. Narrowing with 'else'
type Pasta = {
  menuName: string;
  boil: () => string;
};

type Meat = {
  menuName: string;
  panFry: () => string;
};

const fettuccine = {
  menuName: "Fettuccine",
  boil: () => "Heat water to 212 degrees",
};

const steak = {
  menuName: "New York Strip Steak",
  panFry: () => "Heat oil to 350 degrees",
};

function prepareEntree(entree: Pasta | Meat) {
  if ("boil" in entree) {
    return entree.boil();
  } else {
    return entree.panFry();
  }
}

console.log(prepareEntree(fettuccine));

//2. Narrowing After a Type Guard
type Metal = {
  magnetize: () => string;
};

type Glass = {
  melt: () => string;
};

const iron = {
  magnetize: () => "Electromagnet activated",
};

const bottle = {
  melt: () => "Furnace set to 2,700 degrees",
};

function recycle(trash: Metal | Glass) {
  // Add your code below:
  if ("magnetize" in trash) {
    return trash.magnetize();
  }

  return trash.melt();
}

console.log(recycle(iron));
