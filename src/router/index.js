import Vue from 'vue'
import Router from 'vue-router'

import AddTask from '../components/AddTask.vue'
import EditTask from '../components/EditTask.vue'
import FinishedTasks from '../components/FinishedTasks.vue'
import PendingTasks from '../components/PendingTasks.vue'
import SaveLoadTasks from '../components/SaveLoadTasks.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'AddTask',
            component: AddTask
        },
        {
            path: '/tasks/pending',
            name: 'PendingTasks',
            component: PendingTasks
        },
        {
            path: '/tasks/finished',
            name: 'FinishedTasks',
            component: FinishedTasks
        },
        {
            path: '/tasks/edit/:id',
            name: 'EditTask',
            component: EditTask
        },
        {
            path: '/tasks/save_load',
            name: 'SaveLoadTasks',
            component: SaveLoadTasks
        }
    ]
})
