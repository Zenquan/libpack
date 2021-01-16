module.exports = {
  rules: {
    "subject-case": [0, "never"],
    "type-empty": [2, 'never'],
    "type-enum": [
      2,
      "always",
      [
        "A", // "添加一个新的功能模块"
        "M", // "更新一个功能模块",
        "B", // "构建静态资源",
        "F", // "修复 X 页面的问题"
      ]
    ]
  }
};
