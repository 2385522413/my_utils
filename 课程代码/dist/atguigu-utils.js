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
		exports["utils"] = factory();
	else
		root["utils"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/array/chunk.js":
/*!****************************!*\
  !*** ./src/array/chunk.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"chunk\": () => /* binding */ chunk\n/* harmony export */ });\n/**\r\n * 数组分块儿\r\n * @param {Array} arr \r\n * @param {Number} size \r\n */\r\nfunction chunk(arr, size=1){\r\n    //判断\r\n    if(arr.length === 0){\r\n        return [];\r\n    }\r\n    //声明两个变量\r\n    let result = [];\r\n    let tmp = [];// [1,2,3]\r\n    //遍历\r\n    arr.forEach(item => {\r\n        //判断tmp元素长度是否为 0\r\n        if(tmp.length === 0){\r\n            //将 tmp 压入到 result 中\r\n            result.push(tmp);\r\n            // [ [1,2,3], [4,5,6], [7] ]\r\n        }\r\n        //将元素压入到临时数组 tmp 中\r\n        tmp.push(item);\r\n        //判断\r\n        if(tmp.length === size){\r\n            tmp = [];\r\n        }\r\n    });\r\n    return result;\r\n}\n\n//# sourceURL=webpack://utils/./src/array/chunk.js?");

/***/ }),

/***/ "./src/array/concat.js":
/*!*****************************!*\
  !*** ./src/array/concat.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"concat\": () => /* binding */ concat\n/* harmony export */ });\n/**\r\n * \r\n * @param {Array} arr \r\n * @param  {...any} args \r\n */\r\nfunction concat(arr, ...args){\r\n    //声明一个空数组\r\n    const result = [...arr];\r\n    //遍历数组\r\n    args.forEach(item => {\r\n        //判断 item 是否为数组\r\n        if(Array.isArray(item)){\r\n            result.push(...item);\r\n        }else{\r\n            result.push(item);\r\n        }\r\n    });\r\n    //返回 result\r\n    return result;\r\n}\r\n\r\n\n\n//# sourceURL=webpack://utils/./src/array/concat.js?");

/***/ }),

/***/ "./src/array/declares.js":
/*!*******************************!*\
  !*** ./src/array/declares.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"map\": () => /* binding */ map,\n/* harmony export */   \"reduce\": () => /* binding */ reduce,\n/* harmony export */   \"filter\": () => /* binding */ filter,\n/* harmony export */   \"find\": () => /* binding */ find,\n/* harmony export */   \"findIndex\": () => /* binding */ findIndex,\n/* harmony export */   \"every\": () => /* binding */ every,\n/* harmony export */   \"some\": () => /* binding */ some\n/* harmony export */ });\n/**\r\n * \r\n * @param {Array} arr \r\n * @param {Function} callback \r\n */\r\nfunction map(arr, callback){\r\n    //声明一个空的数组\r\n    let result = [];\r\n    //遍历数组\r\n    for(let i=0;i<arr.length;i++){\r\n        //执行回调\r\n        result.push(callback(arr[i], i));\r\n    }\r\n    //返回结果\r\n    return result;\r\n}\r\n\r\n/**\r\n * \r\n * @param {Array} arr \r\n * @param {Function} callback \r\n * @param {*} initValue \r\n */\r\nfunction reduce(arr, callback, initValue){\r\n    //声明变量\r\n    let result = initValue;\r\n    //执行回调\r\n    for(let i=0;i<arr.length;i++){\r\n        //执行回调\r\n        result = callback(result, arr[i]);\r\n    }\r\n    //返回最终的结果\r\n    return result;\r\n}\r\n\r\n/**\r\n * \r\n * @param {Array} arr \r\n * @param {Function} callback \r\n */\r\nfunction filter(arr, callback){\r\n    //声明空数组\r\n    let result = [];\r\n    //遍历数组\r\n    for(let i=0;i<arr.length;i++){\r\n        //执行回调\r\n        let res = callback(arr[i], i);\r\n        //判断 如果为真则压入到 result 结果中\r\n        if(res){\r\n            result.push(arr[i]);\r\n        }\r\n    }\r\n    //返回结果\r\n    return result;\r\n}\r\n\r\n/**\r\n * \r\n * @param {Array} arr \r\n * @param {Function} callback \r\n */\r\nfunction find(arr, callback){\r\n    //遍历数组\r\n    for(let i=0;i<arr.length;i++){\r\n        //执行回调\r\n        let res = callback(arr[i], i);\r\n        //判断\r\n        if(res){\r\n            //返回当前正在遍历的元素\r\n            return arr[i];\r\n        }\r\n    }\r\n    //如果没有遇到满足条件的 返回 undefined\r\n    return undefined;\r\n}\r\n\r\n/**\r\n * \r\n * @param {Array} arr \r\n * @param {Function} callback \r\n */\r\nfunction findIndex(arr, callback){\r\n    //遍历数组\r\n    for(let i=0;i<arr.length;i++){\r\n        //执行回调\r\n        let res = callback(arr[i], i);\r\n        //判断\r\n        if(res){\r\n            //返回当前正在遍历的元素\r\n            return i;\r\n        }\r\n    }\r\n    //如果没有遇到满足条件的 返回 undefined\r\n    return -1;\r\n}\r\n\r\n/**\r\n * \r\n * @param {Array} arr \r\n * @param {Function} callback \r\n */\r\nfunction every(arr, callback){\r\n    //遍历数组\r\n    for(let i=0;i<arr.length;i++){\r\n        // 执行回调 如果回调执行返回结果为 false\r\n        if(!callback(arr[i], i)){\r\n            return false;\r\n        }\r\n    }\r\n    //如果都满足条件则返回 true\r\n    return true;\r\n}\r\n\r\n\r\n/**\r\n * \r\n * @param {Array} arr \r\n * @param {Function} callback \r\n */\r\nfunction some(arr, callback){\r\n    //遍历数组\r\n    for(let i=0;i<arr.length;i++){\r\n        // 执行回调 如果回调执行返回结果为 false\r\n        if(callback(arr[i], i)){\r\n            return true;\r\n        }\r\n    }\r\n    //如果都满足条件则返回 true\r\n    return false;\r\n}\n\n//# sourceURL=webpack://utils/./src/array/declares.js?");

