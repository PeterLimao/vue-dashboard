<template>
    <header id="header">
        <navbar placement="top" type="default">
            <a class="navbar-brand">VueStrap</a>
        </navbar>
    </header>
</template>
<script>
    var NavBar = require('vue-strap').navbar;

    module.exports = {
        components: {
            navbar: NavBar
        }
    };
</script>
