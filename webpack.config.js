const HtmlWebpackPlugin = require('html-webpack-plugin');
const package = require('./package.json');
const path = require("path");

module.exports = {
    entry: {
        app: './src/App/App.tsx',
        vendor: Object.keys(package.dependencies)
    },
    output: {
        path: path.join(__dirname, './build/'),
        filename: '[name].bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loader: 'ts-loader'
            },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },
    watch: true,
    devtool: "source-map",
    devServer: {
        port: 9000
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            template: './src/App/index.html'
        }),
    ]
}
