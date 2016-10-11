<template>
    <div id="todomvc-page">
        <tabs></tabs>
        todomvc page
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
        components: {
            tabs
        }
    };
</script>
