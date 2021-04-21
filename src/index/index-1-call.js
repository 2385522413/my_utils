import call from "../function/call";
import apply from "../function/apply";
import bind from "../function/bind";

console.log("****test call ****");

function add(a, b) {
  console.log(this);
  return a + b + this.c;
}
let obj = {
  c: 521,
};
window.c = 1314;

console.log(call(add, obj, 10, 20))
console.log(call(add, null, 30, 40))

console.log(obj)
console.log("****test apply****");
console.log(apply(add, obj, [10, 20]))
console.log(apply(add, null, [30, 40]))

console.log(obj)
console.log("****test bind****");
let fn = bind(add, obj, 10, 20);
console.log(fn());

let fn2 = bind(add, obj);
console.log(fn2(10, 20));
