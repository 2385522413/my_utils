import eventBus from "./eventBind/eventBus";

eventBus.on("login", (data) => {
  console.log(data + "用户已经登陆");
});
// 可以为一个事件绑定多个回调函数
eventBus.on("login", (data) => {
  console.log(data + "登陆数据已经写入");
});

// 触发事件
setTimeout(() => {
  eventBus.emit("login", "yk");
}, 2000);

// 绑定 + 触发
eventBus.on("delete", (data) => {
  console.log("delete", data);
});
eventBus.emit("delete", "hehe");

// 绑定+触发+删除+触发
eventBus.on("add", (data) => {
  console.log("add", data);
});
eventBus.emit("add", "YK");
eventBus.off("add");
console.log(eventBus);
eventBus.emit("add", "ykykyk");