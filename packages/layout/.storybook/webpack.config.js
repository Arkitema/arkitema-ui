const path = require('path')

module.exports = async ({ config }) => {
  config.module.rules.push({
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'assets/',
          publicPath: 'assets/',
        },
      },
    ],
    include: path.resolve(__dirname, '../src'),
  })

  return config
}
