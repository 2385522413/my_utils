/**
 * 利用forEach()和indexOf()双重循环效率低
 * @param {Array} arr
 * @returns
 */
export function unique(arr) {
  const result = [];
  arr.forEach((item) => {
    if (result.indexOf(item) === -1) {
      result.push(item);
    }
  });
  return result;
}

/**
 * 利用forEach()和对象容器
 * @param {Array} arr
 * @returns
 */
export function unique1(arr) {
  const result = [];
  const obj = {};
  arr.forEach((item) => {
    if (!obj.hasOwnProperty(item)) {
      obj[item] = true;
      result.push(item);
    }
  });
  return result;
}

/**
 * 利用ES6中Set的特性
 * @param {Array} arr
 * @returns
 */
export function unique2(arr) {
  return [...new Set(arr)];
}
