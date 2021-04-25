/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ykUtils"] = factory();
	else
		root["ykUtils"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/array/chunk.js":
/*!****************************!*\
  !*** ./src/array/chunk.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"chunk\": () => (/* binding */ chunk)\n/* harmony export */ });\n/**\r\n * 将arr拆分成多个size长度的区块，每个区块组成小数组，整体是一个二维数组\r\n * @param {Array} arr\r\n * @param {Number} size\r\n * @returns\r\n */\r\nfunction chunk(arr, size = 1) {\r\n  if (arr.length === 0) {\r\n    return [];\r\n  }\r\n  let result = [];\r\n  let temp = [];\r\n  arr.forEach((item) => {\r\n    // 这里先推入temp再往temp中推入元素\r\n    // 判断temp元素长度是否为0\r\n    if (temp.length === 0) {\r\n      result.push(temp);\r\n    }\r\n    // 将元素压入到临时数组temp中\r\n    temp.push(item);\r\n    // temp满了就清空\r\n    if (temp.length === size) {\r\n      temp = [];\r\n    }\r\n  });\r\n  return result;\r\n}\r\n\n\n//# sourceURL=webpack://ykUtils/./src/array/chunk.js?");

/***/ }),

/***/ "./src/array/concat.js":
/*!*****************************!*\
  !*** ./src/array/concat.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"concat\": () => (/* binding */ concat)\n/* harmony export */ });\n/**\r\n * 封装 concat 方法\r\n * @param {Array} arr\r\n * @param  {...any} args\r\n * @returns\r\n */\r\nfunction concat(arr, ...args) {\r\n  const result = [...arr];\r\n  args.forEach((item) => {\r\n    // 判断item是否是数组，是数组就要展开入栈\r\n    if (Array.isArray(item)) {\r\n      result.push(...item);\r\n    } else {\r\n      result.push(item);\r\n    }\r\n  });\r\n  return result;\r\n}\r\n\n\n//# sourceURL=webpack://ykUtils/./src/array/concat.js?");

/***/ }),

/***/ "./src/array/declares.js":
/*!*******************************!*\
  !*** ./src/array/declares.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"map\": () => (/* binding */ map),\n/* harmony export */   \"reduce\": () => (/* binding */ reduce),\n/* harmony export */   \"filter\": () => (/* binding */ filter),\n/* harmony export */   \"find\": () => (/* binding */ find),\n/* harmony export */   \"findIndex\": () => (/* binding */ findIndex),\n/* harmony export */   \"every\": () => (/* binding */ every),\n/* harmony export */   \"some\": () => (/* binding */ some)\n/* harmony export */ });\n/**\r\n * 封装map函数\r\n * @param {Array} arr\r\n * @param {Function} callback\r\n * @returns\r\n */\r\nfunction map(arr, callback) {\r\n  // 声明一个空的结果数组\r\n  let result = [];\r\n  // 遍历数组\r\n  for (let i = 0; i < arr.length; i++) {\r\n    // 执行回调，将回调函数执行结果添加到结果数组中\r\n    result.push(callback(arr[i], i));\r\n  }\r\n  return result;\r\n}\r\n\r\n/**\r\n * 封装reduce函数\r\n * @param {Array} arr\r\n * @param {Function} callback\r\n * @param {number} initValue\r\n * @returns\r\n */\r\nfunction reduce(arr, callback, initValue) {\r\n  // 声明变量\r\n  let result = initValue;\r\n  for (let i = 0; i < arr.length; i++) {\r\n    // 执行回调\r\n    result = callback(result, arr[i]);\r\n  }\r\n  return result;\r\n}\r\n\r\n/**\r\n * 封装filter函数\r\n * @param {Array} arr \r\n * @param {Function} callback \r\n * @returns \r\n */\r\nfunction filter(arr, callback) {\r\n  // 定义空数组接收 回调返回为true的 元素\r\n  let result = [];\r\n  for (let i = 0; i < arr.length; i++) {\r\n    let res = callback(arr[i], i);\r\n    // 如果回调结果为真 就压入结果数组中\r\n    if (res) {\r\n      result.push(arr[i]);\r\n    }\r\n  }\r\n  return result;\r\n}\r\n\r\n/**\r\n * 封装find函数\r\n * @param {Array} arr \r\n * @param {Function} callback \r\n * @returns \r\n */\r\nfunction find(arr, callback) {\r\n  for (let i = 0; i < arr.length; i++){\r\n    let res = callback(arr[i], i)\r\n    if (res) {\r\n      // 返回 满足条件的第一个元素\r\n      return arr[i]\r\n    }\r\n  }\r\n  // 如果没有遇到满足条件的就返回undefined\r\n  return undefined\r\n}\r\n\r\n/**\r\n * 封装findIndex函数\r\n * @param {Array} arr \r\n * @param {Function} callback \r\n * @returns \r\n */\r\n function findIndex(arr, callback) {\r\n  for (let i = 0; i < arr.length; i++){\r\n    let res = callback(arr[i], i)\r\n    if (res) {\r\n      // 返回 满足条件的第一个元素的小标\r\n      return i\r\n    }\r\n  }\r\n  // 如果没有遇到满足条件的就返回 -1\r\n  return -1\r\n}\r\n\r\n/**\r\n * 封装every函数\r\n * @param {Array} arr \r\n * @param {Function} callback \r\n * @returns \r\n */\r\nfunction every(arr, callback) {\r\n  for (let i = 0; i < arr.length; i++){\r\n    let res = callback(arr[i])\r\n    // 只要有一个不满足就返回false\r\n    if (!res) {\r\n      return false\r\n    }\r\n  }\r\n  return true\r\n}\r\n\r\n/**\r\n * 封装some函数\r\n * @param {Array} arr \r\n * @param {Function} callback \r\n * @returns \r\n */\r\nfunction some(arr, callback) {\r\n  for (let i = 0; i < arr.length; i++){\r\n    let res = callback(arr[i])\r\n    if (res) {\r\n      // 只要有一个满足就返回 true\r\n      return true\r\n    }\r\n  }\r\n  return false\r\n}\n\n//# sourceURL=webpack://ykUtils/./src/array/declares.js?");

