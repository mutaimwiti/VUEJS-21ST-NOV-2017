import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.directive('danger', {
    // When the bound element is inserted into the DOM...
    inserted: function (el) {
        // Focus the element
        el.style.backgroundColor = '#f40c0f';
    }
})



new Vue ({
    el: '#app',
    router,
    template: '<App/>',
    components: {App}
});