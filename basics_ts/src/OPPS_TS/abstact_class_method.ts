abstract class Shape {
  constructor(public color: string) {}
  abstract render(): void;
}

class Circle extends Shape {
  constructor(public radius: number, color: string) {
    super(color);
  }
  override render(): void {
    console.log("rendering a circle");
  }
}

let shape = new Shape("red");
shape.render();

/**
 * abstract class :- 1. abstract class is like uncooked food (not ready yet)
 *                   2. this will help us to prevent to make an instace of Shape class
 *
 * abstract method :-1. This only used in abstact class method
 *
 */
