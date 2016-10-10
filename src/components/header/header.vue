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
            Vue-Demos
        </span>
        <div class="page-count">
            <span>count:</span>
            <rd-tag :value="getAllPageCount.toString()"></rd-tag>
        </div>
    </header>
</template>
<script>
    import { getAllPageCount } from 'store/modules/global/getters';
    import { rdTag } from 'radon-ui';

    export default {
        vuex: {
            getters: {
                getAllPageCount
            }
        },
        components: {
            rdTag
        }
    };
</script>
