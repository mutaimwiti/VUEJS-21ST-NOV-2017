<template>
    <div>
        <h1>Finished tasks</h1>
        <template v-if="tasks.length">
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="task in tasks">
                    <td>{{task.name}}</td>
                    <td>
                        <button v-on:click.prevent="deleteTask(task)">Delete</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </template>
        <template v-else>
            You don't have any finished tasks!
        </template>
    </div>
</template>

<script>
    import store from '../store/store'

    export default {

        name: 'FinishedTasks',

        computed: {
            tasks() {
                return store.state.tasks.filter(function (task) {
                    return task.status === 1;
                })
            }
        },

        methods: {
            deleteTask(task){
                store.commit('deleteTask', {task: task});
            }
        }

    }
</script>