/***/ }),

/***/ "./src/array/difference.js":
/*!*********************************!*\
  !*** ./src/array/difference.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"difference\": () => (/* binding */ difference)\n/* harmony export */ });\n/**\r\n * 数组取差集 在arr1中存在且不在arr2中存在的元素\r\n * @param {Array} arr1\r\n * @param {Array} arr2\r\n * @returns\r\n */\r\nfunction difference(arr1, arr2 = []) {\r\n  if (arr1.length === 0) {\r\n    return [];\r\n  }\r\n  if (arr2.length === 0) {\r\n    return arr1.slice();\r\n  }\r\n  const result = arr1.filter((item) => !arr2.includes(item));\r\n  return result;\r\n}\r\n\n\n//# sourceURL=webpack://ykUtils/./src/array/difference.js?");

/***/ }),

/***/ "./src/array/drop.js":
/*!***************************!*\
  !*** ./src/array/drop.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"drop\": () => (/* binding */ drop),\n/* harmony export */   \"dropRight\": () => (/* binding */ dropRight)\n/* harmony export */ });\n/**\r\n * 得到arr过滤掉左边size个后剩余元素组成的数组，不改变arr\r\n * @param {Array} arr\r\n * @param {Number} size\r\n * @returns\r\n */\r\nfunction drop(arr, size) {\r\n  // return arr.filter((valur, index) => {\r\n  //   return index >= size;\r\n  // });\r\n  return arr.filter((value, index) => index >= size);\r\n}\r\n\r\n/**\r\n * 得到arr过滤掉右边size个后剩余元素组成的数组，不改变arr\r\n * @param {Array} arr\r\n * @param {Number} size\r\n * @returns \r\n */\r\nfunction dropRight(arr, size) {\r\n  return arr.filter((value, index) => index < arr.length - size);\r\n}\r\n\n\n//# sourceURL=webpack://ykUtils/./src/array/drop.js?");

/***/ }),

/***/ "./src/array/flatten.js":
/*!******************************!*\
  !*** ./src/array/flatten.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"flatten\": () => (/* binding */ flatten),\n/* harmony export */   \"flatten1\": () => (/* binding */ flatten1)\n/* harmony export */ });\n/**\r\n * 取出嵌套数组(多维)中的所有元素放到一个新数组(一维)中\r\n * 递归方式\r\n * @param {*} arr\r\n */\r\nfunction flatten(arr) {\r\n  let result = [];\r\n  arr.forEach((item) => {\r\n    // 判断是不是数组\r\n    if (Array.isArray(item)) {\r\n      result = result.concat(flatten(item));\r\n    } else {\r\n      result = result.concat(item);\r\n    }\r\n  });\r\n  return result;\r\n}\r\n\r\nfunction flatten1(arr) {\r\n  let result = [...arr];\r\n  // 判断result里有没有子数组\r\n  while (result.some((item) => Array.isArray(item))) {\r\n    result = [].concat(...result);\r\n  }\r\n  return result;\r\n}\r\n\n\n//# sourceURL=webpack://ykUtils/./src/array/flatten.js?");

/***/ }),

/***/ "./src/array/pull.js":
/*!***************************!*\
  !*** ./src/array/pull.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pull\": () => (/* binding */ pull),\n/* harmony export */   \"pullAll\": () => (/* binding */ pullAll)\n/* harmony export */ });\n/**\r\n * 删除原数组中与value相同的元素，返回所有删除元素的数组\r\n * @param {Array} arr\r\n * @param  {...any} values\r\n */\r\nfunction pull(arr, ...values) {\r\n  const result = [];\r\n  for (let i = 0; i < arr.length; i++) {\r\n    // 判断arr中当前元素是否存在于values数组中\r\n    if (values.includes(arr[i])) {\r\n      // 先将该元素存入result数组中\r\n      result.push(arr[i]);\r\n      // 然后再删除该元素\r\n      arr.splice(i, 1);\r\n      // 因为删除的元素，下标自减\r\n      i--;\r\n    }\r\n  }\r\n  return result;\r\n}\r\n\r\nfunction pullAll(arr, values) {\r\n  return pull(arr, ...values);\r\n}\r\n\n\n//# sourceURL=webpack://ykUtils/./src/array/pull.js?");

/***/ }),

