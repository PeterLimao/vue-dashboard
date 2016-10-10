import vue from 'vue';
import app from './app.vue';
import { start } from 'router';
import filter from 'filter';
import 'radon-ui/dist/static/css/dist.css';

vue.config.debug = process.env.NODE_ENV === 'production' ? false : true;

Object.keys(filter).forEach((key) => {
    vue.filter(key, filter[key]);
});

start(app, 'app');
