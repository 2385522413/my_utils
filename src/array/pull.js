/**
 * 删除原数组中与value相同的元素，返回所有删除元素的数组
 * @param {Array} arr
 * @param  {...any} values
 */
export function pull(arr, ...values) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    // 判断arr中当前元素是否存在于values数组中
    if (values.includes(arr[i])) {
      // 先将该元素存入result数组中
      result.push(arr[i]);
      // 然后再删除该元素
      arr.splice(i, 1);
      // 因为删除的元素，下标自减
      i--;
    }
  }
  return result;
}

export function pullAll(arr, values) {
  return pull(arr, ...values);
}
