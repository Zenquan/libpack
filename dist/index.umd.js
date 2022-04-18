/*!
 * js-lib-starter 0.1.0 (https://github.com/zenquan/js-lib-starter)
 * API https://github.com/zenquan/js-lib-starter/blob/master/doc/api.md
 * Copyright 2021-2022 zenquan. All Rights Reserved
 * Licensed under MIT (https://github.com/zenquan/js-lib-starter/blob/master/LICENSE)
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["js-lib-starter"] = {}));
})(this, (function (exports) { 'use strict';

  function test() {
      console.log("test>>>");
  }

  function test2() {
      for(var _len = arguments.length, arg = new Array(_len), _key = 0; _key < _len; _key++){
          arg[_key] = arguments[_key];
      }
      console.log("test2>>>", arg);
  }

  exports.test = test;
  exports.test2 = test2;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