/***/ }),

/***/ "./src/array/difference.js":
/*!*********************************!*\
  !*** ./src/array/difference.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"difference\": () => /* binding */ difference\n/* harmony export */ });\n/**\r\n * \r\n * @param {Array} arr1 \r\n * @param {Array} arr2 \r\n */\r\nfunction difference(arr1, arr2=[]){\r\n    //判断参数\r\n    if(arr1.length === 0){\r\n        return [];\r\n    }\r\n    if(arr2.length === 0){\r\n        return arr1.slice();\r\n    }\r\n    const result = arr1.filter(item => !arr2.includes(item));\r\n    return result;\r\n}\n\n//# sourceURL=webpack://utils/./src/array/difference.js?");

/***/ }),

/***/ "./src/array/drop.js":
/*!***************************!*\
  !*** ./src/array/drop.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"drop\": () => /* binding */ drop,\n/* harmony export */   \"dropRight\": () => /* binding */ dropRight\n/* harmony export */ });\n/**\r\n * \r\n * @param {Array} arr \r\n * @param {Number} size \r\n */\r\nfunction drop(arr, size){\r\n    //过滤原数组 产生新数组\r\n    // return arr.filter((value, index) => {\r\n    //     //\r\n    //     return index >= size; \r\n    // });\r\n    return arr.filter((value, index) => index>=size);\r\n}\r\n\r\nfunction dropRight(arr, size){\r\n    // return arr.filter((value,index)=>{\r\n    //     return index < arr.length - size;\r\n    // });\r\n    return arr.filter((value, index) => index < arr.length - size);\r\n\r\n}\n\n//# sourceURL=webpack://utils/./src/array/drop.js?");

/***/ }),

/***/ "./src/array/flatten.js":
/*!******************************!*\
  !*** ./src/array/flatten.js ***!
  \******************************/
/***/ (() => {

eval("/**\r\n * 数组扁平化\r\n * @param {Array} arr \r\n */\r\nfunction flatten1(arr){\r\n    //声明空数组\r\n    let result = [];\r\n    //遍历数组\r\n    arr.forEach(item => {\r\n        //判断\r\n        if(Array.isArray(item)){\r\n            result = result.concat(flatten1(item));\r\n        }else{\r\n            result = result.concat(item);\r\n        }\r\n    });\r\n    //返回结果\r\n    return result;\r\n}\r\n\r\n/**\r\n * \r\n * @param {Array} arr \r\n */\r\nfunction flatten2(arr){\r\n    //声明数组\r\n    let result = [...arr];\r\n    //循环判断\r\n    while(result.some(item => Array.isArray(item))){\r\n        // [1,2,[3,4,[5,6]],7]\r\n        // result = [].concat(1,2,[3,4,[5,6]],7);// [1,2,3,4,[5,6],7]\r\n        // result = [].concat(1,2,3,4,[5,6],7);// [1,2,3,4,5,6,7]\r\n        result = [].concat(...result);//\r\n    }\r\n    //返回结果\r\n    return result;\r\n}\n\n//# sourceURL=webpack://utils/./src/array/flatten.js?");

/***/ }),

/***/ "./src/array/pull.js":
/*!***************************!*\
  !*** ./src/array/pull.js ***!
  \***************************/
/***/ (() => {

eval("/**\r\n * \r\n * @param {Array} arr \r\n * @param  {...any} args \r\n */\r\nfunction pull(arr, ...args){\r\n    //声明空数组  保存删掉的元素\r\n    const result = [];\r\n    //遍历 arr\r\n    for(let i=0;i<arr.length;i++){\r\n        //判断当前元素是否存在于 args 数组中\r\n        if(args.includes(arr[i])){\r\n            //将当前元素的值存入到 result 中\r\n            result.push(arr[i]);\r\n            //删除当前的元素\r\n            arr.splice(i, 1);\r\n            //下标自减\r\n            i--;\r\n        }\r\n    }\r\n    //返回\r\n    return result;\r\n}\r\n\r\nfunction pullAll(arr, values){\r\n    return pull(arr, ...values);\r\n}\n\n//# sourceURL=webpack://utils/./src/array/pull.js?");

/***/ }),

/***/ "./src/array/slice.js":
/*!****************************!*\
  !*** ./src/array/slice.js ***!
  \****************************/
