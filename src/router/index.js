var VueRouter = require('vue-router');
var Vue = require('vue');

Vue.use(VueRouter);
var router = new VueRouter();

router.map({
    '*': {
        component: function(resolve) {
            require(['pages/loginPage'], resolve);
        }
    },
    '/login': {
        component: function(resolve) {
            require(['pages/loginPage'], resolve);
        }
    },
    '/regist': {
        component: function(resolve) {
            require(['pages/registerPage'], resolve);
        }
    }
});

var start = function(component, tag) {
    router.start(component, tag);
};

module.exports = {
    start: start
};
