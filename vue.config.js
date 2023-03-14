const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true
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


