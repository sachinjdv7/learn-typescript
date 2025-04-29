/**
 * KEY POINTS: Null & Undefined
 *
 * Definition:
 * 1. null: Intentional absence of value
 * 2. undefined: Variable declared but not assigned
 * 3. Both are subtypes of all other types with strictNullChecks disabled
 *
 * TypeScript Handling:
 * 1. strictNullChecks compiler option affects behavior
 * 2. Union types with null/undefined for explicit handling
 * 3. Type guards required for safe access
 *
 * Best Practices:
 * 1. Enable strictNullChecks for safer code
 * 2. Use union types to explicitly handle null/undefined
 * 3. Implement proper null checks
 * 4. Consider using optional chaining and nullish coalescing
 *
 * Common Patterns:
 * 1. Default values with ??
 * 2. Optional properties with ?
 * 3. Safe navigation with ?.
 * 4. Type guards for null checks
 */

function greet(name: string | null | undefined) {
  if (name) console.log(name.toUpperCase());
  else console.log("hola");
}
greet("sachin");
