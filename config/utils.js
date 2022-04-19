import path from 'path';
import fs from 'fs';
import pkg from '../package.json';

let dirs = [];
export function getDirs (pathName) {
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

export const isProd = process.env.NODE_ENV === 'production';

export const external = Object.keys(pkg.dependencies);
