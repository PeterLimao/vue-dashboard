var Vue = require('vue');
var App = require('./app.vue');
var Router = require('router');
require('bootstrap/dist/css/bootstrap.min.css');

Vue.config.debug = process.env.NODE_ENV === 'production' ? false : true;

Router.start(App, 'app');
