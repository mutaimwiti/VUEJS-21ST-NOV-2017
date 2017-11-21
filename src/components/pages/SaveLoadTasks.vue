<template>
    <div>
        <h3>Save Load Tasks</h3>
        <form>
            <!--button type="button" v-on:click="save()">click to save tasks</button-->
            <button type="button" v-on:click="load()">click to load saved tasks</button>
        </form>
    </div>
</template>

<script>
    import store from '../../store/store'
    import axios from 'axios';

    export default {
        store: store,

        name: 'SaveLoadTasks',

        data(){
            return {
                task: ''
            }
        },

        methods: {
            /*save() {
                axios.post('http://vuetasks.app', {
                    tasks: store.state.tasks
                })
                    .then(response => {})
                    .catch(e => {
                        //do something about the errors
                    })
            },*/

            load(){
                axios.get('http://vuetasks.app')
                    .then(response => {
                        // JSON responses are automatically parsed.
                        store.commit('initLoadedTasks', {tasks: response.data})
                    })
                    .catch(e => {

                    })
            }
        }
    }
</script>
