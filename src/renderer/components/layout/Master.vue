<template>
	<div id="app">
		<Navbar />
		<main
			id="main-wrapper"
			class="container-fluid mx-auto my-2 rounded p-4 bg-gray-200 dark:bg-gray-700 dark:text-white"
		>
			<router-view></router-view>
		</main>
		<Footer />
	</div>
</template>
<script>
import Footer from './partials/footer/Footer.vue';
import Navbar from './partials/navbar/Navbar.vue';

export default {
	components: {
		Navbar,
		Footer,
	},
	name: 'MasterComponent',
	data: () => ({}),
	methods: {},
};
</script>
