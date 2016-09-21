var Vue = require('vue');
var App = require('./app.vue');

Vue.config.debug = process.env.NODE_ENV === 'production' ? false : true;

new Vue({
    el: 'body',
    components: {
        app: App
    }
});
