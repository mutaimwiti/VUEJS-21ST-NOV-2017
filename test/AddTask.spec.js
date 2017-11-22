import { expect } from 'chai'
import { mount } from 'avoriaz'
import AddTask from '../src/components/pages/AddTask.vue'
import store from '../src/store/store'


describe('AddTask.vue', () => {

    it('task is actually added to the items when user returns', () => {
        const wrapper = mount(AddTask, { store })
        //task to be used for simulation of user input
        const task = 'Code VueJS'
        //set the input task item - this is imitating input by the user
        wrapper.vm.task = task
        //find the task input form
        const form = wrapper.find('form')[0]
        //trigger submit for task input form - to add task
        form.trigger('submit')
        //there should only be one task
        expect(wrapper.vm.$store.state.tasks.length).to.equal(1)
        //the task name should be same as the one for simulated input
        expect(wrapper.vm.$store.state.tasks[0].name).to.equal(task)
        //the status for the task should be pending - 0
        expect(wrapper.vm.$store.state.tasks[0].status).to.equal(0)
    })

    it('task input is cleared after user adds item', () => {
        const wrapper = mount(AddTask, {store})
        //simulate entry of a task on task input
        wrapper.vm.task = 'Cook dinner'
        //find the task input form
        const form = wrapper.find('form')[0]
        //trigger submit for task input form - to add task - expected to clear input
        form.trigger('submit')
        //the task input should be cleared
        expect(wrapper.vm.task).to.equal('')
    })
})