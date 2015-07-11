# Commons Confing
module.exports =
  client:
    progress: true
    output:
      filename: './public/scripts/app.js'
    devtool: 'inline-source-map'
    resolve:
      extensions: ['', '.js', '.jsx']
    module:
      loaders: [
        {
          test: /\.js$|\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel?optional[]=runtime&stage=0'
        }         
      ]