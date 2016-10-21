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

    export default {
        computed: {
            getTabList () {
                return this.$store.getters.getTabList;
            }
        },
        mounted () {
            this.setTabActive(this.getTabList, 'view');
        },
        methods: {
            tabChange (tabName) {
                Router.push('/shoppingcart/' + tabName);
            },
            setTabActive (tablist, value) {
                this.$store.dispatch('setTabActive', {
                    tablist,
                    value
                });
            }
        },
        components: {
            Tabs
        }
    };
</script>
