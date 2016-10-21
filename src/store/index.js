import Vuex from 'vuex';
import Vue from 'vue';
import Global from './modules/global';
import Getters from './getters';
import Actions from './actions';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        global: Global
    },
    getters: Getters,
    actions: Actions,
    strict: process.env.NODE_ENV !== 'production'
});
