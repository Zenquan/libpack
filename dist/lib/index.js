function test() {
    console.log("test>>>");
}

function test2() {
    for(var _len = arguments.length, arg = new Array(_len), _key = 0; _key < _len; _key++){
        arg[_key] = arguments[_key];
    }
    console.log("test2>>>", arg);
}

export { test, test2 };
