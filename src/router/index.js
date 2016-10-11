import VueRouter from 'vue-router';
import Vue from 'vue';
import commonSubRoutes from './commonSubRoutes';

Vue.use(VueRouter);

const router = new VueRouter();

router.map({
    '*': {
        component (resolve) {
            require(['pages/shoppingCartPage'], resolve);
        }
    },
    '/shoppingCart': {
        component (resolve) {
            require(['pages/shoppingCartPage'], resolve);
        },
        subRoutes: commonSubRoutes
    },
    '/todomvc': {
        component (resolve) {
            require(['pages/todomvcPage'], resolve);
        },
        subRoutes: commonSubRoutes
    }
});

const start = function(component, tag) {
    router.start(component, tag);
};

export {
    start,
    router
};
