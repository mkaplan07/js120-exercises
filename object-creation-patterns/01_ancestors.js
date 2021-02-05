let foo = {name: 'foo'};
let bar = Object.create(foo);
bar.name = 'bar';
let qux = Object.create(bar);
qux.name = 'qux';

Object.prototype.getAncestors = function() {
  let ancestors = [];
  let obj = this;
  while (Object.getPrototypeOf(obj)) {
    ancestors.push(Object.getPrototypeOf(obj).name || 'Object.prototype');

    obj = Object.getPrototypeOf(obj);
  }

  return ancestors;
}

console.log(qux.getAncestors());
console.log(bar.getAncestors());
console.log(foo.getAncestors());
