// const webpack = require('webpack');
const path = require('path');

// Plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackTemplate = require('html-webpack-template');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

// 环境变量
const { onServer } = process.env;


const ExtractLessPlugin = new ExtractTextPlugin({ filename: 'styles/[name]-bundle.css', publicPath: '/' });

const HTMLTemplate = {
    inject: false,
    template: HtmlWebpackTemplate,
    appMountId: 'app',
    links: [
        {
            href: 'http://fontawesome.hukaihe.com/public/image/logo_gold.png',
            rel: 'icon',
            sizes: '32x32',
            type: 'image/png',
        },
        'https://cdn.bootcss.com/animate.css/3.5.2/animate.css',
        'https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.css',
    ],
    scripts: [
        // 'https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js',
        // 'https://cdn.bootcss.com/layer/3.1.0/layer.js',
    ],
};


module.exports = {

    entry: {
        editor: './src/editor/index.js',
        pageManager: './src/pageManager/index.js',
        // home: './src/home/index.js',
        test: './src/test/index.js',
    },

    output: {
        filename: 'javascripts/[name]-bundle.js',
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
                use: ExtractLessPlugin.extract([
                    'css-loader',
                    'less-loader',
                ]),
            },
            {
                test: /\.css$/i,
                use: ExtractLessPlugin.extract([
                    'css-loader',
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
                            name: 'images/[name].[ext]',
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
        ExtractLessPlugin,
        new HtmlWebpackPlugin({
            title: 'HSiter editor',
            filename: 'editor.html',
            chunks: ['editor'],
            ...HTMLTemplate,
        }),
        new HtmlWebpackPlugin({
            title: 'HSiter Page Manager',
            filename: 'pageManager.html',
            chunks: ['pageManager'],
            ...HTMLTemplate,
        }),
        new HtmlWebpackPlugin({
            title: 'HSiter test',
            filename: 'test.html',
            chunks: ['test'],
            ...HTMLTemplate,
        }),
        ...(onServer ? [] : [new CleanWebpackPlugin([path.join(__dirname, 'build')])]),
    ],

    resolve: {
        extensions: ['.js', '.jsx'],
    },

    mode: 'development',
};