/***/ "./src/array/slice.js":
/*!****************************!*\
  !*** ./src/array/slice.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"slice\": () => (/* binding */ slice)\n/* harmony export */ });\nfunction slice(arr, begin, end) {\r\n  if (arr.length === 0) {\r\n    return [];\r\n  }\r\n  begin = begin || 0;\r\n  if (begin >= arr.length) {\r\n    return [];\r\n  }\r\n  end = end || arr.length;\r\n  if (end > arr.length) {\r\n    end = arr.length;\r\n  }\r\n  if (end < begin) {\r\n    return [];\r\n  }\r\n  const result = [];\r\n  for (let i = begin; i < end; i++) {\r\n    result.push(arr[i]);\r\n  }\r\n  return result;\r\n}\r\n\n\n//# sourceURL=webpack://ykUtils/./src/array/slice.js?");

/***/ }),

/***/ "./src/array/unique.js":
/*!*****************************!*\
  !*** ./src/array/unique.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"unique\": () => (/* binding */ unique),\n/* harmony export */   \"unique1\": () => (/* binding */ unique1),\n/* harmony export */   \"unique2\": () => (/* binding */ unique2)\n/* harmony export */ });\n/**\r\n * 利用forEach()和indexOf()双重循环效率低\r\n * @param {Array} arr\r\n * @returns\r\n */\r\nfunction unique(arr) {\r\n  const result = [];\r\n  arr.forEach((item) => {\r\n    if (result.indexOf(item) === -1) {\r\n      result.push(item);\r\n    }\r\n  });\r\n  return result;\r\n}\r\n\r\n/**\r\n * 利用forEach()和对象容器\r\n * @param {Array} arr\r\n * @returns\r\n */\r\nfunction unique1(arr) {\r\n  const result = [];\r\n  const obj = {};\r\n  arr.forEach((item) => {\r\n    if (!obj.hasOwnProperty(item)) {\r\n      obj[item] = true;\r\n      result.push(item);\r\n    }\r\n  });\r\n  return result;\r\n}\r\n\r\n/**\r\n * 利用ES6中Set的特性\r\n * @param {Array} arr\r\n * @returns\r\n */\r\nfunction unique2(arr) {\r\n  return [...new Set(arr)];\r\n}\r\n\n\n//# sourceURL=webpack://ykUtils/./src/array/unique.js?");

/***/ }),

/***/ "./src/eventBind/eventBus.js":
/*!***********************************!*\
  !*** ./src/eventBind/eventBus.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"eventBus\": () => (/* binding */ eventBus)\n/* harmony export */ });\n// 定义事件总线\r\nconst eventBus = {\r\n  // 保存eventName类型与回调callback的容器\r\n  callbackObj: {},\r\n};\r\n\r\n/**\r\n * 绑定事件监听，保存回调函数\r\n * @param {*} eventName 事件名称\r\n * @param {*} callback 回调函数\r\n */\r\neventBus.on = function (eventName, callback) {\r\n  if (this.callbackObj[eventName]) {\r\n    // 如果 callbackObj 属性中存在该类型事件，就压入\r\n    this.callbackObj[eventName].push(callback);\r\n  } else {\r\n    // 如果 callbackObj 属性中不存在该类型事件，就添加成数组\r\n    this.callbackObj[eventName] = [callback];\r\n  }\r\n};\r\n\r\n/**\r\n * 分发事件，触发容器中的该属性eventName的回调函数\r\n * @param {*} eventName 事件名称\r\n * @param {*} data 数据\r\n */\r\neventBus.emit = function (eventName, data) {\r\n  // 判断callbackObj中有没有回调函数\r\n  if (this.callbackObj[eventName] && this.callbackObj[eventName].length > 0) {\r\n    // 遍历数组\r\n    this.callbackObj[eventName].forEach((callback) => {\r\n      // 执行回调函数\r\n      callback(data);\r\n    });\r\n  }\r\n};\r\n\r\n/**\r\n * 移除事件监听\r\n * @param {*} eventName 事件名称\r\n */\r\neventBus.off = function (eventName) {\r\n  // 若传入了 eventName 事件类型\r\n  if (eventName) {\r\n    // 只是删除 eventName 对应的事件回调\r\n    delete this.callbackObj[eventName];\r\n  } else {\r\n    // 否则全部删除\r\n    this.callbacksObj = {};\r\n  }\r\n};\r\n\r\n\n\n//# sourceURL=webpack://ykUtils/./src/eventBind/eventBus.js?");

/***/ }),

/***/ "./src/eventBind/myAddEventListener.js":
/*!*********************************************!*\
  !*** ./src/eventBind/myAddEventListener.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"myAddEventListener\": () => (/* binding */ myAddEventListener)\n/* harmony export */ });\n/**\r\n * 自定义事件监听\r\n * @param {String} el 父元素选择器\r\n * @param {String} type 事件类型\r\n * @param {Function} fn 回调函数\r\n * @param {String} selector 子元素选择器\r\n */\r\nfunction myAddEventListener(el, type, fn, selector) {\r\n  // 判断el的类型，获取元素\r\n  if (typeof el === \"string\") {\r\n    el = document.querySelector(el);\r\n  }\r\n  // 事件判定\r\n  // 若没有传第四个参数（子元素选择器），则给el元素绑定事件\r\n  if (!selector) {\r\n    el.addEventListener(type, fn);\r\n  } else {\r\n    el.addEventListener(type, function(e) {\r\n      // 获取点击的目标事件源\r\n      const target = e.target;\r\n      // 判断选择器与目标元素是否相符\r\n      if (target.matches(selector)) {\r\n        // 相符就执行回调，否则就什么都不做\r\n        fn.call(target,e);\r\n      }\r\n    });\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://ykUtils/./src/eventBind/myAddEventListener.js?");

/***/ }),

