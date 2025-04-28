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
