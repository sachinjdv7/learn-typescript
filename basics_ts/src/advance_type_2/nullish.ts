/**
 * KEY POINTS: Nullish Coalescing
 *
 * Definition:
 * 1. ?? operator returns right operand when left is null/undefined
 * 2. Different from || which checks for falsy values
 * 3. More precise than logical OR for null/undefined checks
 *
 * Behavior:
 * 1. Only triggers on null/undefined (not other falsy values)
 * 2. Preserves falsy values like 0 or empty string
 * 3. Can be chained with multiple fallbacks
 *
 * Use Cases:
 * 1. Default values in configurations
 * 2. API response handling
 * 3. Form input defaults
 * 4. Optional parameter handling
 *
 * Best Practices:
 * 1. Use instead of || when you want to preserve falsy values
 * 2. Combine with optional chaining when needed
 * 3. Consider meaningful default values
 * 4. Document default value logic
 */

let speed: number | null = null;

// falsy (undefined, null, '',false,0)

let ride = {
  //   speed: speed || 30, // plain javascipt way (what if user gives 0)-> then return 30
  //   speed: speed !==null ? speed : 30 // better way
  speed: speed ?? 30, // best way (gives fallback value if speed not there)
};
