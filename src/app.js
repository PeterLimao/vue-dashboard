import Vue from 'vue';
import App from './app.vue';
import Router from 'router';
import Store from 'store';
import 'filter';
import 'radon-ui/dist/static/css/dist.css';

Vue.config.debug = process.env.NODE_ENV === 'production';

new Vue({
    el: '#app',
    router: Router,
    store: Store,
    mixins: [App]
});
