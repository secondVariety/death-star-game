const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
/*const devMode = process.env.NODE_ENV !== 'production';*/

module.exports = {
    entry: "./src/js/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "js/bundle.js"
    },
    devServer: {
        contentBase: "./dist/"
    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            path: path.resolve(__dirname, "dist"),
            filename: 'css/bundle.css'
        })
    ],
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            /*options: {
              presets: ['@babel/preset-env']
            }*/
          }
        },
        {
          // Apply rule for .sass, .scss or .css files
          test: /\.(le|c)ss$/,
          // Set loaders to transform files.
          // Loaders are applying from right to left(!)
          // The first loader will be applied after others
          use: [
            {
              loader: MiniCssExtractPlugin.loader
            },
            {
              // This loader resolves url() and @imports inside CSS
              loader: "css-loader",
            },
            {
              // First we transform LESS to standard CSS
              loader: "less-loader",
              options: {
                implementation: require("less")
              }
            }
          ]
        }
    ]
    },
    watch: true,
};
