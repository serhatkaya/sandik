<template>
	<div id="app" class="p-3" :class="dark ? 'dark' : 'light'">
		<Navbar />
		<main
			id="main-wrapper"
			class="container mx-auto my-2 rounded p-4 bg-gray-100"
		>
			<router-view></router-view>
		</main>
		<Footer />
	</div>
</template>
<script>
import Navbar from './partials/navbar/Navbar.vue';
import Footer from './partials/footer/Footer.vue';
import { mapGetters } from 'vuex';

export default {
	components: {
		Navbar,
		Footer,
	},
	name: 'MasterComponent',
	data: () => ({}),
	computed: {
		...mapGetters(['dark']),
	},
	methods: {},
};
</script>
