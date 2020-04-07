
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
          /** 
           * error 
           * You are using the runtime-only build of Vue where the template compiler is not available.
           * 解决办法 - 添加以下配置
           * ??
           */
        vue$: "vue/dist/vue.esm.js", 
      }
    }
  }
}