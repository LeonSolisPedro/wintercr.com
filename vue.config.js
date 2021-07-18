module.exports = {
  configureWebpack: {
    devtool: "source-map",
    module: {
      rules: [
        { test: /\.(jsfake)$/i, use: [{ loader: 'file-loader', options: { name: 'supportedbrowsers/[name].[contenthash:7].js', } }] },
        { test: /\.(cssfake)$/i, use: [{ loader: 'file-loader', options: { name: 'supportedbrowsers/[name].[contenthash:7].css', } }] }
      ]
    }
  },
  productionSourceMap: false,
  chainWebpack: config => {
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
}