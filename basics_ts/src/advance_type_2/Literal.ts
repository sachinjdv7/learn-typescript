/**
 * KEY POINTS: Literal Types
 *
 * Definition:
 * 1. Exact, specific values as types
 * 2. Can be strings, numbers, or booleans
 * 3. More specific than primitive types
 *
 * Use Cases:
 * 1. Configuration options
 * 2. Function parameters with specific values
 * 3. State machines
 * 4. API endpoints
 *
 * Benefits:
 * 1. Type-safe enums
 * 2. Prevents invalid values
 * 3. Better IDE support
 * 4. Self-documenting code
 *
 * Best Practices:
 * 1. Use with union types for choices
 * 2. Consider const assertions
 * 3. Use for configuration objects
 * 4. Document allowed values
 */

// Literal (exact, specific)

type Quantity = 50 | 100;

let quntity: Quantity = 100;

// can be string as well

type Metric = "cm" | "m";
