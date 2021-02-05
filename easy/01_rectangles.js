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

let rec = new Rectangle(4, 5);
console.log(rec.getWidth());
console.log(rec.getLength());
console.log(rec.getArea());
