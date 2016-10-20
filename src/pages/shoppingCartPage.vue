<template>
    <div id="shopping-cart-page">
        <tabs @tabChange="tabChange"></tabs>
        shoppingCartPage
        <router-view></router-view>
    </div>
</template>
<script>
    import Tabs from 'components/tabs';
    import Router from 'router';
    import { globalAction } from 'store/actions';
    import { globalGetter } from 'store/getters';

    export default {
        vuex: {
            getters: {
                tabList: globalGetter.getTabList
            },
            actions: {
                setTabActive: globalAction.setTabActive
            }
        },
        mounted () {
            this.setTabActive(this.tabList, 'view');
        },
        methods: {
            tabChange (tabName) {
                Router.push('/shoppingcart/' + tabName);
            }
        },
        components: {
            Tabs
        }
    };
</script>
