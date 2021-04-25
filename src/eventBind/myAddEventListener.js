/**
 * 自定义事件监听
 * @param {String} el 父元素选择器
 * @param {String} type 事件类型
 * @param {Function} fn 回调函数
 * @param {String} selector 子元素选择器
 */
export default function myAddEventListener(el, type, fn, selector) {
  // 判断el的类型，获取元素
  if (typeof el === "string") {
    el = document.querySelector(el);
  }
  // 事件判定
  // 若没有传第四个参数（子元素选择器），则给el元素绑定事件
  if (!selector) {
    el.addEventListener(type, fn);
  } else {
    el.addEventListener(type, function(e) {
      // 获取点击的目标事件源
      const target = e.target;
      // 判断选择器与目标元素是否相符
      if (target.matches(selector)) {
        // 相符就执行回调，否则就什么都不做
        fn.call(target,e);
      }
    });
  }
}
