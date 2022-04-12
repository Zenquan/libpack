declare function test(): void;

declare type argType = string[];
declare function test2(...arg: argType): void;

export { test, test2 };
