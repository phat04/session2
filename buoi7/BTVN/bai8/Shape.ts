// Lớp cha
class Shape {
  calculateArea(): number {
    return 0;
  }
}

class Circle extends Shape {
  radius: number;

  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

// Lớp Rectangle
class Rectangle extends Shape {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    super();
    this.width = width;
    this.height = height;
  }

  // Override
  calculateArea(): number {
    return this.width * this.height;
  }
}

const circle = new Circle(5);

const rectangle = new Rectangle(10, 4);

console.log(circle.calculateArea());

console.log(rectangle.calculateArea());
