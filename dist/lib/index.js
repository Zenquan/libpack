function test() {
  console.log("test>>>");
}

function test2(...arg) {
  console.log("test2>>>", arg);
}

export { test, test2 };
