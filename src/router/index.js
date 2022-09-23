import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'home',
		component: () => import('../pages/HomePage.vue'),
	},
	{
		path: '/about',
		name: 'about',
		component: () => import('../pages/About.vue'),
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
