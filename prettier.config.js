module.exports = {
  endOfLine: 'auto', // 维持现有的行尾，不进行转换
  printWidth: 80, // 文字打印宽度
  tabWidth: 2, // 标签宽度
  useTabs: false, // 不使用标签
  semi: false, // 结尾去掉分号
  singleQuote: true, // 单引号
  bracketSpacing: true, // 标签结尾是否自动换行
  jsxBracketSameLine: true, // jsx是否另起一行
  htmlWhitespaceSensitivity: 'ignore', // 指定 HTML 文件的全局空白区域敏感度
  trailingComma: 'none', // 尾随逗号
  arrowParens: 'avoid', // 只有一个参数的箭头函数的参数是否带圆括号（默认avoid不带）
  eslintIntegration: true // 让prettier使用eslint的代码格式进行校验
}
