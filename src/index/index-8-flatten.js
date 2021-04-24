import { flatten, flatten1 } from "./array/flatten";

const arr = [1, 2, [3, [4, 5], 6], 7, [8, 9]];

const result = flatten(arr);
const result2 = flatten1(arr);
console.log(result);
console.log(result2);
