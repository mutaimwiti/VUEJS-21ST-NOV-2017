<template>
    <div>
        <h3>Add task</h3>
        <!--A dynamic prop: binds prop to data on parent-->
        <current-item v-bind:item="task" v-on:clear="clearTask"></current-item>
        <form v-on:submit.prevent="add()">
            <label for="task">Enter  a task</label>
            <input id="task" v-model.trim="task" v-focus>
        </form>
    </div>
</template>

<script>
    import store from '../../store/store'
    import CurrentItem from "../CurrentItem.vue";

    export default {
        components: {CurrentItem},
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
        }
    }
</script>
