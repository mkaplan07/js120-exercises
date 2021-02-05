function matcher(a, b) {
  return a.every((kv, idx) => {
    return kv === b[idx];
  });
}

function isMatch(a, b) {
  let keys1 = Object.keys(a).sort();
  let keys2 = Object.keys(b).sort();

  if (keys1.length !== keys2.length) {
    return false;
  }

  let vals1 = Object.values(a).sort();
  let vals2 = Object.values(b).sort();

  return matcher(keys1, keys2) && matcher(vals1, vals2);
}

function objectsEqual(obj1, obj2) {
  if (obj1 === obj2) {
    return true;
  }

  return isMatch(obj1, obj2);
}

console.log(objectsEqual({}, {}));
console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));

console.log(objectsEqual({a: 'foo'}, {a: 'bar'}));
console.log(objectsEqual({a: 'foo'}, {b: 'foo'}));

console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));
console.log(objectsEqual({a: 'foo'}, {a: 'foo', b: 'bar'}));
console.log(objectsEqual({a: 'foo'}, {a: 'foo', b: undefined}));

let ab = {a: 'baz', b: 'dez'};
let abCopy = Object.assign({}, ab);
console.log(objectsEqual(ab, abCopy)); // true
console.log(ab === abCopy); // false
