import {
  deepClone1,
  deepClone2,
  deepClone3,
  deepClone4,
} from "./object/deepClone";

const obj = {
  a: 1,
  b: ["e", "f", "g"],
  c: { h: 20 },
  d: function () {},
};

obj.b.push(obj.c);
obj.c.j = obj.b;

const result = deepClone4(obj);

result.c.h = 34;

console.log(obj);
console.log(result);