/***/ (() => {

eval("/**\r\n * \r\n * @param {Array} arr \r\n * @param {Number} begin \r\n * @param {Number} end \r\n */\r\nfunction slice(arr, begin, end){\r\n    //若arr数组长度为 0 \r\n    if(arr.length === 0){\r\n        return [];\r\n    }\r\n    //判断 begin\r\n    begin = begin || 0;\r\n    if(begin >= arr.length){\r\n        return [];\r\n    }\r\n    //判断 end \r\n    end = end || arr.length;\r\n    if(end < begin){\r\n        end = arr.length;\r\n    }\r\n\r\n    //声明一个空数组\r\n    const result = [];\r\n\r\n    //遍历对象\r\n    for(let i=0;i<arr.length;i++){\r\n        if(i >= begin && i < end){\r\n            //将下标对应的元素压入数组\r\n            result.push(arr[i]);\r\n        }\r\n    }\r\n\r\n    return result;\r\n}\n\n//# sourceURL=webpack://utils/./src/array/slice.js?");

/***/ }),

/***/ "./src/array/unique.js":
/*!*****************************!*\
  !*** ./src/array/unique.js ***!
  \*****************************/
/***/ (() => {

eval("/**\r\n * \r\n * @param {Array} arr \r\n */\r\nfunction unique1(arr){\r\n    //声明一个空数组\r\n    const result = [];\r\n    //遍历原始数组\r\n    arr.forEach(item => {\r\n        //检测 result 数组中是否包含这个元素\r\n        if(result.indexOf(item) === -1) {\r\n            //若没有该元素 则插入到result中\r\n            result.push(item);\r\n        }\r\n    });\r\n    //返回\r\n    return result;\r\n}\r\n\r\n/**\r\n * \r\n * @param {Array} arr \r\n */\r\nfunction unique2(arr){\r\n    //声明空数组\r\n    const result = [];\r\n    //声明空对象\r\n    const obj = {};\r\n    //遍历数组\r\n    arr.forEach(item => {\r\n        if(obj[item] === undefined){\r\n            //将 item 作为下标存储在 obj 中\r\n            obj[item] = true;\r\n            result.push(item);\r\n        }\r\n    });\r\n    //返回结果\r\n    return result;\r\n}\r\n\r\n/**\r\n * @param {Array} arr \r\n */\r\nfunction unique3(arr){\r\n    // //将数组转化为集合 Set\r\n    // let set = new Set(arr);\r\n    // //将 set 展开创建一个数组\r\n    // let array = [...set];\r\n    // return array;\r\n    return [...new Set(arr)];\r\n}\n\n//# sourceURL=webpack://utils/./src/array/unique.js?");

/***/ }),

/***/ "./src/axios/index.js":
/*!****************************!*\
  !*** ./src/axios/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"axios\": () => /* binding */ axios\n/* harmony export */ });\n\r\nfunction axios({method, url, params, data}){\r\n    //方法转化大写\r\n    method = method.toUpperCase();\r\n    //返回值\r\n    return new Promise((resolve, reject) => {\r\n        //四步骤\r\n        //1. 创建对象\r\n        const xhr = new XMLHttpRequest();\r\n        //2. 初始化\r\n        //处理 params 对象 a=100&b=200\r\n        let str = '';\r\n        for(let k in params){\r\n            str += `${k}=${params[k]}&`;\r\n        }\r\n        str = str.slice(0, -1);\r\n        xhr.open(method, url+'?'+str);\r\n        //3. 发送\r\n        if(method === 'POST' || method === 'PUT' || method === 'DELETE'){\r\n            //Content-type mime类型设置\r\n            xhr.setRequestHeader('Content-type','application/json');\r\n            //设置请求体\r\n            xhr.send(JSON.stringify(data));\r\n        }else{\r\n            xhr.send();\r\n        }\r\n        //设置响应结果的类型为 JSON\r\n        xhr.responseType = 'json';\r\n        //4. 处理结果\r\n        xhr.onreadystatechange = function(){\r\n            //\r\n            if(xhr.readyState === 4){\r\n                //判断响应状态码 2xx\r\n                if(xhr.status >= 200 && xhr.status < 300){\r\n                    //成功的状态\r\n                    resolve({\r\n                        status: xhr.status,\r\n                        message: xhr.statusText,\r\n                        body: xhr.response\r\n                    });\r\n                }else{\r\n                    reject(new Error('请求失败, 失败的状态码为' + xhr.status));\r\n                }\r\n            }\r\n        }\r\n\r\n    });\r\n}\r\n\r\naxios.get = function(url, options){\r\n    //发送 AJAX 请求 GET\r\n    let config = Object.assign(options, {method:'GET', url: url});\r\n   \r\n    return axios(config);\r\n}\r\n\r\naxios.post = function(url, options){\r\n    //发送 AJAX 请求 GET\r\n    let config = Object.assign(options, {method:'POST', url: url});\r\n   \r\n    return axios(config);\r\n}\r\n\r\naxios.put = function(url, options){\r\n    //发送 AJAX 请求 GET\r\n    let config = Object.assign(options, {method:'PUT', url: url});\r\n   \r\n    return axios(config);\r\n}\r\n\r\naxios.delete = function(url, options){\r\n    //发送 AJAX 请求 GET\r\n    let config = Object.assign(options, {method:'delete', url: url});\r\n   \r\n    return axios(config);\r\n}\n\n//# sourceURL=webpack://utils/./src/axios/index.js?");

/***/ }),

