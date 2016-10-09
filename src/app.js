import Vue from 'vue';
import App from './app.vue';
import { start } from 'router';
import 'radon-ui/dist/static/css/dist.css';

Vue.config.debug = process.env.NODE_ENV === 'production' ? false : true;

start(App, 'app');
