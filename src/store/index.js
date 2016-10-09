import Vuex from 'vuex';
import Vue from 'vue';
import CreateLogger from 'vuex/logger';

import Global from './modules/global';
import ShoppingCart from './modules/shoppingCart';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        Global,
        ShoppingCart
    },
    strict: process.env.NODE_ENV !== 'production',
    middlewares: [process.env.NODE_ENV === 'production'? '': CreateLogger]
});
