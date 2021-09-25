/*!
 * js-lib-starter 0.1.0 (https://github.com/zenquan/js-lib-starter)
 * API https://github.com/zenquan/js-lib-starter/blob/master/doc/api.md
 * Copyright 2017-2021 zenquan. All Rights Reserved
 * Licensed under MIT (https://github.com/zenquan/js-lib-starter/blob/master/LICENSE)
 */

const mimes = {
  "css": "text/css",
  "less": "text/css",
  "gif": "image/gif",
  "html": "text/html",
  "ico": "image/x-icon",
  "jpeg": "image/jpeg",
  "jpg": "image/jpg",
  "js": "text/javascript",
  "json": "application/json",
  "pdf": "application/pdf",
  "png": "image/png",
  "svg": "image/svg",
  "swf": "application/x-shockwave-flash",
  "tiff": "image/tiff",
  "txt": "text/plain",
  "wav": "audio/x-wav",
  "wmv": "video/x-ms-wmv",
  "wma": "video/x-ms-wma",
  "xml": "text/xml"
};
class Mime {
  lookup(url) {
    const urlArr = url.split("/"), len = urlArr.length, mineType = urlArr[len - 1].match(/\.\S+/)[0].match(/[^.]+/)[0];
    return mimes[mineType];
  }
}

class Test {
  test(url) {
  }
}

var index = {
  Mime,
  Test
};

export default index;
export { Mime, Test };
