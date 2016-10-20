var Path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');
var Webpack = require('webpack');

var mAlias = {
    components: Path.join(__dirname, '../src/components'),
    pages: Path.join(__dirname, '../src/pages'),
    api: Path.join(__dirname, '../src/api'),
    router: Path.join(__dirname, '../src/router'),
    store: Path.join(__dirname, '../src/store'),
    filter: Path.join(__dirname, '../src/filter')
};

module.exports = {
    entry: {
        app: ['./src/app.js'],
        vendor: [
            'vue',
            'vue-router',
            'vuex',
            'vue-resource'
        ]
    },
    output: {
        path: Path.join(__dirname, '../dist'),
        filename: 'js/[name].[hash:7].js',
        chunkFilename: 'js/[name].[hash:7].js'
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpeg|jpg)$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: '../img/[name].[hash:7].[ext]'
                }
            },
            {
                test: /\.css$/,
                loader: ExtractTextWebpackPlugin.extract('style', 'css!postcss')
            },
            {
                test: /\.less$/,
                loader: ExtractTextWebpackPlugin.extract('style', 'css!postcss!less')
            },
            {
                test: /\.(woff|woff2|ttf|eot|svg)$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: '../font/[name].[hash:7].[ext]'
                }
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.vue', '.css', '.jpg', '.less'],
        alias: mAlias
    },
    postcss: function() {
        return [autoprefixer];
    },
    vue: {
        autoprefixer: {
            browsers: ['last 2 versions']
        }
    },
    babel: {
        presets: ['es2015', 'stage-0'],
        plugins: ['transform-runtime']
    },
    plugins: [
        new Webpack.optimize.CommonsChunkPlugin({
            names: ['vendor'],
            minChunks: 2
        }),
        new HtmlWebpackPlugin({
            filename: 'app.html',
            template: 'src/app.html',
            chunks: ['vendor', 'app'],
            inject: true,
            hash: false
        })
    ]
};
