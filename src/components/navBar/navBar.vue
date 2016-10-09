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
                <li v-for="item in list" v-link="{ path: item }">
                    <span>{{ item | subString 1 }}</span>
                </li>
            </ul>
        </div>
    </nav>
</template>
<script>
    export default {
        data () {
            return {
                list: [
                    '/shoppingCart',
                    '/regist'
                ]
            }
        }
    };
</script>
