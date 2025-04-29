/**
 * KEY POINTS: TypeScript Fundamentals
 *
 * TYPE ANNOTATIONS:
 * Definition:
 * 1. Explicit type declarations for variables
 * 2. Type inference when not specified
 * 3. Helps catch type-related errors early
 *
 * PRIMITIVE TYPES:
 * 1. number: All numeric values
 * 2. string: Text data
 * 3. boolean: true/false
 * 4. null and undefined
 * 5. symbol: Unique identifiers
 *
 * ARRAYS AND OBJECTS:
 * Arrays:
 * 1. Type[] or Array<Type> syntax
 * 2. readonly modifier available
 * 3. Multi-dimensional arrays
 *
 * Objects:
 * 1. Interface or type alias
 * 2. Optional properties with ?
 * 3. readonly properties
 * 4. Index signatures
 *
 * Best Practices:
 * 1. Let TypeScript infer when obvious
 * 2. Be explicit when needed
 * 3. Use strict mode
 * 4. Avoid any type
 *
 * Common Patterns:
 * 1. Union types for flexibility
 * 2. Type aliases for reusability
 * 3. Interfaces for object shapes
 * 4. Generics for reusable code
 *
 * Cautions:
 * 1. Don't overuse type annotations
 * 2. Avoid type assertions when possible
 * 3. Be careful with any
 * 4. Consider null checking
 */

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

// functions

function calculateTax(income: number, taxYear = 2022): number {
  if (taxYear < 2022) return income * 1.2;

  return income * 1.3;
}

calculateTax(10_000);

// objects

let employee: {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: "sachin",
  retire: (date: Date) => {
    console.log(date);
  },
};
