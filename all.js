const all = (arr, cb) => {
  if (arr.length === 0) {
    return true;
  } else {
    let curr = arr.shift();
    if (cb(curr)) {
      let result = all(arr, cb);
      return result;
    } else {
      return false;
    }
  }
};

var allAreLessThanSeven = all([1, 2, 9], function (num) {
  return num < 7;
});
console.log(allAreLessThanSeven);
