const path = require ('path')
const ext = require ('webpack-node-externals')

module.exports = {
    entry: {
        main: path.resolve (__dirname, 'src', 'server', 'server.js')
    },
    output: {
        path: path.join (__dirname, 'dist', 'server'),
        publicPath: "",
        filename: 'server.js'
    },
    target: 'node', 
    node: {
        __dirname: false,
        __filename: false
    },
    externals: [ext ()],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
        ]
    },
}