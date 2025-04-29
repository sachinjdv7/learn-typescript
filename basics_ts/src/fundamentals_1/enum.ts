/**
 * KEY POINTS: Enums in TypeScript
 *
 * Definition:
 * 1. Enums: Named constant sets
 * 2. Can be numeric (auto-incremented) or string-based
 * 3. Used for related constant values
 *
 * Types of Enums:
 * 1. Numeric Enums:
 *    - Auto-incrementing from 0 or specified number
 *    - Memory efficient
 * 2. String Enums:
 *    - More readable and debuggable
 *    - Better for serialization
 * 3. Const Enums:
 *    - Better performance
 *    - Inlined at compile time
 *
 * Best Practices:
 * 1. Use PascalCase for enum names
 * 2. Use UPPERCASE for enum values
 * 3. Prefer const enums for better performance
 * 4. Use string enums for better debugging
 *
 * Common Use Cases:
 * 1. Status codes and states
 * 2. User roles and permissions
 * 3. Configuration options
 * 4. API endpoints
 *
 * Cautions:
 * 1. Avoid computed values
 * 2. Be aware of reverse mappings in numeric enums
 * 3. Consider union types for simple cases
 * 4. Remember const enums are inlined
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
