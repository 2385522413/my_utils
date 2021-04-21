export default function apply(Fn, obj, arr) {
  if (obj === undefined || obj === null) {
    obj = globalThis;
  }
  // 为obj添加临时方法
  obj.temp = Fn;
  // 执行方法
  let result = obj.temp(...arr);
  // 删除临时属性
  delete obj.temp;
  // 返回结果
  return result;
}
