/**
 * KEY POINTS: Type Aliases and Union Types
 *
 * TYPE ALIASES:
 * Definition:
 * 1. Custom names for types
 * 2. Can represent object types, unions, tuples, etc.
 * 3. Improves code reusability and readability
 *
 * Best Practices:
 * 1. Use PascalCase for type names
 * 2. Keep types focused and single-purpose
 * 3. Use readonly for immutable properties
 * 4. Document complex types
 *
 * Common Use Cases:
 * 1. Complex object shapes
 * 2. Reusable type definitions
 * 3. Function signatures
 * 4. Combining with other types
 *
 * UNION TYPES:
 * Definition:
 * 1. Types that can hold multiple type values
 * 2. Uses | operator between types
 * 3. Requires type narrowing for type-specific operations
 *
 * Best Practices:
 * 1. Use type guards for narrowing
 * 2. Keep unions small and focused
 * 3. Consider exhaustiveness checking
 * 4. Document expected types
 *
 * Type Narrowing Techniques:
 * 1. typeof for primitives
 * 2. instanceof for classes
 * 3. in operator for properties
 * 4. Custom type predicates
 *
 * Cautions:
 * 1. Don't overuse unions
 * 2. Handle all possible cases
 * 3. Be careful with type inference
 * 4. Consider alternatives (enums, discriminated unions)
 */

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
