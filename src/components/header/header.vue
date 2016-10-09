<style scoped>
    #header {
        display: flex;
        height: 4rem;
        width: 100%;
        padding: 0 3rem;
        background: #2db7f5;
        align-items: center;
    }

    span {
        font-size: 1.5rem;
        font-weight: 300;
        color: #ffffff;
    }
</style>
<template>
    <header id="header">
        <span>
            Vue-Demos pageCount: {{ getAllPageCount }}
        </span>
    </header>
</template>
<script>
    import { getAllPageCount } from 'store/modules/global/getters';

    export default {
        vuex: {
            getters: {
                getAllPageCount
            }
        }
    };
</script>
