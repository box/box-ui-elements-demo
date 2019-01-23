const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
    bail: true,
    devtool: 'inline-source-map',
    entry: {
        index: path.resolve('src/index.js')
    },
    output: {
        path: path.resolve('dist'),
        filename: '[name].js'
    },
    devServer: {
        host: '0.0.0.0',
    },
    resolve: {
        alias: {
            moment: 'box-ui-elements/es/utils/MomentShim', // Hack to leverage Intl instead
        },
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /(node_modules)/,
            },
            {
                test: /\.s?css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
    ]
};