/***/ "./src/event-bind/index.js":
/*!*********************************!*\
  !*** ./src/event-bind/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addEventListener\": () => /* binding */ addEventListener\n/* harmony export */ });\n\r\nfunction addEventListener(el, type, fn, selector){\r\n    //判断 el 的类型\r\n    if(typeof el === 'string'){\r\n        el = document.querySelector(el);\r\n    }\r\n    //事件绑定\r\n    //若没有传递子元素的选择器, 则给 el 元素绑定事件\r\n    if(!selector){\r\n        el.addEventListener(type, fn);\r\n    }else{\r\n        el.addEventListener(type, function(e){\r\n            //获取点击的目标事件源\r\n            const target = e.target;\r\n            //判断选择器与目标元素是否相符合\r\n            if(target.matches(selector)){\r\n                //若符合  则调用回调\r\n                fn.call(target, e);\r\n            }\r\n        });\r\n    }\r\n}\n\n//# sourceURL=webpack://utils/./src/event-bind/index.js?");

/***/ }),

/***/ "./src/event-bus/index.js":
/*!********************************!*\
  !*** ./src/event-bus/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"eventBus\": () => /* binding */ eventBus\n/* harmony export */ });\n\r\nconst eventBus = {\r\n    //保存类型与回调的容器\r\n    callbacks: {}\r\n};\r\n\r\n//绑定事件\r\neventBus.on = function(type, callback){\r\n    //判断\r\n    if(this.callbacks[type]){\r\n        //如果 callbacks 属性中存在该类型事件 \r\n        this.callbacks[type].push(callback);\r\n    }else{\r\n        //如果 callbacks 属性中不存在该类型事件 \r\n        this.callbacks[type] = [callback];\r\n    }\r\n}\r\n\r\n//触发事件\r\neventBus.emit = function(type, data){\r\n    //判断\r\n    if(this.callbacks[type] && this.callbacks[type].length > 0){\r\n        //遍历数组\r\n        this.callbacks[type].forEach(callback => {\r\n            //执行回调\r\n            callback(data);\r\n        });\r\n    }\r\n}\r\n\r\n//事件的解绑\r\neventBus.off = function(eventName){\r\n    //若传入了 eventName 事件类型\r\n    if(eventName){\r\n        //只是删除 eventName 对应的事件回调\r\n        delete this.callbacks[eventName];\r\n    }else{\r\n        this.callbacks = {};\r\n    }\r\n}\n\n//# sourceURL=webpack://utils/./src/event-bus/index.js?");

/***/ }),

/***/ "./src/function/apply.js":
/*!*******************************!*\
  !*** ./src/function/apply.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"apply\": () => /* binding */ apply\n/* harmony export */ });\n\r\nfunction apply(Fn, obj, args){\r\n    //判断\r\n    if(obj === undefined || obj === null){\r\n        obj = globalThis;\r\n    }\r\n    //为 obj 添加临时方法\r\n    obj.temp = Fn;\r\n    //执行方法\r\n    let result = obj.temp(...args);\r\n    //删除临时属性\r\n    delete obj.temp;\r\n    //返回结果\r\n    return result;\r\n}\n\n//# sourceURL=webpack://utils/./src/function/apply.js?");

/***/ }),

/***/ "./src/function/bind.js":
/*!******************************!*\
  !*** ./src/function/bind.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"bind\": () => /* binding */ bind\n/* harmony export */ });\n/* harmony import */ var _call__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./call */ \"./src/function/call.js\");\n\r\n\r\nfunction bind(Fn, obj, ...args){\r\n    //返回一个新的函数\r\n    return function(...args2){\r\n        //执行 call 函数\r\n        return (0,_call__WEBPACK_IMPORTED_MODULE_0__.call)(Fn, obj, ...args, ...args2);\r\n    }\r\n}\n\n//# sourceURL=webpack://utils/./src/function/bind.js?");

/***/ }),

/***/ "./src/function/call.js":
/*!******************************!*\
  !*** ./src/function/call.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"call\": () => /* binding */ call\n/* harmony export */ });\n\r\nfunction call(Fn, obj, ...args){\r\n    //判断\r\n    if(obj === undefined || obj === null){\r\n        obj = globalThis;// 全局对象\r\n    }\r\n    //为 obj 添加临时的方法\r\n    obj.temp = Fn;\r\n    //调用 temp 方法\r\n    let result = obj.temp(...args);\r\n    //删除 temp 方法\r\n    delete obj.temp;\r\n    //返回执行结果\r\n    return result;\r\n}\n\n//# sourceURL=webpack://utils/./src/function/call.js?");

/***/ }),

/***/ "./src/function/debounce.js":
/*!**********************************!*\
  !*** ./src/function/debounce.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"debounce\": () => /* binding */ debounce\n/* harmony export */ });\n\r\nfunction debounce(callback, time){\r\n    //定时器变量\r\n    let timeId = null;\r\n    //返回一个函数\r\n    return function(e){\r\n        //判断\r\n        if(timeId !== null){\r\n            //清空定时器\r\n            clearTimeout(timeId);\r\n        }\r\n        //启动定时器\r\n        timeId = setTimeout(() => {\r\n            //执行回调\r\n            callback.call(this, e);\r\n            //重置定时器变量\r\n            timeId = null;\r\n        }, time);\r\n    }\r\n}\n\n//# sourceURL=webpack://utils/./src/function/debounce.js?");

/***/ }),

