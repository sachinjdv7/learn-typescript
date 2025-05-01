function Capitalize(
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  const original = descriptor.get;
  descriptor.get = function () {
    const result = original?.call(this);
    return typeof result === "string" ? result.toUpperCase() : result;
  };
}

class Person2 {
  constructor(public fname: string, public lname: string) {}
  @Capitalize
  get fullName() {
    return `${this.fname} ${this.lname}`;
  }
}

const result1 = new Person2("sachin", "jadhav");
console.log(result1.fullName);
