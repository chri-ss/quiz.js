const sumSquares = (arr) => {
  if (arr.length === 0) {
    return 0;
  }

  let total = 0;

  let first = arr.shift();
  if (Array.isArray(first)) {
    total += sumSquares(first);
  } else if (Number.isInteger(first)) {
    const squared = first * first;
    total += squared;
  }

  return total + sumSquares(arr);
};

var l = [1, 2, 3];
console.log(sumSquares(l));

l = [[1, 2], 3];
console.log(sumSquares(l));

l = [[[[[[[[[1]]]]]]]]];
console.log(sumSquares(l));

l = [10, [[10], 10], [10]];
console.log(sumSquares(l));
