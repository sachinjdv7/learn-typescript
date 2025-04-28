let age: number = 20;

if (age < 50) age += 10;

console.log(age);

let sales = 123_456_789;
let course = "Typescript";
let isPublished = true;
let level;

function render(document: any) {
  console.log(document);
}

// arrays

let arr: number[] = [1, 2, 3];
arr[0] = 5;
arr.forEach((e) => e.toFixed());

// tuples

// its only useful when two values mean key value pair

let user: [number, string] = [1, "sachin"];
user.push(5); // gaps in typescript not throwin the errors
console.log(user);

// enum

const enum Size {
  Small = 1,
  Medium,
  Large,
}

let mySize: Size = Size.Large;

console.log(mySize);
