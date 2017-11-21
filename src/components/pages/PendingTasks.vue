<template>
    <div>
        <h1>Pending tasks</h1>
        <template v-if="tasks.length">
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th colspan="2">Action</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="task in tasks">
                    <td>{{task.name}}</td>
                    <td>
                        <button v-on:click.prevent="finishTask(task)">Done</button>
                        <button v-on:click.prevent="deleteTask(task)" v-danger>Delete</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </template>
        <template v-else>
            You don't have any pending tasks!
        </template>
    </div>
</template>

<script>
    import store from '../store/store'

    export default {

        name: 'PendingTasks',

        computed: {
            tasks() {
                return store.state.tasks.filter(function (task) {
                    return task.status === 0;
                })
            }
        },

        methods: {
            finishTask(task){
                store.commit('finishTask', {task: task});
            },

            deleteTask(task){
                store.commit('deleteTask', {task: task});
            }
        }

    }
</script>
