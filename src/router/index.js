import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

export const routes = {
	home: {
		component: () => import('../pages/HomePage.vue'),
		name: 'home',
		navTitle: 'Home',
		path: '/',
	},
	about: {
		path: '/about',
		navTitle: 'About',
		name: 'about',
		component: () => import('../pages/About.vue'),
	},
};

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: Object.keys(routes).map((key) => routes[key]),
});

export default router;
