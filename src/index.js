import {
  map,
  reduce,
  filter,
  find,
  findIndex,
  every,
  some,
} from "./array/declares";
// 声明一个数组

const arr = [2, 3, 4, 5, 6, 8];

// const result = map(arr, (item) => {
//   return item * 10
// })
// console.log(result)

// const result = reduce(arr, (res, value) => {
//   return res + value;
// }, 1)

// const result = filter(arr, (item) => item % 2 === 0);

// const result = find(arr, item => item > 5)

// const result2 = find(arr, item => item > 10)

// const result = findIndex(arr, item => item > 5)

// const result2 = findIndex(arr, item => item > 10)

// const result = every(arr, item => item > 0)

// const result2 = every(arr, item => item > 5)

const result = some(arr, (item) => item > 10);

const result2 = some(arr, (item) => item > 5);
console.log(result);
console.log(result2);
