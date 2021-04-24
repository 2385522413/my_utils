import mergeObject from "./object/mergeObject";

const obj1 = {
  a: [{ x: 2 }, { y: 4 }],
  b: 1,
  c: "abc",
};

const obj2 = {
  a: [{ x: 3 }, { z: 6 }],
  b: [2, 3, 4],
  c: "ccc",
  d: "d",
};

const obj = mergeObject(obj1, obj2);
console.log(obj);
