import Vuex from 'vuex';
import Vue from 'vue';

import Global from './modules/global';
import ShoppingCart from './modules/shoppingCart';
import Todomvc from './modules/todomvc';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        global: Global,
        shoppingCart: ShoppingCart,
        todomvc: Todomvc
    },
    strict: process.env.NODE_ENV !== 'production'
});
