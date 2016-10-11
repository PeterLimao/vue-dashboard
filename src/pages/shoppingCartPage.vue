<template>
    <div id="shopping-cart-page">
        <tabs></tabs>
        shoppingCartPage
        <router-view></router-view>
    </div>
</template>
<script>
    import tabs from 'components/tabs';
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
        ready () {
            this.setTabActive(this.tabList, 'view');
        },
        events: {
            tabChange (tabName) {
                this.$route.router.go('/shoppingCart/' + tabName);
            }
        },
        components: {
            tabs
        }
    };
</script>
