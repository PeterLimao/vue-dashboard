import vue from 'vue';
import app from './app.vue';
import { start, router } from 'router';
import store from 'store';
import filter from 'filter';
import { sync } from 'vuex-router-sync';
import 'radon-ui/dist/static/css/dist.css';

vue.config.debug = process.env.NODE_ENV === 'production' ? false : true;

sync(store, router);

Object.keys(filter).forEach((key) => {
    vue.filter(key, filter[key]);
});

start(app, 'app');
