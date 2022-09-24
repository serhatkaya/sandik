import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		dark: false,
	},
	getters: {
		dark: (state) => state.dark,
	},
	mutations: {
		SET_DARK: (state, bool) => {
			state.dark = bool;
		},
	},
	actions: {},
	modules: {},
});
