/**
 * KEY POINTS: TypeScript Type Inference and Common Errors
 *
 * TYPE INFERENCE:
 * Definition:
 * 1. TypeScript's ability to automatically determine types
 * 2. Works on variable initialization
 * 3. Contextual typing in function calls
 *
 * Common Inferred Types:
 * 1. Primitives: number, string, boolean
 * 2. Arrays: Type based on elements
 * 3. Objects: Structure and property types
 * 4. Functions: Return types and parameters
 *
 * Best Practices:
 * 1. Let TypeScript infer when type is obvious
 * 2. Explicitly declare types when:
 *    - No initial value
 *    - Complex types
 *    - Union types
 *    - Generic types
 *
 * COMMON ERRORS:
 * 1. Type Mismatch:
 *    - Assigning wrong type to variable
 *    - Passing wrong type to function
 *
 * 2. Undefined Properties:
 *    - Accessing non-existent properties
 *    - Missing required properties
 *
 * 3. Function Errors:
 *    - Wrong parameter count
 *    - Incorrect return type
 *    - Missing return statement
 *
 * DEBUGGING TIPS:
 * 1. Read error messages carefully
 * 2. Check type definitions
 * 3. Use type assertions sparingly
 * 4. Consider using type guards
 */

// exercise

// For each of these values, what type will the TypeScript compiler infer?

// number
let a = 100;
// string
let b = "Coffee";
// boolean[]
let c = [true, false, false];
// {age: 20}
let d = { age: 20 };
// number[]
let e = [3];
//any
let f;
// any[]
let g = [];

// What are the compilation errors in each of the following code snippets?
let song: {
  title: string;
  releaseYear: number;
} = { title: "My song", releaseYear: 2025 };
let prices = [100, 200, 300];
prices[0] = 100;

function myFunc(a: number, b: number): number {
  return a + b;
}
