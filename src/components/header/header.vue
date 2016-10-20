<style lang="less" scoped>
    #header {
        display: flex;
        height: 4rem;
        width: 100%;
        padding: 0 3rem;
        background: #2db7f5;
        align-items: center;
        position: relative;
    }

    .logo {
        font-size: 1.5rem;
        font-weight: 300;
        color: #ffffff;
    }

    .page-count {
        color: #ffffff;
        height: 100%;
        position: absolute;
        right: 0;
        display: flex;
        align-items: center;
        padding-right: 20px;
        span {
            margin-right: 10px;
        }
    }
</style>
<template>
    <header id="header">
        <span class="logo">
            Peter-Demos
        </span>
        <div class="page-count">
            <span>count: {{ getAllPageCount }}</span>
        </div>
    </header>
</template>
<script>
    import { globalGetter } from 'store/getters';

    export default {
        vuex: {
            getters: {
                getAllPageCount: globalGetter.getAllPageCount
            }
        }
    };
</script>
