function myFilter(arr, fn, thisArg) {
  let result = [];

  arr.forEach(function(val) {
    if (fn.call(thisArg, val)) {
      result.push(val);
    }
  });

  return result;
}

let filter = {
  allowedVals: [5, 7, 9]
}

let test = myFilter([4, 5, 6, 7, 8, 9], function(n) {
  return this.allowedVals.indexOf(n) > -1;
}, filter);

console.log(test);
