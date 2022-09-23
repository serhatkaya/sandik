import Vue from 'vue';
import Master from './components/layout/Master.vue';
import './assets/tailwind.css';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: (h) => h(Master),
}).$mount('#app');
