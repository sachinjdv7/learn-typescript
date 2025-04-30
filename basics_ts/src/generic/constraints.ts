// restric the generics
interface Person7 {
  name: string;
}

class Person9 {
  constructor(public name: string) {}
}

class Customer9 extends Person9 {}

function echo<T extends number | string | Person7 | Person9>(value: T): T {
  return value;
}

echo(1); // number
echo("5"); // string
echo({ name: "sachin" }); // interface
echo(new Person9("sachin"));
echo(new Customer9("sachin"));
