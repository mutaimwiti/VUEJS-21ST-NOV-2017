<template>
    <div>
        <h3>Add task</h3>
        <!--A dynamic prop: binds prop to data on parent-->
        <current-item v-bind:item="task" v-on:clear="clearTask"></current-item>
        <form v-on:submit.prevent="add()">
            <label for="task">Enter  a task</label>
            <input id="task" v-model.trim="task" v-focus>
        </form>
        <task-count>
            <label slot="pending">Pending count: {{pendingCount}}</label>
            <label slot="finished">Finsihed count: {{finishedCount}}</label>
        </task-count>
    </div>
</template>

<script>
    import store from '../../store/store'
    import CurrentItem from '../CurrentItem.vue';
    import TaskCount from '../TaskCount.vue';

    export default {
        components: {CurrentItem, TaskCount},
        store: store,

        name: 'AddTask',

        data(){
            return {
                task: ''
            }
        },

        methods: {
            add: function () {
                store.commit('addTask', {task: this.task});
                this.task = '';
            },

            clearTask: function(){
                this.task = '';
            }
        },

        directives: {
            focus: {
                // directive definition
                inserted: function (el) {
                    el.focus()
                }
            }
        },

        computed: {
            pendingCount: function () {
                return store.state.tasks.filter(function (task) {
                    return task.status === 0;
                }).length
            },

            finishedCount: function () {
                return store.state.tasks.filter(function (task) {
                    return task.status === 1;
                }).length
            }
        }
    }
</script>
