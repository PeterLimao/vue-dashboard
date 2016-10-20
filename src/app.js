import Vue from 'vue';
import App from './app.vue';
import { start } from 'router';
import Filter from 'filter';
import 'radon-ui/dist/static/css/dist.css';

Vue.config.debug = process.env.NODE_ENV === 'production';

Object.keys(Filter).forEach((key) => {
    Vue.filter(key, Filter[key]);
});

start(App, 'app');
