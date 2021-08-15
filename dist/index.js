/*!
 * js-lib-starter 0.1.0 (https://github.com/zenquan/js-lib-starter)
 * API https://github.com/zenquan/js-lib-starter/blob/master/doc/api.md
 * Copyright 2017-2021 zenquan. All Rights Reserved
 * Licensed under MIT (https://github.com/zenquan/js-lib-starter/blob/master/LICENSE)
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var mimes = {
  'css': 'text/css',
  'less': 'text/css',
  'gif': 'image/gif',
  'html': 'text/html',
  'ico': 'image/x-icon',
  'jpeg': 'image/jpeg',
  'jpg': 'image/jpg',
  'js': 'text/javascript',
  'json': 'application/json',
  'pdf': 'application/pdf',
  'png': 'image/png',
  'svg': 'image/svg',
  'swf': 'application/x-shockwave-flash',
  'tiff': 'image/tiff',
  'txt': 'text/plain',
  'wav': 'audio/x-wav',
  'wmv': 'video/x-ms-wmv',
  'wma': 'video/x-ms-wma',
  'xml': 'text/xml'
};
/** 
 * @description 作用：媒体类型的处理
 * @field 2021/01/16
**/

var Mime = /*#__PURE__*/function () {
  function Mime() {
    _classCallCheck(this, Mime);
  }

  _createClass(Mime, [{
    key: "lookup",

    /** 
    * @description 作用：媒体类型的判断 
    * @param url {string} 图片的链接
    * 
    * @example
    * ```js
    * const shareUrl = 'https://joyrun-activity-upyun.thejoyrun.com/huodong/2020/09/run-challenge/assets/img/share.jpg'
    * const mimeInstance = new Mime();
    * mimeInstance.lookup(shareUrl) // 'image/jpg'
    * ```
    **/
    value: function lookup(url) {
      var urlArr = url.split('/'),
          len = urlArr.length,
          mineType = urlArr[len - 1].match(/\.\S+/)[0].match(/[^.]+/)[0];
      return mimes[mineType];
    }
  }]);

  return Mime;
}();

/** 
 * @description 作用：测试
 * @field 2021/01/16
**/
var Test = /*#__PURE__*/function () {
  function Test() {
    _classCallCheck(this, Test);
  }

  _createClass(Test, [{
    key: "test",

    /** 
    * @description 作用：媒体类型的判断 
    * @param url {string} 图片的链接
    * 
    * @example
    * ```js
    * ```
    **/
    value: function test(url) {}
  }]);

  return Test;
}();

var index = {
  Mime: Mime,
  Test: Test
};

exports.Mime = Mime;
exports.Test = Test;
exports.default = index;
