import Vue from 'vue';
import Master from '@r/components/layout/Master.vue';
import './assets/tailwind.css';
import router from '@r/router';
import store from './store';

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: (h) => h(Master),
}).$mount('#app');
