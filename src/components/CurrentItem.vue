<template>
    <div>
        <template v-if="item">
            <label>{{item}}</label>
            <button type="button" @click="$emit('clear')" v-danger>Clear</button>
            <br>
            <br>
        </template>
    </div>
</template>

<script>
    export default {
        name: 'current-item',

        props: [
            'item'
        ]
    }
</script>