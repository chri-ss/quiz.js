let count = 0;

const totalIntegers = (arr) => {
  arr.forEach((el) => {
    if (typeof el === "object") {
      return totalIntegers(el);
    } else if (typeof el === "number") {
      count++;
    }
  });
  return count;
};

var seven = totalIntegers([[[5], 3], 0, 2, ["foo"], [], [4, [5, 6]]]);

console.log(seven);
