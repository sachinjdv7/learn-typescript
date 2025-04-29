/**
 * KEY POINTS: Optional Chaining
 *
 * Definition:
 * 1. ?. operator for safely accessing nested properties
 * 2. Returns undefined if any part of the chain is null/undefined
 * 3. Prevents runtime errors from null/undefined access
 *
 * Use Cases:
 * 1. API response handling
 * 2. Deeply nested objects
 * 3. DOM element access
 * 4. Configuration objects
 *
 * Benefits:
 * 1. Safer property access
 * 2. Cleaner than multiple if checks
 * 3. Combines well with nullish coalescing
 * 4. Reduces boilerplate code
 *
 * Best Practices:
 * 1. Use with potentially undefined properties
 * 2. Combine with type guards when needed
 * 3. Don't overuse - consider restructuring deep nesting
 * 4. Consider default values with ?? operator
 */

type Customer = {
  birthday?: Date;
};

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(1);
// if (customer !== null && customer !== undefined)
console.log(customer?.birthday?.getFullYear());

// optional element access operator

// if(customer !== null || customer !== undefind)

// customers?.[0]

// optional call

// let log: any = (message: string) => console.log(message);

let log: any = null;

log?.("a");
