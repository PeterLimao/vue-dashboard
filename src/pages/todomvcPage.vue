<template>
    <div id="todomvc-page">
        <tabs @tabChange="tabChange"></tabs>
        todomvc page
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
                Router.push('/todomvc/' + tabName);
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
