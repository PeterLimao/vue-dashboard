<style lang="less" scoped>
    #nav-bar {
        height: 100%;
    }

    ul {
        padding-right: 20px;
    }

    .links {
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
                <li v-for="item in getPageList">
                    <router-link :to="item.url">
                        <div class="links">{{ item.name | toUpper }}</span>
                    </router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>
<script>
    import { globalGetter } from 'store/getters';

    export default {
        vuex: {
            getters: {
                getPageList: globalGetter.getPageList
            }
        }
    };
</script>
