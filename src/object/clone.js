/**
 * 实现浅拷贝
 * @param {*} target
 * @returns
 */
export function clone1(target) {
  // 判断类型 {} [] null
  if (typeof target === "object" && target !== null) {
    // 判断类型 []
    if (Array.isArray(target)) {
      return [...target];
    } else {
      return { ...target };
    }
  } else {
    return target;
  }
}

/**
 * 实现浅拷贝ES5
 * @param {*} target
 * @returns
 */
export function clone2(target) {
  // 判断类型 {} [] null
  if (typeof target === "object" && target !== null) {
    // 创建一个容器
    const result = Array.isArray(target) ? [] : {};
    // 遍历target数据
    for (let key in target) {
      // 判断当前对象上是否包含该属性
      if (target.hasOwnProperty(key)) {
        // 将属性设置到result结果数据中
        result[key] = target[key];
      }
    }
    return result;
  } else {
    return target;
  }
}
