const pow = (n, e) => {
  if (e === 0) {
    return 1;
  } else {
    return n * pow(n, e - 1);
  }
};

console.log(pow(2, 4));
