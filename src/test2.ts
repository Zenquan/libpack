type argType = string[] | number[];

export function test2(...arg: argType) {
  return arg;
}
