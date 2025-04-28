/**
 * TypeScript Enums Guide
 *
 * WHAT ARE ENUMS:
 * - Enumerations: A way to define a set of named constants
 * - Can be numeric (auto-incremented) or string-based
 * - Provide type safety and intellisense for predefined values
 *
 * TYPES OF ENUMS:
 * 1. Numeric Enums:
 *    - Auto-incremented starting from 0 if not specified
 *    - Example: enum Direction { North = 1, South, East, West }
 *
 * 2. String Enums:
 *    - Must have explicit string values
 *    - More readable in runtime debugging
 *    - Example: enum Status { Success = "SUCCESS", Error = "ERROR" }
 *
 * 3. Const Enums:
 *    - Completely removed during compilation for better performance
 *    - Values are inlined where used
 *    - Use when you don't need enum as an object at runtime
 *
 * WHEN TO USE ENUMS:
 * 1. For a fixed set of constants (status codes, roles, states)
 * 2. When values are known at compile time
 * 3. When you need type safety for a set of related values
 * 4. To improve code readability and maintenance
 *
 * BEST PRACTICES:
 * 1. Use const enum for better performance when possible
 * 2. Use PascalCase for enum names
 * 3. Use UPPERCASE for enum values (especially in string enums)
 * 4. Prefer string enums over numeric for better debugging
 * 5. Keep enums focused and small (single responsibility)
 *
 * CAUTIONS:
 * 1. Avoid using computed values in enums
 * 2. Be careful with numeric enum's auto-incrementing behavior
 * 3. Remember const enums can't be reverse mapped
 * 4. Consider union types for simple cases
 *
 * COMMON USE CASES:
 * - API Status Codes
 * - User Roles/Permissions
 * - Application States
 * - Configuration Options
 * - HTTP Methods
 */

// Best Practice: Use const enum for better performance as they are removed during compilation
// They are inlined at use sites and don't create an object at runtime
const enum OrderStatus {
  Pending = "PENDING",
  Processing = "Processing",
  Shipped = "SHIPPED",
  Delivered = "DELIVERED",
  Cancelled = "CANCELLED",
}

// Example: HTTP Status Codes - Numeric enums
enum HttpStatus {
  OK = 200,
  Created = 201,
  BadRequest = 400,
  Unauthorized = 401,
  NotFound = 404,
  InternalServerError = 500,
}

// Example: User Roles - String enums for better readability
enum UserRole {
  Admin = "ADMIN",
  Editor = "EDITOR",
  Viewer = "VIEWER",
  Guest = "GUEST",
}

// Example: UI States - Common in React/Angular applications
enum LoadingState {
  Initial = "INITIAL",
  Loading = "LOADING",
  Success = "SUCCESS",
  Error = "ERROR",
}

// Example: API Endpoints - Centralizing API routes
enum ApiEndpoints {
  Users = "/api/users",
  Products = "/api/products",
  Orders = "/api/orders",
}

// Example Usage:
function handleOrder(status: OrderStatus) {
  switch (status) {
    case OrderStatus.Pending:
      return "Order is pending";
    case OrderStatus.Delivered:
      return "Order has been delivered";
    default:
      return "Unknown status";
  }
}

function checkUserAccess(role: UserRole): boolean {
  return role === UserRole.Admin || role === UserRole.Editor;
}

// Example of using HTTP status in API response handling
function handleApiResponse(status: HttpStatus): string {
  if (status === HttpStatus.OK) {
    return "Success";
  } else if (status === HttpStatus.NotFound) {
    return "Resource not found";
  }
  return "Error occurred";
}

// Example of using LoadingState in UI
let currentUIState: LoadingState = LoadingState.Initial;

// Example of using API endpoints
const fetchUsers = () => {
  console.log(`Fetching from ${ApiEndpoints.Users}`);
  // Actual API call would go here
};

// Export for use in other files
export { OrderStatus, HttpStatus, UserRole, LoadingState, ApiEndpoints };
