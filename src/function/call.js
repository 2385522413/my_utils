export default function call(Fn, obj, ...args) {
  if (obj === undefined || obj === null) {
    // 表示全局对象（ES11新增特性）
    obj = globalThis;
  }
  // 为 obj 添加临时的方法
  obj.temp = Fn;
  // 调用 temp 方法
  let result = obj.temp(...args);
  // 删除tempfangfa
  delete obj.temp;
  // 返回执行结果
  return result;
}
