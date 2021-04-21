/**
 * 封装 concat 方法
 * @param {Array} arr
 * @param  {...any} args
 * @returns
 */
export default function concat(arr, ...args) {
  const result = [...arr];
  args.forEach((item) => {
    // 判断item是否是数组，是数组就要展开入栈
    if (Array.isArray(item)) {
      result.push(...item);
    } else {
      result.push(item);
    }
  });
  return result;
}