/***/ "./src/eventBind/myPubSub.js":
/*!***********************************!*\
  !*** ./src/eventBind/myPubSub.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PubSub\": () => (/* binding */ PubSub)\n/* harmony export */ });\nconst PubSub = {\r\n  // 订阅编号\r\n  id: 1,\r\n  // 频道与回调保存的容器\r\n  callbacks: {\r\n    // 例子\r\n    // pay: {\r\n    //   token_1: fn,\r\n    //   token_2: fn2,\r\n    // },\r\n  },\r\n};\r\n\r\n/**\r\n * 订阅频道\r\n * @param {*} channel 频道\r\n * @param {*} callback 回调\r\n */\r\nPubSub.subscribe = function (channel, callback) {\r\n  // 为每一个订阅创建唯一的编号\r\n  let token = \"token_\" + this.id++;\r\n  if (this.callbacks[channel]) {\r\n    // 如果callbacks中有这个频道就直接压入\r\n    this.callbacks[channel][token] = callback;\r\n  } else {\r\n    // 没有就创建一个\r\n    this.callbacks[channel] = {\r\n      [token]: callback,\r\n    };\r\n  }\r\n  // 返回频道订阅的ID\r\n  return token;\r\n};\r\n\r\n/**\r\n * 异步执行 发布消息\r\n * @param {*} channel 频道\r\n * @param {*} data 数据\r\n */\r\nPubSub.publish = function (channel, data) {\r\n  // 获取当前频道所有回调\r\n  if (this.callbacks[channel]) {\r\n    // 启动定时器异步执行任务\r\n    setTimeout(() => {\r\n      // Object.values() 返回对象值的数组\r\n      Object.values(this.callbacks[channel]).forEach((callback) => {\r\n        callback(data);\r\n      });\r\n    }, 0);\r\n  }\r\n};\r\n\r\n/**\r\n * 同步执行 发布消息\r\n * @param {*} channel\r\n * @param {*} data\r\n */\r\nPubSub.publishSync = function (channel, data) {\r\n  // 获取当前频道所有回调\r\n  if (this.callbacks[channel]) {\r\n    // Object.values() 返回对象值的数组\r\n    Object.values(this.callbacks[channel]).forEach((callback) => {\r\n      callback(data);\r\n    });\r\n  }\r\n};\r\n\r\n/**\r\n * 取消订阅\r\n * 三种情况\r\n * 1. 没有传值 全删\r\n * 2. 传的是id 删id对应的频道\r\n * 3. 传的是频道名 删该频道\r\n * @param {*} flag\r\n */\r\nPubSub.unsubscribe = function (flag) {\r\n  if (flag === undefined) {\r\n    // 清空所有订阅\r\n    this.callbacks = {};\r\n  } else if (typeof flag === \"string\") {\r\n    // 判断是否是 token_ 开头的字符串\r\n    if (flag.indexOf(\"token_\") === 0) {\r\n      // 是订阅id\r\n      // 遍历callbacks 找到具体的token 对象值的数组用find方法找到有flag的对象\r\n      let callbackObj = Object.values(this.callbacks).find((obj) =>\r\n        obj.hasOwnProperty(flag)\r\n      );\r\n      // 判断是不是存在\r\n      if (callbackObj) {\r\n        // 有这个对象\r\n        delete callbackObj[flag];\r\n      }\r\n    } else {\r\n      // 是频道名称\r\n      delete this.callbacks[flag];\r\n    }\r\n  } else {\r\n    throw new Error(\"如果传入参数, 必须是字符串类型\");\r\n  }\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://ykUtils/./src/eventBind/myPubSub.js?");

/***/ }),

/***/ "./src/function/apply.js":
/*!*******************************!*\
  !*** ./src/function/apply.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"apply\": () => (/* binding */ apply)\n/* harmony export */ });\nfunction apply(Fn, obj, arr) {\r\n  if (obj === undefined || obj === null) {\r\n    obj = globalThis;\r\n  }\r\n  // 为obj添加临时方法\r\n  obj.temp = Fn;\r\n  // 执行方法\r\n  let result = obj.temp(...arr);\r\n  // 删除临时属性\r\n  delete obj.temp;\r\n  // 返回结果\r\n  return result;\r\n}\r\n\n\n//# sourceURL=webpack://ykUtils/./src/function/apply.js?");

/***/ }),

/***/ "./src/function/bind.js":
/*!******************************!*\
  !*** ./src/function/bind.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"bind\": () => (/* binding */ bind)\n/* harmony export */ });\n/* harmony import */ var _call_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./call.js */ \"./src/function/call.js\");\n\r\n\r\nfunction bind(Fn, obj, ...args) {\r\n  // 返回一个新的函数\r\n  return function (...args2) {\r\n    // 执行 call 函数、\r\n    return (0,_call_js__WEBPACK_IMPORTED_MODULE_0__.call)(Fn, obj, ...args, ...args2);\r\n  };\r\n}\r\n\n\n//# sourceURL=webpack://ykUtils/./src/function/bind.js?");

/***/ }),

