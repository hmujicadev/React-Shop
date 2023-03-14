const path = require('path');
const HtmlWebpackPLugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
  entry:'./src/index.js',
  mode:'development',
  devtool:'source-map',
  output:{ 
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[fullhash].js',
    publicPath:'/'
  },
  resolve:{
      extensions: ['.js','.jsx'],
      alias:{
        '@components':path.resolve(__dirname, 'src/components/'),
        '@containers':path.resolve(__dirname, 'src/containers/'),
        '@styles': path.resolve(__dirname, 'src/styles/'),
        '@icons': path.resolve(__dirname, 'src/assets/icons/'),
        '@logos': path.resolve(__dirname, 'src/assets/logos/'),
        '@hooks': path.resolve(__dirname, 'src/hooks/'),
      }
  },
  module:{
    rules:[
      {
        test: /\.js$|jsx/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.html$/,
        use: 'html-loader'
      },
      {
        test: /\.(scss|css)$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.png$|svg/,
        type:'asset'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPLugin({
      template: './public/index.html',
      filename: './index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ],
  devServer: {
    static:{
      directory: path.join(__dirname, 'dist')
    },
    historyApiFallback: true,
    compress:true,
    open:true,
    port:3005
  }
}