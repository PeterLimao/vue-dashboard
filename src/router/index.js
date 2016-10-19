import VueRouter from 'vue-router';
import Vue from 'vue';
import commonSubRoutes from './commonSubRoutes';

Vue.use(VueRouter);

const routes = [
    {
        path: '*',
        component (resolve) {
            require(['pages/shoppingCartPage'], resolve);
        }
    },
    {
        path: '/shoppingCart',
        component (resolve) {
            require(['pages/shoppingCartPage'], resolve);
        },
        children: commonSubRoutes
    },
    {
        path: '/todomvc',
        component (resolve) {
            require(['pages/todomvcPage'], resolve);
        },
        children: commonSubRoutes
    }
];

const router = new VueRouter({
    routes
});

export default router;