/***/ "./src/function/call.js":
/*!******************************!*\
  !*** ./src/function/call.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"call\": () => (/* binding */ call)\n/* harmony export */ });\nfunction call(Fn, obj, ...args) {\r\n  if (obj === undefined || obj === null) {\r\n    // 表示全局对象（ES11新增特性）\r\n    obj = globalThis;\r\n  }\r\n  // 为 obj 添加临时的方法\r\n  obj.temp = Fn;\r\n  // 调用 temp 方法\r\n  let result = obj.temp(...args);\r\n  // 删除tempfangfa\r\n  delete obj.temp;\r\n  // 返回执行结果\r\n  return result;\r\n}\r\n\n\n//# sourceURL=webpack://ykUtils/./src/function/call.js?");

/***/ }),

/***/ "./src/function/debounce.js":
/*!**********************************!*\
  !*** ./src/function/debounce.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"debounce\": () => (/* binding */ debounce)\n/* harmony export */ });\n/**\r\n * 实现函数防抖\r\n * 该函数会从上一次被调用后，延迟 wait 毫秒后调用 callback\r\n * @param {*} callback \r\n * @param {*} time \r\n * @returns \r\n */\r\n function debounce(callback, time) {\r\n  // 定时器变量\r\n  let timeId = undefined;\r\n  // 返回一个函数\r\n  return function (e) {\r\n    if (timeId !== undefined) {\r\n      // 清空定时器\r\n      clearTimeout(timeId);\r\n    }\r\n\r\n    // 启动定时器\r\n    timeId = setTimeout(() => {\r\n      // 执行回调\r\n      callback.call(this, e);\r\n      // 执行完了重置id\r\n      timeId = undefined;\r\n    }, time);\r\n  };\r\n}\n\n//# sourceURL=webpack://ykUtils/./src/function/debounce.js?");

/***/ }),

