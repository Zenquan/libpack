type argType = string[] | number[];

/**
 * @description 测试2函数
 * @param arg 字符串或数字数组参数
 * @returns 字符串或数字数组
 */
export function test2(...arg: argType) {
  return arg;
}
