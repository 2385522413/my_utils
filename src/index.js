import { drop, dropRight } from "./array/drop";

let arr = [1, 3, 5, 7, 9];
let result = drop(arr, 3);
console.log(arr, result);

let result2 = dropRight(arr, 3);
console.log(arr, result2);
