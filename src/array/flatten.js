/**
 * 取出嵌套数组(多维)中的所有元素放到一个新数组(一维)中
 * 递归方式
 * @param {*} arr
 */
export function flatten(arr) {
  let result = [];
  arr.forEach((item) => {
    // 判断是不是数组
    if (Array.isArray(item)) {
      result = result.concat(flatten(item));
    } else {
      result = result.concat(item);
    }
  });
  return result;
}

export function flatten1(arr) {
  let result = [...arr];
  // 判断result里有没有子数组
  while (result.some((item) => Array.isArray(item))) {
    result = [].concat(...result);
  }
  return result;
}
