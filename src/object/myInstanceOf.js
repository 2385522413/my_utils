/**
 * 自定义instanceof
 * 判断obj是否是Fn类型的实例对象
 * 实现方法：Fn的原型对象是否是obj的原型链上的某个对象
 * @param {Object} obj
 * @param {*} Fn 构造函数
 * @returns
 */
export function myInstanceOf(obj, Fn) {
  // 得到obj的隐式原型对象
  let protoObj = obj.__proto__;
  // 原型对象存在，就遍历原型链
  while (protoObj) {
    // 实例对象的隐式原型 等于 构造函数的显式原型 就返回true
    if (protoObj === Fn.prototype) {
      return true;
    }
    // 不相等就根据原型链一直往上找 直到最后为null
    protoObj = protoObj.__proto__;
  }
  return false;
}