/***/ "./src/function/throttle.js":
/*!**********************************!*\
  !*** ./src/function/throttle.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"throttle\": () => (/* binding */ throttle)\n/* harmony export */ });\n/**\r\n * 实现函数节流\r\n * @param {*} callback \r\n * @param {*} wait \r\n * @returns \r\n */\r\nfunction throttle(callback, wait) {\r\n  // 定义开始时间\r\n  let start = 0;\r\n  // 返回结果是一个函数\r\n  return function (e) {\r\n    // 获取当前时间戳\r\n    let now = Date.now();\r\n    // 判断\r\n    if (now - start >= wait) {\r\n      // 若满足条件，则执行回调函数\r\n      callback.call(this, e);\r\n      // 修改开始时间\r\n      start = now\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://ykUtils/./src/function/throttle.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"apply\": () => (/* reexport safe */ _function_apply__WEBPACK_IMPORTED_MODULE_0__.apply),\n/* harmony export */   \"bind\": () => (/* reexport safe */ _function_bind__WEBPACK_IMPORTED_MODULE_1__.bind),\n/* harmony export */   \"call\": () => (/* reexport safe */ _function_call__WEBPACK_IMPORTED_MODULE_2__.call),\n/* harmony export */   \"debounce\": () => (/* reexport safe */ _function_debounce__WEBPACK_IMPORTED_MODULE_3__.debounce),\n/* harmony export */   \"throttle\": () => (/* reexport safe */ _function_throttle__WEBPACK_IMPORTED_MODULE_4__.throttle),\n/* harmony export */   \"chunk\": () => (/* reexport safe */ _array_chunk__WEBPACK_IMPORTED_MODULE_5__.chunk),\n/* harmony export */   \"concat\": () => (/* reexport safe */ _array_concat__WEBPACK_IMPORTED_MODULE_6__.concat),\n/* harmony export */   \"map\": () => (/* reexport safe */ _array_declares__WEBPACK_IMPORTED_MODULE_7__.map),\n/* harmony export */   \"reduce\": () => (/* reexport safe */ _array_declares__WEBPACK_IMPORTED_MODULE_7__.reduce),\n/* harmony export */   \"filter\": () => (/* reexport safe */ _array_declares__WEBPACK_IMPORTED_MODULE_7__.filter),\n/* harmony export */   \"find\": () => (/* reexport safe */ _array_declares__WEBPACK_IMPORTED_MODULE_7__.find),\n/* harmony export */   \"findIndex\": () => (/* reexport safe */ _array_declares__WEBPACK_IMPORTED_MODULE_7__.findIndex),\n/* harmony export */   \"every\": () => (/* reexport safe */ _array_declares__WEBPACK_IMPORTED_MODULE_7__.every),\n/* harmony export */   \"some\": () => (/* reexport safe */ _array_declares__WEBPACK_IMPORTED_MODULE_7__.some),\n/* harmony export */   \"difference\": () => (/* reexport safe */ _array_difference__WEBPACK_IMPORTED_MODULE_8__.difference),\n/* harmony export */   \"drop\": () => (/* reexport safe */ _array_drop__WEBPACK_IMPORTED_MODULE_9__.drop),\n/* harmony export */   \"dropRight\": () => (/* reexport safe */ _array_drop__WEBPACK_IMPORTED_MODULE_9__.dropRight),\n/* harmony export */   \"flatten\": () => (/* reexport safe */ _array_flatten__WEBPACK_IMPORTED_MODULE_10__.flatten),\n/* harmony export */   \"pull\": () => (/* reexport safe */ _array_pull__WEBPACK_IMPORTED_MODULE_11__.pull),\n/* harmony export */   \"pullAll\": () => (/* reexport safe */ _array_pull__WEBPACK_IMPORTED_MODULE_11__.pullAll),\n/* harmony export */   \"slice\": () => (/* reexport safe */ _array_slice__WEBPACK_IMPORTED_MODULE_12__.slice),\n/* harmony export */   \"unique\": () => (/* reexport safe */ _array_unique__WEBPACK_IMPORTED_MODULE_13__.unique),\n/* harmony export */   \"clone1\": () => (/* reexport safe */ _object_clone__WEBPACK_IMPORTED_MODULE_14__.clone1),\n/* harmony export */   \"clone2\": () => (/* reexport safe */ _object_clone__WEBPACK_IMPORTED_MODULE_14__.clone2),\n/* harmony export */   \"deepClone1\": () => (/* reexport safe */ _object_deepClone__WEBPACK_IMPORTED_MODULE_15__.deepClone1),\n/* harmony export */   \"deepClone2\": () => (/* reexport safe */ _object_deepClone__WEBPACK_IMPORTED_MODULE_15__.deepClone2),\n/* harmony export */   \"deepClone3\": () => (/* reexport safe */ _object_deepClone__WEBPACK_IMPORTED_MODULE_15__.deepClone3),\n/* harmony export */   \"deepClone4\": () => (/* reexport safe */ _object_deepClone__WEBPACK_IMPORTED_MODULE_15__.deepClone4),\n/* harmony export */   \"mergeObject\": () => (/* reexport safe */ _object_mergeObject__WEBPACK_IMPORTED_MODULE_16__.mergeObject),\n/* harmony export */   \"myInstanceOf\": () => (/* reexport safe */ _object_myInstanceOf__WEBPACK_IMPORTED_MODULE_17__.myInstanceOf),\n/* harmony export */   \"newInstance\": () => (/* reexport safe */ _object_newInstance__WEBPACK_IMPORTED_MODULE_18__.newInstance),\n/* harmony export */   \"reverseString\": () => (/* reexport safe */ _string_reverseString__WEBPACK_IMPORTED_MODULE_19__.reverseString),\n/* harmony export */   \"palindrome\": () => (/* reexport safe */ _string_reverseString__WEBPACK_IMPORTED_MODULE_19__.palindrome),\n/* harmony export */   \"truncate\": () => (/* reexport safe */ _string_reverseString__WEBPACK_IMPORTED_MODULE_19__.truncate),\n/* harmony export */   \"myAddEventListener\": () => (/* reexport safe */ _eventBind_myAddEventListener__WEBPACK_IMPORTED_MODULE_20__.myAddEventListener),\n/* harmony export */   \"eventBus\": () => (/* reexport safe */ _eventBind_eventBus__WEBPACK_IMPORTED_MODULE_21__.eventBus),\n/* harmony export */   \"PubSub\": () => (/* reexport safe */ _eventBind_myPubSub__WEBPACK_IMPORTED_MODULE_22__.PubSub)\n/* harmony export */ });\n/* harmony import */ var _function_apply__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./function/apply */ \"./src/function/apply.js\");\n/* harmony import */ var _function_bind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./function/bind */ \"./src/function/bind.js\");\n/* harmony import */ var _function_call__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./function/call */ \"./src/function/call.js\");\n/* harmony import */ var _function_debounce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./function/debounce */ \"./src/function/debounce.js\");\n/* harmony import */ var _function_throttle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./function/throttle */ \"./src/function/throttle.js\");\n/* harmony import */ var _array_chunk__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./array/chunk */ \"./src/array/chunk.js\");\n/* harmony import */ var _array_concat__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./array/concat */ \"./src/array/concat.js\");\n/* harmony import */ var _array_declares__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./array/declares */ \"./src/array/declares.js\");\n/* harmony import */ var _array_difference__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./array/difference */ \"./src/array/difference.js\");\n/* harmony import */ var _array_drop__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./array/drop */ \"./src/array/drop.js\");\n/* harmony import */ var _array_flatten__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./array/flatten */ \"./src/array/flatten.js\");\n/* harmony import */ var _array_pull__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./array/pull */ \"./src/array/pull.js\");\n/* harmony import */ var _array_slice__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./array/slice */ \"./src/array/slice.js\");\n/* harmony import */ var _array_unique__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./array/unique */ \"./src/array/unique.js\");\n/* harmony import */ var _object_clone__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./object/clone */ \"./src/object/clone.js\");\n/* harmony import */ var _object_deepClone__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./object/deepClone */ \"./src/object/deepClone.js\");\n/* harmony import */ var _object_mergeObject__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./object/mergeObject */ \"./src/object/mergeObject.js\");\n/* harmony import */ var _object_myInstanceOf__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./object/myInstanceOf */ \"./src/object/myInstanceOf.js\");\n/* harmony import */ var _object_newInstance__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./object/newInstance */ \"./src/object/newInstance.js\");\n/* harmony import */ var _string_reverseString__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./string/reverseString */ \"./src/string/reverseString.js\");\n/* harmony import */ var _eventBind_myAddEventListener__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./eventBind/myAddEventListener */ \"./src/eventBind/myAddEventListener.js\");\n/* harmony import */ var _eventBind_eventBus__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./eventBind/eventBus */ \"./src/eventBind/eventBus.js\");\n/* harmony import */ var _eventBind_myPubSub__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./eventBind/myPubSub */ \"./src/eventBind/myPubSub.js\");\n// 暴露函数相关API\r\n\r\n\r\n\r\n\r\n\r\n\r\n// 暴露数组相关API\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// 暴露对象相关API\r\n\r\n\r\n\r\n\r\n\r\n\r\n// 暴露字符串相关API\r\n\r\n\r\n// 暴露事件相关API\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://ykUtils/./src/index.js?");

/***/ }),

