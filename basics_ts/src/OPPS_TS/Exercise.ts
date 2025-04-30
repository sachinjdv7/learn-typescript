class Logger {
  constructor(public fileName: string) {}
  readFile() {}
  writeFile() {}
}
const logger = new Logger("hellofile");
logger;

class Person1 {
  constructor(public firstName: string, public lastName: string) {}

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Employee1 extends Person1 {
  constructor(firstName: string, lastName: string, public salary: number) {
    super(firstName, lastName);
  }
}

// const person = new Person1("sachin", "jadhav");
// console.log(person.fullName);

interface Address {
  street: string;
  city: string;
  zipCode: number;
}

interface Emp {
  name: string;
  salary: number;
  address: Address;
}

let employee5 = {
  name: "John Smith",
  salary: 50_000,
  address: {
    street: "Flinders st",
    city: "Melbourne",
    zipCode: 3144,
  },
};
