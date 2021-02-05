class Rectangle {
  constructor(width, length) {
    this.width = width;
    this.length = length;
  }

  getWidth() {
    return this.width;
  }
  getLength() {
    return this.length;
  }
  getArea() {
    return this.getWidth() * this.getLength();
  }
}

class Square extends Rectangle {
  constructor(size) {
    super(size, size); // extends & super vs. Rectangle.call(this, size, size)
  }
}

let square = new Square(5);
console.log(`area of square = ${square.getArea()}`);
