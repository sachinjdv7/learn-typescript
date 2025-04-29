/**
 * KEY POINTS: Intersection Types
 *
 * Definition:
 * 1. Combines multiple types into one using '&' operator
 * 2. Must satisfy all type requirements
 * 3. Creates a new type with all properties from combined types
 *
 * Use Cases:
 * 1. Combining interfaces/types
 * 2. Mixin patterns
 * 3. Adding capabilities to existing types
 *
 * Best Practices:
 * 1. Use when an object needs multiple capabilities
 * 2. Keep intersected types focused and small
 * 3. Avoid conflicting property types
 * 4. Consider interfaces for simpler cases
 *
 * Cautions:
 * 1. Be aware of property conflicts
 * 2. Don't overuse - can lead to complex types
 * 3. Consider type compatibility
 * 4. Watch for 'never' type creation
 */

type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizable;

const textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};
