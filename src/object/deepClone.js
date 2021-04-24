/**
 * 深拷贝乞丐版 函数(方法)属性会丢失，循环引用会出错
 * @param {*} target
 * @returns
 */
export function deepClone1(target) {
  // 通过数据创建JSON格式的字符串
  let str = JSON.stringify(target);
  // 将 JSON 字符串创建为JS数据
  let data = JSON.parse(str);
  return data;
}

/**
 * 使用递归
 * 解决问题1: 函数属性不会丢失
 * 循环引用会出错
 * @param {*} target
 */
export function deepClone2(target) {
  if (typeof target === "object" && target !== null) {
    // 创建一个容器
    const result = Array.isArray(target) ? [] : {};
    // 遍历target
    for (let key in target) {
      // 检测该属性是否为对象本身的属性（不能拷贝原型对象上的属性）
      if (target.hasOwnProperty(key)) {
        result[key] = deepClone2(target[key]);
      }
    }
    return result;
  } else {
    return target;
  }
}

/**
 * 使用递归
 * 解决问题1: 函数属性不会丢失
 * 解决问题2: 循环引用不会出错
 * @param {*} target
 */
export function deepClone3(target, map = new Map()) {
  if (typeof target === "object" && target !== null) {
    // 克隆数据之前进行判断，查看数据之前是否被克隆过
    let cache = map.get(target);
    if (cache) {
      return cache;
    }
    // 创建一个容器
    const result = Array.isArray(target) ? [] : {};
    // 将新的结果保存到容器中
    map.set(target, result);
    // 遍历target
    for (let key in target) {
      // 检测该属性是否为对象本身的属性（不能拷贝原型对象上的属性）
      if (target.hasOwnProperty(key)) {
        result[key] = deepClone3(target[key], map);
      }
    }
    return result;
  } else {
    return target;
  }
}

/**
 * 最终版 优化遍历性能
 * 数组: while | for | forEach() 优于 for-in | keys()&forEach()
 * 对象: for-in 与 keys()&forEach() 差不多
 * @param {*} target
 */
export function deepClone4(target, map = new Map()) {
  if (typeof target === "object" && target !== null) {
    // 克隆数据之前进行判断，查看数据之前是否被克隆过
    let cache = map.get(target);
    if (cache) {
      return cache;
    }
    // 创建一个容器
    const result = Array.isArray(target) ? [] : {};
    // 将新的结果保存到容器中
    map.set(target, result);

    // 优化遍历
    // 如果目标数据是数组 使用 forEach 循环
    if (Array.isArray(target)) {
      target.forEach((item, index) => {
        result[index] = deepClone4(item, map);
      });
    } else {
      // 如果是对象，获取所有的键名， 再 forEach 遍历
      Object.keys(target).forEach((key) => {
        result[key] = deepClone4(target[key], map);
      });
    }

    // 遍历target
    for (let key in target) {
      // 检测该属性是否为对象本身的属性（不能拷贝原型对象上的属性）
      if (target.hasOwnProperty(key)) {
        result[key] = deepClone4(target[key], map);
      }
    }

    return result;
  } else {
    return target;
  }
}
