/**
 * as keyword does not perform any type conversion
 * The purily telling the compiler we know more about this object
 * if this object is return from this method !HTMLInputElement
 * then this line not going raise exception
 * this means our program going to crash (Be aware)
 * Threre no type conversion happenig under the hood
 */

// const phone = document.getElementById("phone") as HTMLInputElement;
const phone = <HTMLInputElement>document.getElementById("phone");

phone.value;

/**
 * KEY POINTS:
 *
 * Type Assertions:
 * 1. No runtime type conversion - just compile-time type hints
 * 2. Two syntaxes: 'as' keyword or angle brackets (<>)
 * 3. Can lead to runtime errors if assertions are incorrect
 * 4. Should be used sparingly and with caution
 *
 * Type Guards:
 * 1. Perform actual runtime type checks
 * 2. Types:
 *    - typeof: for primitives (string, number, boolean)
 *    - instanceof: for classes
 *    - in: for object properties
 *    - Custom type guards with 'is'
 *
 * Safety Approaches:
 * 1. Prefer type guards over type assertions
 * 2. Use optional chaining (?.) for null/undefined safety
 * 3. Combine type guards with union types
 * 4. Always handle error cases
 *
 * Best Practices:
 * 1. Use type guards whenever possible
 * 2. Avoid direct type assertions
 * 3. Handle potential null cases
 * 4. Document type guard functions
 * 5. Use meaningful interface names
 */

// 1.Use Type Guards

// Safe way using type guard
const phoneElement = document.getElementById("phone");
if (phoneElement instanceof HTMLInputElement) {
  // TypeScript knows it's safe here
  phoneElement.value;
} else {
  console.log("Element is not an input element");
}

//2.Optional Chaining with Type Assertion

// Another safe approach using optional chaining

const assertedPhone = document.getElementById("phone") as HTMLInputElement;
const phoneValue = assertedPhone?.value;

/**
   * The key differences:

Type guards (instanceof) perform runtime checks
Optional chaining (?.) prevents null/undefined errors
These approaches prevent runtime crashes if the element isn't what we expect
Best Practice: Always use type guards when possible instead of direct type assertions to ensure runtime safety.
   */

// 1. typeof Type Guard (for primitive types)
function processValue(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toLowerCase()); // TypeScript knows value is string
  } else {
    console.log(value.toFixed(2)); // TypeScript knows value is number
  }
}

// 2. instanceof Type Guard (for classes)
class Car {
  drive() {}
}
class Truck {
  loadCargo() {}
}

function useVehicle(vehicle: Car | Truck) {
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(); // TypeScript knows vehicle is Truck
  }
}

// 3. in Type Guard (for object properties)
interface Bird {
  fly(): void;
}
interface Fish {
  swim(): void;
}

function move(animal: Bird | Fish) {
  if ("swim" in animal) {
    animal.swim(); // TypeScript knows animal is Fish
  }
}

// 4. Custom Type Guard (using type predicates)
interface User {
  name: string;
  email: string;
}

function isUser(obj: any): obj is User {
  return "name" in obj && "email" in obj;
}

function processUser(input: any) {
  if (isUser(input)) {
    console.log(input.email); // TypeScript knows input is User
  }
}
