import { clone1, clone2 } from "./object/clone";

const obj = { x: "abc", y: { m: 1 } };

const result = clone1(obj);

result.y.m = 2;
result.x = "2";

console.log(obj);
console.log(result);

const obj2 = { x: "abc", y: { m: 1 } };

const result2 = clone2(obj2);

result2.y.m = 3;

console.log(obj2);
console.log(result2);