/***/ "./src/object/clone.js":
/*!*****************************!*\
  !*** ./src/object/clone.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clone1\": () => (/* binding */ clone1),\n/* harmony export */   \"clone2\": () => (/* binding */ clone2)\n/* harmony export */ });\n/**\r\n * 实现浅拷贝\r\n * @param {*} target\r\n * @returns\r\n */\r\nfunction clone1(target) {\r\n  // 判断类型 {} [] null\r\n  if (typeof target === \"object\" && target !== null) {\r\n    // 判断类型 []\r\n    if (Array.isArray(target)) {\r\n      return [...target];\r\n    } else {\r\n      return { ...target };\r\n    }\r\n  } else {\r\n    return target;\r\n  }\r\n}\r\n\r\n/**\r\n * 实现浅拷贝ES5\r\n * @param {*} target\r\n * @returns\r\n */\r\nfunction clone2(target) {\r\n  // 判断类型 {} [] null\r\n  if (typeof target === \"object\" && target !== null) {\r\n    // 创建一个容器\r\n    const result = Array.isArray(target) ? [] : {};\r\n    // 遍历target数据\r\n    for (let key in target) {\r\n      // 判断当前对象上是否包含该属性\r\n      if (target.hasOwnProperty(key)) {\r\n        // 将属性设置到result结果数据中\r\n        result[key] = target[key];\r\n      }\r\n    }\r\n    return result;\r\n  } else {\r\n    return target;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://ykUtils/./src/object/clone.js?");

/***/ }),

/***/ "./src/object/deepClone.js":
/*!*********************************!*\
  !*** ./src/object/deepClone.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"deepClone1\": () => (/* binding */ deepClone1),\n/* harmony export */   \"deepClone2\": () => (/* binding */ deepClone2),\n/* harmony export */   \"deepClone3\": () => (/* binding */ deepClone3),\n/* harmony export */   \"deepClone4\": () => (/* binding */ deepClone4)\n/* harmony export */ });\n/**\r\n * 深拷贝乞丐版 函数(方法)属性会丢失，循环引用会出错\r\n * @param {*} target\r\n * @returns\r\n */\r\nfunction deepClone1(target) {\r\n  // 通过数据创建JSON格式的字符串\r\n  let str = JSON.stringify(target);\r\n  // 将 JSON 字符串创建为JS数据\r\n  let data = JSON.parse(str);\r\n  return data;\r\n}\r\n\r\n/**\r\n * 使用递归\r\n * 解决问题1: 函数属性不会丢失\r\n * 循环引用会出错\r\n * @param {*} target\r\n */\r\nfunction deepClone2(target) {\r\n  if (typeof target === \"object\" && target !== null) {\r\n    // 创建一个容器\r\n    const result = Array.isArray(target) ? [] : {};\r\n    // 遍历target\r\n    for (let key in target) {\r\n      // 检测该属性是否为对象本身的属性（不能拷贝原型对象上的属性）\r\n      if (target.hasOwnProperty(key)) {\r\n        result[key] = deepClone2(target[key]);\r\n      }\r\n    }\r\n    return result;\r\n  } else {\r\n    return target;\r\n  }\r\n}\r\n\r\n/**\r\n * 使用递归\r\n * 解决问题1: 函数属性不会丢失\r\n * 解决问题2: 循环引用不会出错\r\n * @param {*} target\r\n */\r\nfunction deepClone3(target, map = new Map()) {\r\n  if (typeof target === \"object\" && target !== null) {\r\n    // 克隆数据之前进行判断，查看数据之前是否被克隆过\r\n    let cache = map.get(target);\r\n    if (cache) {\r\n      return cache;\r\n    }\r\n    // 创建一个容器\r\n    const result = Array.isArray(target) ? [] : {};\r\n    // 将新的结果保存到容器中\r\n    map.set(target, result);\r\n    // 遍历target\r\n    for (let key in target) {\r\n      // 检测该属性是否为对象本身的属性（不能拷贝原型对象上的属性）\r\n      if (target.hasOwnProperty(key)) {\r\n        result[key] = deepClone3(target[key], map);\r\n      }\r\n    }\r\n    return result;\r\n  } else {\r\n    return target;\r\n  }\r\n}\r\n\r\n/**\r\n * 最终版 优化遍历性能\r\n * 数组: while | for | forEach() 优于 for-in | keys()&forEach()\r\n * 对象: for-in 与 keys()&forEach() 差不多\r\n * @param {*} target\r\n */\r\nfunction deepClone4(target, map = new Map()) {\r\n  if (typeof target === \"object\" && target !== null) {\r\n    // 克隆数据之前进行判断，查看数据之前是否被克隆过\r\n    let cache = map.get(target);\r\n    if (cache) {\r\n      return cache;\r\n    }\r\n    // 创建一个容器\r\n    const result = Array.isArray(target) ? [] : {};\r\n    // 将新的结果保存到容器中\r\n    map.set(target, result);\r\n\r\n    // 优化遍历\r\n    // 如果目标数据是数组 使用 forEach 循环\r\n    if (Array.isArray(target)) {\r\n      target.forEach((item, index) => {\r\n        result[index] = deepClone4(item, map);\r\n      });\r\n    } else {\r\n      // 如果是对象，获取所有的键名， 再 forEach 遍历\r\n      Object.keys(target).forEach((key) => {\r\n        result[key] = deepClone4(target[key], map);\r\n      });\r\n    }\r\n\r\n    // 遍历target\r\n    for (let key in target) {\r\n      // 检测该属性是否为对象本身的属性（不能拷贝原型对象上的属性）\r\n      if (target.hasOwnProperty(key)) {\r\n        result[key] = deepClone4(target[key], map);\r\n      }\r\n    }\r\n\r\n    return result;\r\n  } else {\r\n    return target;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://ykUtils/./src/object/deepClone.js?");

