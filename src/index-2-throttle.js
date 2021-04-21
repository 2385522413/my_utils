import throttle from "./function/throttle.js";

// window.addEventListener("scroll", function () {
//   console.log(Date.now);
// });

window.addEventListener(
  "scroll",
  throttle(function (e) {
    console.log(e);
  }, 500)
);