/***/ "./src/function/throttle.js":
/*!**********************************!*\
  !*** ./src/function/throttle.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"throttle\": () => /* binding */ throttle\n/* harmony export */ });\n\r\nfunction throttle(callback, wait){\r\n    //定义开始时间\r\n    let start = 0;\r\n    //返回结果是一个函数\r\n    return function(e){\r\n        //获取当前的时间戳\r\n        let now = Date.now();\r\n        //判断\r\n        if(now - start >= wait){\r\n            //若满足条件, 则执行回调函数\r\n            callback.call(this, e);\r\n            //修改开始时间\r\n            start = now;\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack://utils/./src/function/throttle.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"test\": () => /* binding */ test,\n/* harmony export */   \"TTTT\": () => /* binding */ TTTT,\n/* harmony export */   \"chunk\": () => /* reexport safe */ _array_chunk__WEBPACK_IMPORTED_MODULE_0__.chunk,\n/* harmony export */   \"concat\": () => /* reexport safe */ _array_concat__WEBPACK_IMPORTED_MODULE_1__.concat,\n/* harmony export */   \"map\": () => /* reexport safe */ _array_declares__WEBPACK_IMPORTED_MODULE_2__.map,\n/* harmony export */   \"reduce\": () => /* reexport safe */ _array_declares__WEBPACK_IMPORTED_MODULE_2__.reduce,\n/* harmony export */   \"filter\": () => /* reexport safe */ _array_declares__WEBPACK_IMPORTED_MODULE_2__.filter,\n/* harmony export */   \"find\": () => /* reexport safe */ _array_declares__WEBPACK_IMPORTED_MODULE_2__.find,\n/* harmony export */   \"findIndex\": () => /* reexport safe */ _array_declares__WEBPACK_IMPORTED_MODULE_2__.findIndex,\n/* harmony export */   \"every\": () => /* reexport safe */ _array_declares__WEBPACK_IMPORTED_MODULE_2__.every,\n/* harmony export */   \"some\": () => /* reexport safe */ _array_declares__WEBPACK_IMPORTED_MODULE_2__.some,\n/* harmony export */   \"difference\": () => /* reexport safe */ _array_difference__WEBPACK_IMPORTED_MODULE_3__.difference,\n/* harmony export */   \"drop\": () => /* reexport safe */ _array_drop__WEBPACK_IMPORTED_MODULE_4__.drop,\n/* harmony export */   \"dropRight\": () => /* reexport safe */ _array_drop__WEBPACK_IMPORTED_MODULE_4__.dropRight,\n/* harmony export */   \"flatten1\": () => /* reexport safe */ _array_flatten__WEBPACK_IMPORTED_MODULE_5__.flatten1,\n/* harmony export */   \"flatten2\": () => /* reexport safe */ _array_flatten__WEBPACK_IMPORTED_MODULE_5__.flatten2,\n/* harmony export */   \"pull\": () => /* reexport safe */ _array_pull__WEBPACK_IMPORTED_MODULE_6__.pull,\n/* harmony export */   \"pullAll\": () => /* reexport safe */ _array_pull__WEBPACK_IMPORTED_MODULE_6__.pullAll,\n/* harmony export */   \"slice\": () => /* reexport safe */ _array_slice__WEBPACK_IMPORTED_MODULE_7__.slice,\n/* harmony export */   \"unique1\": () => /* reexport safe */ _array_unique__WEBPACK_IMPORTED_MODULE_8__.unique1,\n/* harmony export */   \"unique2\": () => /* reexport safe */ _array_unique__WEBPACK_IMPORTED_MODULE_8__.unique2,\n/* harmony export */   \"unique3\": () => /* reexport safe */ _array_unique__WEBPACK_IMPORTED_MODULE_8__.unique3,\n/* harmony export */   \"axios\": () => /* reexport safe */ _axios_index__WEBPACK_IMPORTED_MODULE_9__.axios,\n/* harmony export */   \"addEventListener\": () => /* reexport safe */ _event_bind_index__WEBPACK_IMPORTED_MODULE_10__.addEventListener,\n/* harmony export */   \"eventBus\": () => /* reexport safe */ _event_bus_index__WEBPACK_IMPORTED_MODULE_11__.eventBus,\n/* harmony export */   \"apply\": () => /* reexport safe */ _function_apply__WEBPACK_IMPORTED_MODULE_12__.apply,\n/* harmony export */   \"bind\": () => /* reexport safe */ _function_bind__WEBPACK_IMPORTED_MODULE_13__.bind,\n/* harmony export */   \"call\": () => /* reexport safe */ _function_call__WEBPACK_IMPORTED_MODULE_14__.call,\n/* harmony export */   \"debounce\": () => /* reexport safe */ _function_debounce__WEBPACK_IMPORTED_MODULE_15__.debounce,\n/* harmony export */   \"throttle\": () => /* reexport safe */ _function_throttle__WEBPACK_IMPORTED_MODULE_16__.throttle,\n/* harmony export */   \"clone1\": () => /* reexport safe */ _object_clone__WEBPACK_IMPORTED_MODULE_17__.clone1,\n/* harmony export */   \"clone2\": () => /* reexport safe */ _object_clone__WEBPACK_IMPORTED_MODULE_17__.clone2,\n/* harmony export */   \"deepClone1\": () => /* reexport safe */ _object_clone__WEBPACK_IMPORTED_MODULE_17__.deepClone1,\n/* harmony export */   \"deepClone2\": () => /* reexport safe */ _object_clone__WEBPACK_IMPORTED_MODULE_17__.deepClone2,\n/* harmony export */   \"deepClone3\": () => /* reexport safe */ _object_clone__WEBPACK_IMPORTED_MODULE_17__.deepClone3,\n/* harmony export */   \"deepClone4\": () => /* reexport safe */ _object_clone__WEBPACK_IMPORTED_MODULE_17__.deepClone4,\n/* harmony export */   \"mergeObject\": () => /* reexport safe */ _object_mergeObject__WEBPACK_IMPORTED_MODULE_18__.mergeObject,\n/* harmony export */   \"myInstanceOf\": () => /* reexport safe */ _object_myInstanceOf__WEBPACK_IMPORTED_MODULE_19__.myInstanceOf,\n/* harmony export */   \"newInstance\": () => /* reexport safe */ _object_newInstance__WEBPACK_IMPORTED_MODULE_20__.newInstance,\n/* harmony export */   \"PubSub\": () => /* reexport safe */ _pub_sub__WEBPACK_IMPORTED_MODULE_21__.PubSub,\n/* harmony export */   \"reverseString\": () => /* reexport safe */ _string_index__WEBPACK_IMPORTED_MODULE_22__.reverseString,\n/* harmony export */   \"palindrome\": () => /* reexport safe */ _string_index__WEBPACK_IMPORTED_MODULE_22__.palindrome,\n/* harmony export */   \"truncate\": () => /* reexport safe */ _string_index__WEBPACK_IMPORTED_MODULE_22__.truncate\n/* harmony export */ });\n/* harmony import */ var _array_chunk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array/chunk */ \"./src/array/chunk.js\");\n/* harmony import */ var _array_concat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array/concat */ \"./src/array/concat.js\");\n/* harmony import */ var _array_declares__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./array/declares */ \"./src/array/declares.js\");\n/* harmony import */ var _array_difference__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./array/difference */ \"./src/array/difference.js\");\n/* harmony import */ var _array_drop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./array/drop */ \"./src/array/drop.js\");\n/* harmony import */ var _array_flatten__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./array/flatten */ \"./src/array/flatten.js\");\n/* harmony import */ var _array_flatten__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_array_flatten__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _array_pull__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./array/pull */ \"./src/array/pull.js\");\n/* harmony import */ var _array_pull__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_array_pull__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _array_slice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./array/slice */ \"./src/array/slice.js\");\n/* harmony import */ var _array_slice__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_array_slice__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _array_unique__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./array/unique */ \"./src/array/unique.js\");\n/* harmony import */ var _array_unique__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_array_unique__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _axios_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./axios/index */ \"./src/axios/index.js\");\n/* harmony import */ var _event_bind_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./event-bind/index */ \"./src/event-bind/index.js\");\n/* harmony import */ var _event_bus_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./event-bus/index */ \"./src/event-bus/index.js\");\n/* harmony import */ var _function_apply__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./function/apply */ \"./src/function/apply.js\");\n/* harmony import */ var _function_bind__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./function/bind */ \"./src/function/bind.js\");\n/* harmony import */ var _function_call__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./function/call */ \"./src/function/call.js\");\n/* harmony import */ var _function_debounce__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./function/debounce */ \"./src/function/debounce.js\");\n/* harmony import */ var _function_throttle__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./function/throttle */ \"./src/function/throttle.js\");\n/* harmony import */ var _object_clone__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./object/clone */ \"./src/object/clone.js\");\n/* harmony import */ var _object_mergeObject__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./object/mergeObject */ \"./src/object/mergeObject.js\");\n/* harmony import */ var _object_myInstanceOf__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./object/myInstanceOf */ \"./src/object/myInstanceOf.js\");\n/* harmony import */ var _object_myInstanceOf__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_object_myInstanceOf__WEBPACK_IMPORTED_MODULE_19__);\n/* harmony import */ var _object_newInstance__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./object/newInstance */ \"./src/object/newInstance.js\");\n/* harmony import */ var _pub_sub__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pub-sub */ \"./src/pub-sub/index.js\");\n/* harmony import */ var _string_index__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./string/index */ \"./src/string/index.js\");\nfunction test() {\r\n    document.write('测试自定义包');\r\n    console.log('test()')\r\n}\r\n\r\nfunction TTTT() {\r\n    console.log('TTTT()')\r\n}\r\n\r\n//引入其他文件, 然后再暴露\r\n//1. 目标文件中暴露数据  export 数据\r\n// import {chunk} from './array/chunk';\r\n//2. 暴露数据\r\n// export {chunk};\r\n\r\n\r\n\r\n//数组相关的 API 函数\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n//axios发送 AJAX 请求\r\n\r\n\r\n//事件委托\r\n\r\n\r\n//事件总线\r\n\r\n\r\n//函数相关\r\n\r\n\r\n\r\n\r\n\r\n\r\n//对象相关\r\n\r\n\r\n\r\n\r\n\r\n//消息订阅与发布\r\n\r\n\r\n//字符串\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://utils/./src/index.js?");

/***/ }),

