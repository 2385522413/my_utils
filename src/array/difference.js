/**
 * 数组取差集 在arr1中存在且不在arr2中存在的元素
 * @param {Array} arr1
 * @param {Array} arr2
 * @returns
 */
export default function difference(arr1, arr2 = []) {
  if (arr1.length === 0) {
    return [];
  }
  if (arr2.length === 0) {
    return arr1.slice();
  }
  const result = arr1.filter((item) => !arr2.includes(item));
  return result;
}
