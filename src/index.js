// 暴露函数相关API
export { apply } from "./function/apply";
export { bind } from "./function/bind";
export { call } from "./function/call";
export { debounce } from "./function/debounce";
export { throttle } from "./function/throttle";

// 暴露数组相关API
export { chunk } from "./array/chunk";
export { concat } from "./array/concat";
export {
  map,
  reduce,
  filter,
  find,
  findIndex,
  every,
  some,
} from "./array/declares";
export { difference } from "./array/difference";
export { drop, dropRight } from "./array/drop";
export { flatten } from "./array/flatten";
export { pull, pullAll } from "./array/pull";
export { slice } from "./array/slice";
export { unique } from "./array/unique";

// 暴露对象相关API
export { clone1, clone2 } from "./object/clone";
export {
  deepClone1,
  deepClone2,
  deepClone3,
  deepClone4,
} from "./object/deepClone";
export { mergeObject } from "./object/mergeObject";
export { myInstanceOf } from "./object/myInstanceOf";
export { newInstance } from "./object/newInstance";

// 暴露字符串相关API
export { reverseString, palindrome, truncate } from "./string/reverseString";

// 暴露事件相关API
export { myAddEventListener } from "./eventBind/myAddEventListener";
export { eventBus } from "./eventBind/eventBus";
export { PubSub } from "./eventBind/myPubSub";
