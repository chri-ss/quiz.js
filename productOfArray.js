const productOfArray = (arr) => {
  while (arr.length > 0) {
    return arr.shift() * productOfArray(arr);
  }
  return 1;
};

console.log(productOfArray([1, 2, 3, 10]));
