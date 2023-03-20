const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  // 解决跨域配置
  dev: {
    proxyTable: {
      '/api/': {
        target:'http://127.0.0.1:8888/api/private/v1/', // 你请求的第三方接口
        changeOrigin:true, /* 在本地会创建一个虚拟服务端，然后发送请求的数据，
        并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题 */
        pathRewrite:{  // 路径重写，
          /* 替换target中的请求地址，也就是说以后你在请求
          http://127.0.0.1:8888/api/private/v1/这个地址的时候直接写成/api/即可。 */
          '^/api/': ''
        }
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


