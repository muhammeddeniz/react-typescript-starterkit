let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let miniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry : './src/index.tsx',
    output : {
        path : path.resolve(__dirname, 'bundle'),
        filename : 'bundle.js'
    },
    module : {
        rules: [
            {
                test : /\.tsx?$/,
                loader : "awesome-typescript-loader",
            },
            {
                enforce : "pre",
                test : /\.js$/,
                loader : "source-map-loader"
            },
            {
                test: /\.scss$/,
                use: [
                    miniCssExtractPlugin.loader,
                    { loader: 'css-loader', options: { sourceMap: true, importLoaders: 1 } },
                    { loader: 'sass-loader', options: { sourceMap: true } },
                ],
            }
        ]
    },

    plugins : [
        new HtmlWebpackPlugin({
            template : "./index.html"
        }),
        new miniCssExtractPlugin({
            filename: 'style.css',
            
          })
    ],
    
    devtool : "source-map", 
    resolve : {
        extensions : [".js", ".jsx", ".ts", ".tsx", ".scss", "css"]
    }
}