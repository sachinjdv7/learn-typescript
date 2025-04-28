/**
 * TypeScript Tuples Guide
 *
 * WHAT ARE TUPLES:
 * - Fixed-length arrays where each element has a specific type
 * - Order of elements is significant and types are predetermined
 * - Like strongly-typed arrays with a fixed number of elements
 *
 * TYPES OF TUPLES:
 * 1. Basic Tuples:
 *    - Fixed number of elements with specific types
 *    - Example: type Point = [number, number]
 *
 * 2. Optional Elements:
 *    - Elements can be marked as optional with '?'
 *    - Example: type NameAge = [string, number?]
 *
 * 3. Rest Elements:
 *    - Can include rest elements using spread operator
 *    - Example: type StringNumberBooleans = [string, number, ...boolean[]]
 *
 * 4. Readonly Tuples:
 *    - Immutable tuples using 'readonly' modifier
 *    - Example: type ReadOnlyPoint = readonly [number, number]
 *
 * WHEN TO USE TUPLES:
 * 1. When you need a fixed collection of values with different types
 * 2. For representing structured data like coordinates
 * 3. When the order and types of elements are important
 * 4. For returning multiple values from functions
 *
 * BEST PRACTICES:
 * 1. Keep tuples small (2-3 elements ideally)
 * 2. Use descriptive type aliases for tuples
 * 3. Consider using interfaces/objects for complex data structures
 * 4. Use readonly tuples when immutability is needed
 * 5. Document the meaning of each position in the tuple
 *
 * CAUTIONS:
 * 1. Avoid using tuples for complex data structures
 * 2. Be careful with tuple element access (use destructuring)
 * 3. Remember tuples are zero-indexed
 * 4. Consider readability vs using an interface
 *
 * COMMON USE CASES:
 * - Coordinates (latitude, longitude)
 * - Key-value pairs
 * - RGB/RGBA color values
 * - State management (React useState)
 * - Success/Error responses
 */

// Best Practice: Use type aliases for better readability and reuse
type Point = [number, number];
type RGB = [number, number, number];
type RGBA = [...RGB, number]; // Example of tuple with rest elements

// Example: Geographical Coordinates [latitude, longitude]
const sydneyLocation: Point = [-33.8688, 151.2093];
const newYorkLocation: Point = [40.7128, -74.006];

// Example: Colors with alpha channel
const red: RGB = [255, 0, 0];
const transparentGreen: RGBA = [0, 255, 0, 0.5];

// Example: API Response with Status, Message, and Generic Data
type ApiResponse<T> = [number, string, T];

// Success case with string data
const successResponse: ApiResponse<string> = [
  200,
  "Success",
  "Data fetched successfully",
];

// Error case with null data
const errorResponse: ApiResponse<null> = [404, "Not Found", null];

// Example: Time Range with specific meaning for each position
type DateRange = [Date, Date];
const businessHours: DateRange = [
  new Date("2024-04-29T09:00:00"),
  new Date("2024-04-29T17:00:00"),
];

// Example: Key-Value Pairs (similar to Map entries)
type KeyValuePair<K, V> = [K, V];
const headers: KeyValuePair<string, string>[] = [
  ["Content-Type", "application/json"],
  ["Authorization", "Bearer token123"],
];

// Example: React-style useState Hook Return Type
type StateHandler<T> = [T, (newValue: T) => void];

// Example: Optional elements in tuple
type NameAgeOptional = [string, number?];
const person: NameAgeOptional = ["John"]; // Age is optional

// Example: Readonly tuple for immutability
type ReadonlyPoint = readonly [number, number];
const origin: ReadonlyPoint = [0, 0];
// origin[0] = 1; // Error: Cannot assign to '0' because it is a read-only property

// Utility Functions
function calculateDistance(point1: Point, point2: Point): number {
  const [x1, y1] = point1;
  const [x2, y2] = point2;
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

function isWithinBusinessHours(date: Date, hours: DateRange): boolean {
  const [start, end] = hours;
  return date >= start && date <= end;
}

function parseRGBA(color: RGBA): string {
  const [r, g, b, a] = color;
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}

// Example: Destructuring in function parameters
function processApiResponse<T>([status, message, data]: ApiResponse<T>): void {
  console.log(`Status: ${status}, Message: ${message}, Data:`, data);
}

// Export types for use in other files
export {
  Point,
  RGB,
  RGBA,
  ApiResponse,
  DateRange,
  KeyValuePair,
  StateHandler,
  NameAgeOptional,
  ReadonlyPoint,
};