/***/ "./src/object/clone.js":
/*!*****************************!*\
  !*** ./src/object/clone.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clone1\": () => /* binding */ clone1,\n/* harmony export */   \"clone2\": () => /* binding */ clone2,\n/* harmony export */   \"deepClone1\": () => /* binding */ deepClone1,\n/* harmony export */   \"deepClone2\": () => /* binding */ deepClone2,\n/* harmony export */   \"deepClone3\": () => /* binding */ deepClone3,\n/* harmony export */   \"deepClone4\": () => /* binding */ deepClone4\n/* harmony export */ });\n/**\r\n * \r\n * @param {*} target \r\n */\r\nfunction clone1(target){\r\n    //类型判断  {}  []  null\r\n    if(typeof target === 'object' && target !== null){\r\n        //判断数据是否为数组\r\n        if(Array.isArray(target)){\r\n            return [...target];\r\n        }else{\r\n            return {...target};\r\n        }\r\n    }else{\r\n        return target;\r\n    }\r\n}\r\n\r\n/**\r\n * \r\n * @param {*} target \r\n */\r\nfunction clone2(target){\r\n    //判断\r\n    if(typeof target === 'object' && target !== null){\r\n        //创建一个容器\r\n        const result = Array.isArray(target) ? [] : {};\r\n        //遍历 target 数据\r\n        for(let key in target) {\r\n            //判断当前对象身上是否包含该属性\r\n            if(target.hasOwnProperty(key)){\r\n                //将属性设置到 result 结果数据中\r\n                result[key] = target[key];\r\n            }\r\n        }\r\n        return result;\r\n    }else{\r\n        return target;\r\n    }\r\n}\r\n\r\n\r\nfunction deepClone1(target){\r\n    //通过数据创建 JSON 格式的字符串\r\n    let str = JSON.stringify(target);\r\n    //将 JSON 字符串创建为 JS 数据\r\n    let data = JSON.parse(str);\r\n    return data;    \r\n}\r\n\r\n\r\nfunction deepClone2(target){\r\n    //检测数据的类型\r\n    if(typeof target === 'object' && target !== null ){\r\n        //创建一个容器\r\n        const result = Array.isArray(target) ? [] : {};\r\n        //遍历对象\r\n        for(let key in target){\r\n            //检测该属性是否为对象本身的属性(不能拷贝原型对象的属性)\r\n            if(target.hasOwnProperty(key)){\r\n                //拷贝\r\n                result[key] = deepClone2(target[key]);\r\n            }\r\n        }\r\n        return result;\r\n    }else{\r\n        return target;\r\n    }\r\n}\r\n\r\nfunction deepClone3(target, map=new Map()){\r\n    //检测数据的类型\r\n    if(typeof target === 'object' && target !== null ){\r\n        //克隆数据之前, 进行判断, 数据之前是否克隆过\r\n        let cache = map.get(target);\r\n        if(cache){\r\n            return cache;\r\n        }\r\n        //创建一个容器\r\n        const result = Array.isArray(target) ? [] : {};\r\n        //将新的结果存入到容器中\r\n        map.set(target, result);\r\n        //遍历对象\r\n        for(let key in target){\r\n            //检测该属性是否为对象本身的属性(不能拷贝原型对象的属性)\r\n            if(target.hasOwnProperty(key)){\r\n                //拷贝\r\n                result[key] = deepClone3(target[key], map);\r\n            }\r\n        }\r\n        return result;\r\n    }else{\r\n        return target;\r\n    }\r\n}\r\n\r\n\r\n\r\nfunction deepClone4(target, map=new Map()){\r\n    //检测数据的类型\r\n    if(typeof target === 'object' && target !== null ){\r\n        //克隆数据之前, 进行判断, 数据之前是否克隆过\r\n        let cache = map.get(target);\r\n        if(cache){\r\n            return cache;\r\n        }\r\n        //判断目标数据的类型\r\n        let isArray = Array.isArray(target);\r\n        //创建一个容器\r\n        const result = isArray ? [] : {};\r\n        //将新的结果存入到容器中\r\n        map.set(target, result);\r\n        //如果目标数据为数组\r\n        if(isArray){\r\n            //forEach 遍历\r\n            target.forEach((item, index) => {\r\n                result[index] = deepClone4(item, map);\r\n            });\r\n        }else{\r\n            //如果是对象, 获取所有的键名, 然后 forEach 遍历\r\n            Object.keys(target).forEach(key => {\r\n                result[key] = deepClone4(target[key], map);\r\n            });\r\n        }\r\n        return result;\r\n    }else{\r\n        return target;\r\n    }\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://utils/./src/object/clone.js?");

