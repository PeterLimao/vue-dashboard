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

    .tabs-indicator {
        background: #2db7f5;
        width: 100%;
        position: relative;
        height: 2px;
        transition: all 0.2s ease;
    }
</style>
<template>
    <div id="tabs">
        <ul class="tabs-items">
            <li class="tabs-item" @click="changeIndicator($event)">
                VIEW
            </li>
            <li class="tabs-item" @click="changeIndicator($event)">
                DOC
            </li>
        </ul>
        <div class="tabs-indicator" :style="indicatorStyle"></div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                indicatorStyle: {
                    width: '0px',
                    left: '0'
                }
            }
        },
        ready () {
            let li = this.$el.querySelector('.tabs-item');
            this.indicatorStyle.width = li.offsetWidth + 'px';
        },
        methods: {
            changeIndicator (event) {
                this.indicatorStyle.left = event.currentTarget.offsetLeft + 'px';
            }
        }
    };
</script>
