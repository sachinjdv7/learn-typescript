function Log(target: any, methodName: string, descriptor: PropertyDescriptor) {
  const original = descriptor.value as Function;
  descriptor.value = function (user: string) {
    console.log("first");
    original.call(this, user);
    console.log("after");
  };
}

class Person4 {
  @Log
  sayHello(user: string) {
    console.log(`Hello ${user}`);
  }
}

const person = new Person4();
person.sayHello("sachin");
