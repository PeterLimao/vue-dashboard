<style lang="less" scoped>
    #nav-bar {
        height: 100%;
    }

    ul {
        padding-right: 20px;
    }

    li {
        padding: 1rem 2rem;
        font-size: 0.8rem;
        cursor: pointer;
        &:hover {
            background: #eaf8fe;
            color: #2db7f5;
        }
    }
</style>
<template>
    <nav id="nav-bar">
        <div>
            <ul>
                <li v-for="item in getPageList" v-link="{ path: item.url }">
                    <span>{{ item.url | subString 1 }}</span>
                </li>
            </ul>
        </div>
    </nav>
</template>
<script>
    import { getPageList } from 'store/modules/global/getters';

    export default {
        vuex: {
            getters: {
                getPageList
            }
        }
    };
</script>
