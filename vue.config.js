const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  configureWebpack: {
    resolve: {
      alias: {
        'bootstrap-vue$': 'bootstrap-vue/src/index.js'
      }
    },
    module: {
      rules: [
        { test: /\.js$/, exclude: /node_modules\/(?!bootstrap-vue\/src\/)/, use: {loader: 'babel-loader',options: { presets: ['@babel/preset-env'] } } },
        { test: /\.(jsfake)$/i, type: 'asset/resource', generator: { filename: 'supportedbrowsers/[name].[contenthash:7].js' } },
        { test: /\.(cssfake)$/i, type: 'asset/resource', generator: { filename: 'supportedbrowsers/[name].[contenthash:7].css' } }
      ]
    }
  },
  transpileDependencies: true,
  productionSourceMap: false,
  chainWebpack: (config) => {
    config.module
      .rule("vue")
      .use("vue-loader")
      .loader("vue-loader")
      .tap(options => {
        options["transformAssetUrls"] = {
          img: "src",
          image: "xlink:href",
          "b-img": "src",
          "b-img-lazy": ["src", "blank-src"],
          "b-card": "img-src",
          "b-card-img": "img-src",
          "b-card-img-lazy": ["src", "blank-src"],
          "b-carousel-slide": "img-src",
          "b-embed": "src"
        }
        return options
      })
  }
})