var path = require('path');
var fs = require('fs');
var dirs = [];

function getDirs (pathName) {
  if (!pathName) {
    throw new Error('请传入pathName');
  }
  if (!fs.existsSync(pathName)) {
    throw new Error(`${pathName}路径不存在`);
  }
  const dirInfo = fs.readdirSync(path.resolve(process.cwd(), pathName));
  dirInfo.forEach(item => {
    const location = path.join(pathName,item);
    const info = fs.statSync(location);
    if(info.isDirectory()){
      getDirs(location);
    } else {
      dirs.push(location.replace(/src\//, ''));
    }
  });
  return dirs;
}

module.exports = {
  getDirs
};
