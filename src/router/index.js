import VueRouter from 'vue-router';
import Vue from 'vue';
import CommonSubRoutes from './commonSubRoutes';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component (resolve) {
            require(['pages/shoppingCartPage'], resolve);
        },
        children: CommonSubRoutes
    },
    {
        path: '/shoppingcart',
        component (resolve) {
            require(['pages/shoppingCartPage'], resolve);
        },
        children: CommonSubRoutes
    },
    {
        path: '/todomvc',
        component (resolve) {
            require(['pages/todomvcPage'], resolve);
        },
        children: CommonSubRoutes
    }
];

const router = new VueRouter({
    routes
});

export default router;
