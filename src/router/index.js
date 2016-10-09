import VueRouter from 'vue-router';
import Vue from 'vue';

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
        }
    },
    '/regist': {
        component (resolve) {
            require(['pages/registerPage'], resolve);
        }
    }
});

export const start = function(component, tag) {
    router.start(component, tag);
};
