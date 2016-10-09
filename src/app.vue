<style lang="less">
    .wrapper {
        padding: 1rem 4rem 4rem;
    }

    .content {
        width: 100%;
        height: 100%;
        display: flex;
        background: #ffffff;
    }

    body {
        background: #f1f4f9;
    }

    .content-left {
        width: 20%;
    }

    .content-right {
        width: 80%;
    }
</style>
<template>
    <div id="app">
        <v-header></v-header>
        <div class="wrapper">
            <div class="content">
                <div class="content-left">
                    <nav-bar></nav-bar>
                </div>
                <div class="content-right">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Store from 'store';
    import NavBar from 'components/navBar';
    import Header from 'components/header';

    export default {
        store: Store,
        components: {
            NavBar,
            'v-header': Header
        }
    };
</script>
