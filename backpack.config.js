
module.exports = {
  webpack: (config, options, webpack) => {
    config.module.rules = [
      {
        test: /node_modules[/\\]jsonstream/i,
        loader: 'shebang-loader'
      }
    ]
    config.entry.main = './server/index.js'
    return config
  }
}
