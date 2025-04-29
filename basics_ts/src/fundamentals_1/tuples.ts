/**
 * KEY POINTS: Tuples in TypeScript
 *
 * Definition:
 * 1. Fixed-length arrays with ordered types
 * 2. Each position has a specific type and meaning
 * 3. Stricter than regular arrays
 *
 * Types of Tuples:
 * 1. Basic Tuples:
 *    - Fixed number of elements
 *    - Each position typed explicitly
 * 2. Optional Tuples:
 *    - Elements can be optional (?)
 *    - Must come at end
 * 3. Rest Tuples:
 *    - Can include spread elements
 *    - Useful for extending tuples
 * 4. Readonly Tuples:
 *    - Immutable tuple values
 *    - Prevents accidental modifications
 *
 * Best Practices:
 * 1. Keep tuples small (2-3 elements)
 * 2. Use descriptive type aliases
 * 3. Consider objects for complex data
 * 4. Document element meanings
 *
 * Common Use Cases:
 * 1. Coordinates (lat, long)
 * 2. RGB/RGBA colors
 * 3. Key-value pairs
 * 4. React useState returns
 *
 * Cautions:
 * 1. Don't use for complex structures
 * 2. Be mindful of readability
 * 3. Watch for type inference
 * 4. Consider named properties alternative
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
