<style lang="less" scoped>
    #tabs {
        width: 100%;
        margin-bottom: 24px;
    }

    .tabs-items {
        list-style: none;
        position: relative;
        display: flex;
    }

    .tabs-item {
        height: 48px;
        min-width: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 10px;
        cursor: pointer;
    }

    .active {
        color: #2db7f5;
    }

    .tabs-indicator {
        background: #2db7f5;
        width: 100%;
        position: relative;
        height: 2px;
        transition: left 0.2s ease;
    }
</style>
<template>
    <div id="tabs">
        <ul class="tabs-items">
            <li class="tabs-item" v-for="item in tabList" @click="changeTab($event)" :class="{ active: item.isActive }" :name="item.value">
                {{ item.value | toUpper}}
            </li>
        </ul>
        <div class="tabs-indicator" :style="indicatorStyle"></div>
    </div>
</template>
<script>
    import { globalGetter } from 'store/getters';
    import { globalAction } from 'store/actions';

    export default {
        data () {
            return {
                indicatorStyle: {
                    width: '0px',
                    left: '0px'
                }
            }
        },
        ready () {
            let tabs = this.$el.querySelectorAll('.tabs-item');
            this.tabList.forEach((tabObject, index) => {
                if (tabObject.isActive) {
                    this.indicatorStyle.width = tabs[index].offsetWidth + 'px';
                }
            });
        },
        methods: {
            changeTab (event) {
                let targetDom = event.currentTarget;
                this.changeIndicator(targetDom);
                this.setTabActive(this.tabList, targetDom.getAttribute('name'));
                this.$dispatch('tabChange', targetDom.getAttribute('name'));
            },
            changeIndicator (targetDom) {
                this.indicatorStyle.left = targetDom.offsetLeft + 'px';
                this.indicatorStyle.width = targetDom.offsetWidth + 'px';
            }
        },
        vuex: {
            getters: {
                tabList: globalGetter.getTabList
            },
            actions: {
                setTabActive: globalAction.setTabActive
            }
        }
    };
</script>
