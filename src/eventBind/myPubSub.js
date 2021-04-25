export const PubSub = {
  // 订阅编号
  id: 1,
  // 频道与回调保存的容器
  callbacks: {
    // 例子
    // pay: {
    //   token_1: fn,
    //   token_2: fn2,
    // },
  },
};

/**
 * 订阅频道
 * @param {*} channel 频道
 * @param {*} callback 回调
 */
PubSub.subscribe = function (channel, callback) {
  // 为每一个订阅创建唯一的编号
  let token = "token_" + this.id++;
  if (this.callbacks[channel]) {
    // 如果callbacks中有这个频道就直接压入
    this.callbacks[channel][token] = callback;
  } else {
    // 没有就创建一个
    this.callbacks[channel] = {
      [token]: callback,
    };
  }
  // 返回频道订阅的ID
  return token;
};

/**
 * 异步执行 发布消息
 * @param {*} channel 频道
 * @param {*} data 数据
 */
PubSub.publish = function (channel, data) {
  // 获取当前频道所有回调
  if (this.callbacks[channel]) {
    // 启动定时器异步执行任务
    setTimeout(() => {
      // Object.values() 返回对象值的数组
      Object.values(this.callbacks[channel]).forEach((callback) => {
        callback(data);
      });
    }, 0);
  }
};

/**
 * 同步执行 发布消息
 * @param {*} channel
 * @param {*} data
 */
PubSub.publishSync = function (channel, data) {
  // 获取当前频道所有回调
  if (this.callbacks[channel]) {
    // Object.values() 返回对象值的数组
    Object.values(this.callbacks[channel]).forEach((callback) => {
      callback(data);
    });
  }
};

/**
 * 取消订阅
 * 三种情况
 * 1. 没有传值 全删
 * 2. 传的是id 删id对应的频道
 * 3. 传的是频道名 删该频道
 * @param {*} flag
 */
PubSub.unsubscribe = function (flag) {
  if (flag === undefined) {
    // 清空所有订阅
    this.callbacks = {};
  } else if (typeof flag === "string") {
    // 判断是否是 token_ 开头的字符串
    if (flag.indexOf("token_") === 0) {
      // 是订阅id
      // 遍历callbacks 找到具体的token 对象值的数组用find方法找到有flag的对象
      let callbackObj = Object.values(this.callbacks).find((obj) =>
        obj.hasOwnProperty(flag)
      );
      // 判断是不是存在
      if (callbackObj) {
        // 有这个对象
        delete callbackObj[flag];
      }
    } else {
      // 是频道名称
      delete this.callbacks[flag];
    }
  } else {
    throw new Error("如果传入参数, 必须是字符串类型");
  }
};


