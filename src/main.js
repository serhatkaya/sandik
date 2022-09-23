import Vue from 'vue';
import Master from './components/layout/Master.vue';
import './assets/tailwind.css';
import router from './router';

Vue.config.productionTip = false;

new Vue({
	router,
	render: (h) => h(Master),
}).$mount('#app');
