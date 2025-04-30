// caution: activate this setting "noImplicitOverride": true in config file

class Person {
  constructor(public firstName: string, public lastName: string) {}

  get fullName() {
    return this.firstName + " " + this.lastName;
  }

  walk() {
    console.log("walking...");
  }
}

class Student extends Person {
  constructor(public studentId: number, firstName: string, lastName: string) {
    super(firstName, lastName);
  }

  takeTest() {
    console.log("Taking test");
  }
}

class Teacher extends Person {
  override get fullName() {
    return "Professor " + super.fullName;
  }
}

class Principle extends Person {
  override get fullName() {
    return "Principle " + super.fullName;
  }
}

// let student = new Student(1, "sachin", "jadhav");
// student.takeTest();
// console.log(student.fullName);
// console.log(student);

// let teacher = new Teacher("piyush", "garg");
// console.log(teacher.fullName);

// polimorphism -> object can take many forms
// open clsoed principle - 'classes should be open for extesion and
//  closed for modification'

getNames([
  new Student(1, "sachin", "jadhav"),
  new Teacher("piyush", "garg"),
  new Principle("hitesh", "chaudhari"),
]);

function getNames(people: Person[]) {
  for (let person of people) {
    console.log(person.fullName);
  }
}
