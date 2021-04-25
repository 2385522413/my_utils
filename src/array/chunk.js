/**
 * 将arr拆分成多个size长度的区块，每个区块组成小数组，整体是一个二维数组
 * @param {Array} arr
 * @param {Number} size
 * @returns
 */
export  function chunk(arr, size = 1) {
  if (arr.length === 0) {
    return [];
  }
  let result = [];
  let temp = [];
  arr.forEach((item) => {
    // 这里先推入temp再往temp中推入元素
    // 判断temp元素长度是否为0
    if (temp.length === 0) {
      result.push(temp);
    }
    // 将元素压入到临时数组temp中
    temp.push(item);
    // temp满了就清空
    if (temp.length === size) {
      temp = [];
    }
  });
  return result;
}
