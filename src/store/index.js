var Vuex = require('vuex');
var Vue = require('vue');

var Global = require('./modules/global');
var Cart = require('./modules/cart');
var Produst = require('./modules/produst');

Vue.use(Vuex);

module.exports = new Vuex.Store({
    modules: {
        global: Global,
        cart: Cart,
        produst: Produst
    }
});
