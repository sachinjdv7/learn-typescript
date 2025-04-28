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
