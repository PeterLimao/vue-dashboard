<style lang="less" scoped>
    .content {
        width: 100%;
        height: 100%;
        display: flex;
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
        <div class="content">
            <div class="content-left">
                <nav-bar></nav-bar>
            </div>
            <div class="content-right">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script>
    var NavBar = require('components/navBar');
    var Header = require('components/header');

    module.exports = {
        components: {
            'nav-bar': NavBar,
            'v-header': Header
        }
    };
</script>
