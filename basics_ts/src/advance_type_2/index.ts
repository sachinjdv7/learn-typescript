// type alias

type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

let employee1: Employee = {
  id: 1,
  name: "sachin",
  retire: (date: Date) => {
    console.log(date);
  },
};

// unions

function kgToLbs(weight: number | string): number {
  // narrowing be specific
  if (typeof weight === "number") return weight * 2.2;

  return parseInt(weight) * 2.2;
}

kgToLbs(10);
kgToLbs("10");
