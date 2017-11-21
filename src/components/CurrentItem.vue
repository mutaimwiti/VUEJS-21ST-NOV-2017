<template>
    <div>
        <template v-if="item">
            <label>{{item}}</label>
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