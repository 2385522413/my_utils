/**
 * 自定义new
 * 创建Fn构造函数的实例对象
 * @param {Function} Fn
 * @param  {...any} args
 * @returns
 */
export default function newInstance(Fn, ...args) {
  // 1. 创建新对象
  // 创建空的object实例对象，作为Fn的实例对象
  const obj = {};
  // 修改新对象的原型对象
  // 将Fn的prototype（显式原型）属性赋值给obj的__proto__（隐式原型）属性
  obj.__proto__ = Fn.prototype;
  // 2. 修改函数内部this指向新对象，并执行
  //
  const result = Fn.call(obj, ...args);
  // 3. 返回新对象
  // return obj
  // 与new保持一直，如果构造函数有返回值，返回值是对象a就返回对象a，否则返回实例对象
  return result instanceof Object ? result : obj;
}
