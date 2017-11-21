import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

const state = {
    tasks: []
};

const mutations = {
    addTask(state, {task}) {
        state.tasks.push(
            {
                name: task, status: 0
            }
        )
    }
};

const actions = {
    addTask(context, payload) {
        context.commit('addTask', payload);
    }
};

const store = new Vuex.Store({
    state: state,
    mutations: mutations,
    actions: actions
});

export default store;
