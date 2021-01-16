const expect = require('expect.js');

// js 测试源文件
const Mime = require('../src//Mime.js');

describe('Mime的单元测试', function () {
  this.timeout(1000);
  const mimeInstance = new Mime.default();

  describe('lookup', function () {
    it('image/jpg', function () {
      const shareUrl = 'https://joyrun-activity-upyun.thejoyrun.com/huodong/2020/09/run-challenge/assets/img/share.jpg'
      expect(mimeInstance.lookup(shareUrl)).to.equal('image/jpg');
    });
  });
});
