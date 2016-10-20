var Config = require('./webpack.base.config');
var Webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
var Dashboard = require('webpack-dashboard');
var DashboardPlugin = require('webpack-dashboard/plugin');
var dashboard = new Dashboard();

Config.entry.app.unshift('webpack-dev-server/client?http://localhost:8080/', 'webpack/hot/dev-server');
Config.output.filename = '[name].[hash:7].js';
Config.output.chunkFilename = '[name].[hash:7].js';
Config.module.loaders.forEach(function (loader) {
    if (loader.loader === 'url') {
        loader.query.name = '[name].[hash:7].[ext]';
    }
});

Config.plugins = (Config.plugins || []).concat([
    new ExtractTextWebpackPlugin('[name].[hash:7].css'),
    new Webpack.HotModuleReplacementPlugin(),
    new DashboardPlugin(dashboard.setData)
]);

Config.debug = true;
Config.devtool = 'cheap-source-map';

var compiler = Webpack(Config);

var server = new WebpackDevServer(compiler, {
    historyApiFallback: true,
    hot: true,
    inline: true,
    quiet: true
});

server.listen(8080, function (err) {
    if (err) {
        console.log(err);
    }
    console.log('listening at localhost:8080');
});
