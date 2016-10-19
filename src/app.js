import Vue from 'vue';
import App from './app.vue';
import Router from 'router';
import Store from 'store';
import Filter from 'filter';
import 'radon-ui/dist/static/css/dist.css';

Vue.config.debug = process.env.NODE_ENV === 'production' ? false : true;

Object.keys(Filter).forEach((key) => {
    Vue.filter(key, Filter[key]);
});

new Vue({
    el: '#app',
    router: Router,
    store: Store,
    ...App
});
