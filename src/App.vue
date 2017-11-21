<template>
    <div id="app">
        <router-link :to="{ name: 'AddTask' }">Add Task</router-link>
        <router-link :to="{ name: 'PendingTasks' }">Pending Tasks</router-link>
        <router-link :to="{ name: 'FinishedTasks' }">Finished Tasks</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'app'
    }
</script>