// 定义事件总线
const eventBus = {
  // 保存eventName类型与回调callback的容器
  callbackObj: {},
};

/**
 * 绑定事件监听，保存回调函数
 * @param {*} eventName 事件名称
 * @param {*} callback 回调函数
 */
eventBus.on = function (eventName, callback) {
  if (this.callbackObj[eventName]) {
    // 如果 callbackObj 属性中存在该类型事件，就压入
    this.callbackObj[eventName].push(callback);
  } else {
    // 如果 callbackObj 属性中不存在该类型事件，就添加成数组
    this.callbackObj[eventName] = [callback];
  }
};

/**
 * 分发事件，触发容器中的该属性eventName的回调函数
 * @param {*} eventName 事件名称
 * @param {*} data 数据
 */
eventBus.emit = function (eventName, data) {
  // 判断callbackObj中有没有回调函数
  if (this.callbackObj[eventName] && this.callbackObj[eventName].length > 0) {
    // 遍历数组
    this.callbackObj[eventName].forEach((callback) => {
      // 执行回调函数
      callback(data);
    });
  }
};

/**
 * 移除事件监听
 * @param {*} eventName 事件名称
 */
eventBus.off = function (eventName) {
  // 若传入了 eventName 事件类型
  if (eventName) {
    // 只是删除 eventName 对应的事件回调
    delete this.callbackObj[eventName];
  } else {
    // 否则全部删除
    this.callbacksObj = {};
  }
};

export default eventBus;
