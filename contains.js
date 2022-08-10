var nestedObject = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: "foo2",
          },
        },
      },
    },
  },
};

const contains = (obj, val) => {
  for (const key in obj) {
    if (obj[key] === val) {
      return true;
    } else if (typeof obj[key] === "object") {
      return contains(obj[key], val);
    }
  }
  return false;
};

let hasIt = contains(nestedObject, 44);
let doesntHaveIt = contains(nestedObject, "foo");

console.log(hasIt);
console.log(doesntHaveIt);
