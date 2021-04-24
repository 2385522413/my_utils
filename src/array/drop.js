/**
 * 得到arr过滤掉左边size个后剩余元素组成的数组，不改变arr
 * @param {Array} arr
 * @param {Number} size
 * @returns
 */
export function drop(arr, size) {
  // return arr.filter((valur, index) => {
  //   return index >= size;
  // });
  return arr.filter((value, index) => index >= size);
}

/**
 * 得到arr过滤掉右边size个后剩余元素组成的数组，不改变arr
 * @param {Array} arr
 * @param {Number} size
 * @returns 
 */
export function dropRight(arr, size) {
  return arr.filter((value, index) => index < arr.length - size);
}
