const mimes = {
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
class Mime {
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
    lookup (url) {
        const urlArr = url.split('/'),
            len = urlArr.length,
            mineType = urlArr[len - 1]
                .match(/\.\S+/)[0]
                .match(/[^.]+/)[0];
        return mimes[mineType];
    }
}

export {
    mimes,
};

export default Mime;