/***/ }),

/***/ "./src/object/mergeObject.js":
/*!***********************************!*\
  !*** ./src/object/mergeObject.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"mergeObject\": () => /* binding */ mergeObject\n/* harmony export */ });\n\r\nfunction mergeObject(...objs){\r\n    //声明一个空对象\r\n    const result = {};\r\n    //遍历所有的参数对象\r\n    objs.forEach(obj => {\r\n        //获取当前对象所有的属性\r\n        Object.keys(obj).forEach(key => {\r\n            //检测 result 中是否存在 key 属性\r\n            if(result.hasOwnProperty(key)){\r\n                result[key] = [].concat(result[key], obj[key]);\r\n            }else{\r\n                //如果没有 则直接写入\r\n                result[key] = obj[key];\r\n            }\r\n        });\r\n    });\r\n    return result;\r\n}\n\n//# sourceURL=webpack://utils/./src/object/mergeObject.js?");

/***/ }),

/***/ "./src/object/myInstanceOf.js":
/*!************************************!*\
  !*** ./src/object/myInstanceOf.js ***!
  \************************************/
/***/ (() => {

eval("\r\n/**\r\n * \r\n * @param {Object} obj \r\n * @param {Function} Fn \r\n */\r\nfunction myInstanceOf(obj, Fn){\r\n    //获取函数的显式原型\r\n    let prototype = Fn.prototype;\r\n    //获取 obj 的隐式原型对象\r\n    let proto = obj.__proto__;\r\n    //遍历原型链\r\n    while(proto){\r\n        //检测原型对象是否相等\r\n        if(prototype === proto){\r\n            return true;\r\n        }\r\n        //如果不等于\r\n        proto = proto.__proto__;\r\n    }\r\n    return false;\r\n}\n\n//# sourceURL=webpack://utils/./src/object/myInstanceOf.js?");

/***/ }),

