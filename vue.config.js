const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  runtimeCompiler: true,
  devServer: {
    'https': true,

  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/reaction-timer/'
    : '/'

})
