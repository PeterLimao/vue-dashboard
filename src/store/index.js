import Vuex from 'vuex';
import Vue from 'vue';
import Global from './modules/global';
import Getters from './getters';
import Actions from './actions';

Vue.use(Vuex);

const store = new Vuex.Store({
    getters: Getters,
    actions: Actions,
    strict: process.env.NODE_ENV !== 'production'
});

store.registerModule('global', Global);

export default store;