/***/ "./src/object/newInstance.js":
/*!***********************************!*\
  !*** ./src/object/newInstance.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"newInstance\": () => /* binding */ newInstance\n/* harmony export */ });\n/**\r\n * \r\n * @param {Function} Fn \r\n * @param  {...any} args \r\n */\r\nfunction newInstance(Fn, ...args){\r\n    //1. 创建一个新对象\r\n    const obj = {};\r\n    //2. 修改函数内部 this 指向新对象并执行\r\n    const result = Fn.call(obj, ...args);\r\n    //修改新对象的原型对象\r\n    obj.__proto__ = Fn.prototype;\r\n    //3. 返回新对象\r\n    return result instanceof Object ? result : obj;\r\n}\n\n//# sourceURL=webpack://utils/./src/object/newInstance.js?");

/***/ }),

/***/ "./src/pub-sub/index.js":
/*!******************************!*\
  !*** ./src/pub-sub/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PubSub\": () => /* binding */ PubSub\n/* harmony export */ });\n\r\nconst PubSub = {\r\n    //订阅唯一id\r\n    id:1,\r\n    //频道与回调保存容器\r\n    callbacks: {\r\n        // pay: {\r\n        //     token_1: fn\r\n        //     token_2: fn\r\n        // },\r\n        // cancel: {\r\n        //     token_3:\r\n        //     token_4\r\n        // },\r\n        // other: {\r\n        //     token_10\r\n        // }\r\n     }\r\n}\r\n\r\n/**订阅频道 */\r\nPubSub.subscribe = function(channel, callback){\r\n    //创建唯一的编号\r\n    let token = \"token_\" + this.id++;//\r\n    //pay  token_1  \r\n    //判断 callbacks 属性中是否存在 pay\r\n    if(this.callbacks[channel]){\r\n        this.callbacks[channel][token] = callback;\r\n    }else{\r\n        this.callbacks[channel] = {\r\n           [token]: callback \r\n        }\r\n    }\r\n    //返回频道订阅的 id\r\n    return token;\r\n}\r\n\r\n/* 发布消息 */\r\nPubSub.publish = function(channel, data){\r\n    //获取当前频道中所有的回调\r\n    if(this.callbacks[channel]){\r\n        //\r\n        Object.values(this.callbacks[channel]).forEach(callback => {\r\n            //执行回调\r\n            callback(data);\r\n        })\r\n    }\r\n}\r\n\r\n/**取消订阅 */\r\n//   1). 没有传值, flag 为 undefined\r\n//   2). 传入token字符串\r\n//   3). msgName字符串\r\nPubSub.unsubscribe = function(flag){\r\n    //如果flag为undeined 则清空所有订阅\r\n    if(flag === undefined) {\r\n        this.callbacks = {};\r\n    }else if(typeof flag === 'string'){\r\n        //判断是否为 token_ 开头\r\n        if(flag.indexOf('token_') === 0){\r\n            //如果是 标明是一个订阅id\r\n            let callbackObj = Object.values(this.callbacks).find(obj => obj.hasOwnProperty(flag))\r\n            //判断\r\n            if(callbackObj){\r\n                delete callbackObj[flag];\r\n            }\r\n        }else{\r\n            //表明是一个频道的名称\r\n            delete this.callbacks[flag];\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack://utils/./src/pub-sub/index.js?");

/***/ }),

/***/ "./src/string/index.js":
/*!*****************************!*\
  !*** ./src/string/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"reverseString\": () => /* binding */ reverseString,\n/* harmony export */   \"palindrome\": () => /* binding */ palindrome,\n/* harmony export */   \"truncate\": () => /* binding */ truncate\n/* harmony export */ });\n\r\nfunction reverseString(str){\r\n    //将字符串转为数组\r\n    // let arr = str.split('');\r\n    let arr = [...str];\r\n    //翻转数组\r\n    arr.reverse();\r\n    //将数组拼接成字符串\r\n    let s = arr.join('');\r\n    return s;\r\n}\r\n\r\nfunction palindrome(str){\r\n    return reverseString(str) === str;\r\n}\r\n\r\nfunction truncate(str, size){\r\n    return str.slice(0, size) + '...';\r\n}   \n\n//# sourceURL=webpack://utils/./src/string/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./src/index.js");
/******/ })()
;
});