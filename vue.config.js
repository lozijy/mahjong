const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,

  // 解决跨域配置
  devServer: {                //记住，别写错了devServer//设置本地默认端口  选填
    port: 8080,
    proxy: {                 //设置代理，必须填
      '/api': {              //设置拦截器  拦截器格式   斜杠+拦截器名字，名字可以自己定
        target: 'http://localhost:9090',     //代理的目标地址(后端设置的端口号)
        changeOrigin: true,              //是否设置同源，输入是的
        pathRewrite: {                   //路径重写
          '/api': ''                     //选择忽略拦截器里面的单词
        }
        /*也就是在前端使用/api可以直接替换为(http://localhost:9090)*/
      }
    }
  }
})
// module.exports = {
//   configureWebpack:{
//     plugins:[
//       new webpack.DefinePlugin({
//         "process.env":{
//           IMAGE_BASE_URL: JSON.stringify()
//         }
//       })
//     ]
//
//
//   }
// }


