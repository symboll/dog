const {
  override,
  addWebpackAlias,
  addWebpackResolve
} = require('customize-cra')
const path = require('path')


module.exports = override(
  addWebpackAlias({
    "@": path.resolve(__dirname, "src")
  }),
  addWebpackResolve({
    extensions: ['.jsx', '.js', '.json']
  })
);