/***/ }),

/***/ "./src/object/mergeObject.js":
/*!***********************************!*\
  !*** ./src/object/mergeObject.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"mergeObject\": () => (/* binding */ mergeObject)\n/* harmony export */ });\n/**\r\n * 合并多个对象，返回一个合并后的对象，不改变原对象\r\n * @param  {...any} objs \r\n * @returns \r\n */\r\nfunction mergeObject(...objs) {\r\n  const result = {};\r\n\r\n  // 遍历objs得到一个个obj\r\n  objs.forEach((obj) => {\r\n    // 遍历obj的键得到一个个key\r\n    Object.keys(obj).forEach((key) => {\r\n      // 判断result对象中有没有key值属性\r\n      if (!result.hasOwnProperty(key)) {\r\n        // 如果没有，就将obj中的key值属性添加到result中\r\n        result[key] = obj[key];\r\n      } else {\r\n        // 如果result有了，就合并属性\r\n        result[key] = [].concat(result[key], obj[key]);\r\n      }\r\n    });\r\n  });\r\n\r\n  return result;\r\n}\r\n\n\n//# sourceURL=webpack://ykUtils/./src/object/mergeObject.js?");

/***/ }),

/***/ "./src/object/myInstanceOf.js":
/*!************************************!*\
  !*** ./src/object/myInstanceOf.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"myInstanceOf\": () => (/* binding */ myInstanceOf)\n/* harmony export */ });\n/**\r\n * 自定义instanceof\r\n * 判断obj是否是Fn类型的实例对象\r\n * 实现方法：Fn的原型对象是否是obj的原型链上的某个对象\r\n * @param {Object} obj\r\n * @param {*} Fn 构造函数\r\n * @returns\r\n */\r\nfunction myInstanceOf(obj, Fn) {\r\n  // 得到obj的隐式原型对象\r\n  let protoObj = obj.__proto__;\r\n  // 原型对象存在，就遍历原型链\r\n  while (protoObj) {\r\n    // 实例对象的隐式原型 等于 构造函数的显式原型 就返回true\r\n    if (protoObj === Fn.prototype) {\r\n      return true;\r\n    }\r\n    // 不相等就根据原型链一直往上找 直到最后为null\r\n    protoObj = protoObj.__proto__;\r\n  }\r\n  return false;\r\n}\r\n\n\n//# sourceURL=webpack://ykUtils/./src/object/myInstanceOf.js?");

/***/ }),

/***/ "./src/object/newInstance.js":
/*!***********************************!*\
  !*** ./src/object/newInstance.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"newInstance\": () => (/* binding */ newInstance)\n/* harmony export */ });\n/**\r\n * 自定义new\r\n * 创建Fn构造函数的实例对象\r\n * @param {Function} Fn\r\n * @param  {...any} args\r\n * @returns\r\n */\r\nfunction newInstance(Fn, ...args) {\r\n  // 1. 创建新对象\r\n  // 创建空的object实例对象，作为Fn的实例对象\r\n  const obj = {};\r\n  // 修改新对象的原型对象\r\n  // 将Fn的prototype（显式原型）属性赋值给obj的__proto__（隐式原型）属性\r\n  obj.__proto__ = Fn.prototype;\r\n  // 2. 修改函数内部this指向新对象，并执行\r\n  //\r\n  const result = Fn.call(obj, ...args);\r\n  // 3. 返回新对象\r\n  // return obj\r\n  // 与new保持一直，如果构造函数有返回值，返回值是对象a就返回对象a，否则返回实例对象\r\n  return result instanceof Object ? result : obj;\r\n}\r\n\n\n//# sourceURL=webpack://ykUtils/./src/object/newInstance.js?");

/***/ }),

/***/ "./src/string/reverseString.js":
/*!*************************************!*\
  !*** ./src/string/reverseString.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"reverseString\": () => (/* binding */ reverseString),\n/* harmony export */   \"palindrome\": () => (/* binding */ palindrome),\n/* harmony export */   \"truncate\": () => (/* binding */ truncate)\n/* harmony export */ });\nfunction reverseString(str) {\r\n  // 将字符串转换成数组\r\n  let arr = str.split(\"\");\r\n  // 使用数组的翻转方法\r\n  arr.reverse();\r\n  // 将数组拼接成字符串\r\n  let s = arr.join(\"\");\r\n  return s;\r\n}\r\n\r\nfunction palindrome(str) {\r\n  return reverseString(str) === str;\r\n}\r\n\r\nfunction truncate(str, size) {\r\n  return str.slice(0, size) + \"...\";\r\n}\r\n\n\n//# sourceURL=webpack://ykUtils/./src/string/reverseString.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});