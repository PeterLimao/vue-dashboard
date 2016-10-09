<style lang="less" scoped>
    #nav-bar {
        height: 100%;
    }

    ul {
        padding-left: 20px;
    }
</style>
<template>
    <nav id="nav-bar">
        <div>
            <ul>
                <li>
                    <a v-link="{ path: '/shoppingCart' }">shoppingCart</a>
                </li>
                <li>
                    <a v-link="{ path: '/regist' }">regist</a>
                </li>
            </ul>
        </div>
    </nav>
</template>
