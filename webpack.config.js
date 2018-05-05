// const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackTemplate = require('html-webpack-template');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

// const CleanWebpackPlugin = require('clean-webpack-plugin');

const editorStyle = new ExtractTextPlugin({ filename: 'style/[name]-bundle.css', publicPath: '/' });

const HTMLTemplate = {
    inject: false,
    template: HtmlWebpackTemplate,
    appMountId: 'app',
    links: [
        'https://cdn.bootcss.com/animate.css/3.5.2/animate.css',
        'https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.css',
    ],
    scripts: [
        'https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js',
        'https://cdn.bootcss.com/layer/3.1.0/layer.js',
    ],
};

module.exports = {

    entry: {
        editor: './src/editor/index.js',
        // page_manager: './src/page_manager/index.js',
        // home: './src/home/index.js',
    },

    output: {
        filename: 'javascript/[name]-bundle.js',
        path: path.resolve('./build/'),
        publicPath: '/',
    },

    devtool: 'inline-source-map',

    devServer: {
        contentBase: './build',
    },

    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.less$/i,
                use: editorStyle.extract([
                    'css-loader',
                    'less-loader',
                ]),
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            context: 'src',
                            output: '/build',
                            publicPath: '/',
                            name: 'image/[name].[ext]',
                        },
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true,
                        },
                    },
                ],
            },
        ],
    },

    plugins: [
        editorStyle,
        new HtmlWebpackPlugin({
            title: 'HSiter editor',
            filename: 'editor.html',
            chunks: ['editor'],
            ...HTMLTemplate,
        }),
        // new CleanWebpackPlugin([path.join(__dirname, 'build')]),
    ],

    resolve: {
        extensions: ['.js', '.jsx'],
    },

    mode: 'development',
};
