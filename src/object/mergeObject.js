/**
 * 合并多个对象，返回一个合并后的对象，不改变原对象
 * @param  {...any} objs 
 * @returns 
 */
export function mergeObject(...objs) {
  const result = {};

  // 遍历objs得到一个个obj
  objs.forEach((obj) => {
    // 遍历obj的键得到一个个key
    Object.keys(obj).forEach((key) => {
      // 判断result对象中有没有key值属性
      if (!result.hasOwnProperty(key)) {
        // 如果没有，就将obj中的key值属性添加到result中
        result[key] = obj[key];
      } else {
        // 如果result有了，就合并属性
        result[key] = [].concat(result[key], obj[key]);
      }
    });
  });

  return result;
}
