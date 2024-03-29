module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  /*
    线上:production 不需要测试 --> npm run serve --> consolg 移除
    线下:devlopment 不需要 --> npm run serve --> console 输出数据
    erroe:错误 2
    warn :警告 1
    off  :关闭 0
  */
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'quotes': 'off',
    "space-before-function-paren":"off"

  }
}
