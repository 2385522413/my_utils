/**
 * 封装map函数
 * @param {Array} arr
 * @param {Function} callback
 * @returns
 */
export function map(arr, callback) {
  // 声明一个空的结果数组
  let result = [];
  // 遍历数组
  for (let i = 0; i < arr.length; i++) {
    // 执行回调，将回调函数执行结果添加到结果数组中
    result.push(callback(arr[i], i));
  }
  return result;
}

/**
 * 封装reduce函数
 * @param {Array} arr
 * @param {Function} callback
 * @param {number} initValue
 * @returns
 */
export function reduce(arr, callback, initValue) {
  // 声明变量
  let result = initValue;
  for (let i = 0; i < arr.length; i++) {
    // 执行回调
    result = callback(result, arr[i]);
  }
  return result;
}

/**
 * 封装filter函数
 * @param {Array} arr 
 * @param {Function} callback 
 * @returns 
 */
export function filter(arr, callback) {
  // 定义空数组接收 回调返回为true的 元素
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let res = callback(arr[i], i);
    // 如果回调结果为真 就压入结果数组中
    if (res) {
      result.push(arr[i]);
    }
  }
  return result;
}

/**
 * 封装find函数
 * @param {Array} arr 
 * @param {Function} callback 
 * @returns 
 */
export function find(arr, callback) {
  for (let i = 0; i < arr.length; i++){
    let res = callback(arr[i], i)
    if (res) {
      // 返回 满足条件的第一个元素
      return arr[i]
    }
  }
  // 如果没有遇到满足条件的就返回undefined
  return undefined
}

/**
 * 封装findIndex函数
 * @param {Array} arr 
 * @param {Function} callback 
 * @returns 
 */
 export function findIndex(arr, callback) {
  for (let i = 0; i < arr.length; i++){
    let res = callback(arr[i], i)
    if (res) {
      // 返回 满足条件的第一个元素的小标
      return i
    }
  }
  // 如果没有遇到满足条件的就返回 -1
  return -1
}

/**
 * 封装every函数
 * @param {Array} arr 
 * @param {Function} callback 
 * @returns 
 */
export function every(arr, callback) {
  for (let i = 0; i < arr.length; i++){
    let res = callback(arr[i])
    // 只要有一个不满足就返回false
    if (!res) {
      return false
    }
  }
  return true
}

/**
 * 封装some函数
 * @param {Array} arr 
 * @param {Function} callback 
 * @returns 
 */
export function some(arr, callback) {
  for (let i = 0; i < arr.length; i++){
    let res = callback(arr[i])
    if (res) {
      // 只要有一个满足就返回 true
      return true
    }
  }
  return false
}