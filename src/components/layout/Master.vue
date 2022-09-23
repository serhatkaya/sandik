<template>
	<div id="app">
		<Navbar />
		<main id="main-wrapper" class="p-1">
			<router-view></router-view>
		</main>
		<Footer />
	</div>
</template>
<script>
import Navbar from './partials/navbar/Navbar.vue';
import Footer from './partials/footer/Footer.vue';
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
