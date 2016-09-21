<template>
    <div id="login-page">
        <bs-input
            :value.sync="input"
            label="Username"
            help="Only allows lowercase letters and numbers."
            error="Insert username"
            pattern="^[a-z][a-z0-9]+$"
            :mask="mask"
            minlength="5"
            icon>
        </bs-input>
        <bs-input
            :value.sync="input"
            label="Password"
            help="Only allows lowercase letters and numbers."
            error="Insert username"
            pattern="^[a-z][a-z0-9]+$"
            :mask="mask"
            minlength="5"
            icon>
        </bs-input>
    </div>
</template>
<script>
    var Input = require('vue-strap').input;

    module.exports = {
        data: function() {
            return {
                input: ''
            }
        },
        methods: {
            mask: function (value) {
                return value.toLowerCase();
            }
        },
        components: {
            'bs-input': Input
        }
    };
</script>
