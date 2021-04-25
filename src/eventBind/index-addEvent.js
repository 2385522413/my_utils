import myAddEventListener from "./eventBind/myAddEventListener";

myAddEventListener(
  "ul",
  "click",
  function () {
    console.log(this.innerHTML);
  },
  "li"
);
