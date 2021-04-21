import debounce from "./function/debounce";

let input = document.querySelector("input");

// input.onkeydown = function (e) {
//   console.log(e.keyCode);
// };

input.onkeydown = debounce(function (e) {
  console.log(e.keyCode);
}, 1000);
