<style lang="less" scoped>
    #nav-bar {
        height: 100%;
    }

    ul {
        padding-left: 20px;
    }

    a {
        font-size: 18px;
        &:hover {
            border-left: 1px solid #1D976C;
            color: #1D976C;
            background: #fff !important;
        }
        &:focus {
            border-left: 2px solid #1D976C;
            color: #1D976C;
            font-weight: bold;
            background: #fff !important;
        }
    }

</style>
<template>
    <nav id="nav-bar">
        <affix offset="50">
            <ul class="nav bs-docs-sidenav">
                <li>
                    <a v-link="{ path: '/login' }">login</a>
                </li>
                <li>
                    <a v-link="{ path: '/regist' }">regist</a>
                </li>
            </ul>
        </affix>
    </nav>
</template>
<script>
    var Affix = require('vue-strap').affix;

    module.exports = {
        components: {
            affix: Affix
        }
    };
</script>
