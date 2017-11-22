<template>
    <div>
        <h3>Save Load Tasks</h3>
        <form>
            <component :is="currentButton" v-on:load="load" v-on:save="save"></component>
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
                task: '',
                currentButton: 'load-button'
            }
        },

        methods: {
            save() {
                this.currentButton = 'load-button'
                axios.post('http://vuetasks.app', {
                    tasks: store.state.tasks
                })
                    .then(response => {})
                    .catch(e => {
                        //do something about the errors
                    })
            },

            load(){
                this.currentButton = 'save-button'
                axios.get('http://vuetasks.app')
                    .then(response => {
                        // JSON responses are automatically parsed.
                        store.commit('initLoadedTasks', {tasks: response.data})
                    })
                    .catch(e => {

                    })
            }
        },

        components: {
            'load-button': {
                template: '<button type="button" v-on:click="$emit(`load`)">click to load saved tasks</button>'
            },

            'save-button': {
                template: '<button type="button" v-on:click="$emit(`save`)">click to save current tasks</button>'
            }
        }
    }
</script>
