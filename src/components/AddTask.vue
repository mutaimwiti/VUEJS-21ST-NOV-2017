<template>
    <div>
        <h3>Add task</h3>
        <form v-on:submit.prevent="add">
            <label for="task">Enter  a task</label>
            <input id="task" v-model.trim="task">
        </form>
    </div>
</template>

<script>
    import store from '../store/store'

    export default {
        store: store,

        name: 'AddTask',

        data(){
            return{
                task: ''
            }
        },

        methods:{
            add(){
                store.dispatch({ type: 'addTask', task: this.task  })
            }
        }
    }
</script>
