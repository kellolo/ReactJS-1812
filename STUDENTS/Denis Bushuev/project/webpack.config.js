const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/app.js'
    },
    devServer: {
        contentBase: path.join(__dirname, './'),
        compress: true,
        port: 8080,
        historyApiFallback: true,
    },
    devtool: 'cheap-inline-module-source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                options: {
                    plugins: [
                        [
                            "@babel/plugin-proposal-class-properties",
                            {
                                "loose": true
                            }
                        ]
                    ]
                }
            },
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, 'src', 'index.html')
        }),
        new MiniCssExtractPlugin({
            filename: 'style/[name].css',
            chunkFilename: '[id].css',
            ignoreOrder: false
        }),
        new OptimizeCssAssetsWebpackPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano')
        })
    ],
}