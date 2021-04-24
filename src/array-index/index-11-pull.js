import { pull, pullAll } from "./array/pull";

let arr = [1, 2, 3, 4, 3, 2];
const result = pull(arr, 3, 4, 2);
console.log(arr)
console.log(result);

console.log('**********')

let arr2 = [1, 2, 3, 4, 3, 2];
let arr3 = [3,4,2]
const result2 = pullAll(arr2, arr3);
console.log(arr2)
console.log(result2);
