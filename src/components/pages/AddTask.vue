<template>
    <div>
        <h3>Add task</h3>
        <form v-on:submit.prevent="add()">
            <label for="task">Enter  a task</label>
            <input id="task" v-model.trim="task" v-focus>
        </form>
    </div>
</template>

<script>
    import store from '../store/store'

    export default {
        store: store,

        name: 'AddTask',

        data(){
            return {
                task: ''
            }
        },

        methods: {
            add() {
                store.commit('addTask', {task: this.task});
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
        }
    }
</script>
