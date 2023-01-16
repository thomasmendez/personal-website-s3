const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const { ModuleFederationPlugin } = require('webpack').container;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const packageJson = require('./package.json');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'src', 'index.js'),
  // output: {
  //   path: path.join(__dirname, 'dist'),
  // },
  output: {
    publicPath: 'http://localhost:7000/',
  },
  watchOptions: {
    aggregateTimeout: 10000,
  },
  devServer: {
    port: 7000,
    hot: true,
    open: true,
    historyApiFallback: true,
    watchFiles: ['src/**/*.js', 'src/**/*.jsx', 'src/**/*'],
    devMiddleware: {
      writeToDisk: true,
    },
    client: {
      overlay: {
        errors: false,
        warnings: false,
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
      {
        test: /\.(jsx|js)$/,
        include: path.resolve(__dirname, 'node_modules'),
        use: ['babel-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|mp4|pdf)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      },
      {
        test: /\.(jsx|js)$/,
        include: [path.resolve(__dirname, './src')],
        use: ['babel-loader', 'eslint-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.vue'],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        vueApp: 'vue@http://localhost:8082/remoteEntry.js',
      },
      // shared: packageJson.dependencies,
      // shared: {react: {singleton: true}, 'react-dom': {singleton: true}},
      // shared: {
      //   'react-dom': { singleton: true },
      // },
      shared: packageJson.dependencies,
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html'),
      favicon: path.join(__dirname, 'public', 'favicon.ico'),
    }),
    new ESLintPlugin({
      cache: true,
      eslintPath: require.resolve('eslint'),
      resolvePluginsRelativeTo: __dirname,
      ignore: true,
      useEslintrc: true,
      extensions: ['.js', '.jsx'],
      files: [path.join(__dirname, 'src')],
      fix: true,
      emitError: true,
      failOnError: false,
      emitWarning: true,
      failOnWarning: false,
    }),
    new Dotenv({
      path: './.env',
      safe: true,
    }),
    new VueLoaderPlugin(),
  ],
};
