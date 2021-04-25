import PubSub from "./eventBind/myPubSub";

// 订阅消息
let pId1 = PubSub.subscribe("pay", (data) => {
  console.log("商家接到订单，准备开始制作", data);
});
let pId2 = PubSub.subscribe("pay", (data) => {
  console.log("骑手接到订单，准备开始取餐", data);
});

// 异步发布一个消息
PubSub.publish("pay", {
  title: "盖浇饭",
  price: 18,
  pos: "学校",
});

// 取消订阅
PubSub.unsubscribe(pId1);

console.log(PubSub);
