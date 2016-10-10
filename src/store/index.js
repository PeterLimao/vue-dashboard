import vuex from 'vuex';
import vue from 'vue';
import createLogger from 'vuex/logger';

import global from './modules/global';
import shoppingCart from './modules/shoppingCart';
import todomvc from './modules/todomvc';

vue.use(vuex);

export default new vuex.Store({
    modules: {
        global
    },
    strict: process.env.NODE_ENV !== 'production',
    middlewares: [process.env.NODE_ENV === 'production'? '': createLogger]
});
