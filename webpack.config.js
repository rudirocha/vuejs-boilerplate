module.exports = {
  module: {
    rules: [
      // ... other rules omitted

      // this will apply to both plain `.scss` files
      // AND `<style lang="scss">` blocks in `.vue` files
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      }, {
        test: /\.vue$/,
        loader: 'vue'
      }, {
        test: /\.s[a|c]ss$/,
        loader: 'style!css!sass'
      }]
  },
  vue: {
    loaders: {
      scss: 'style!css!sass'
    }
  }
  // plugin omitted
}
