const replicate = (times, num) => {
  let hold = [];
  if (times < 1) {
    return [];
  } else {
    hold.push(num);
    return hold.concat(replicate(times - 1, num));
  }
};

console.log(replicate(3, 5));
console.log(replicate(1, 69));
console.log(replicate(-2, 6));
