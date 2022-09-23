<template>
	<nav
		class="container-fluid mx-auto bg-blue-100 shadow border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900"
	>
		<div
			class="container-fluid flex flex-wrap justify-between items-center mx-auto"
		>
			<router-link
				:to="{
					name: routes.home.name,
				}"
				class="flex items-center"
			>
				<img
					src="@/assets/img/logo.svg"
					class="mr-3 h-6 sm:h-9"
					:class="{ 'filter-green': dark }"
					alt="Sandik Logo"
				/>
				<span
					class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
					>Sandik</span
				>
			</router-link>
			<button
				@click.prevent="open = !open"
				type="button"
				class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
			>
				<span class="sr-only">Toggle menu</span>
				<svg
					class="w-6 h-6"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill-rule="evenodd"
						d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
						clip-rule="evenodd"
					></path>
				</svg>
			</button>
			<div
				class="w-full md:block md:w-auto"
				:class="{ hidden: !open }"
				id="navbar-default"
			>
				<ul
					class="flex flex-col p-4 mt-4 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white md:dark:bg-gray-800 dark:border-gray-700"
				>
					<li v-for="route in routes" :key="route.name">
						<router-link
							:to="{ name: route.name }"
							class="block py-2 pr-4 pl-3 rounded md:bg-transparent md:p-0 dark:text-white"
							:class="{
								'bg-blue-700 text-white md:text-blue-700 md:dark:text-blue-300 ':
									$route.name == route.name,
							}"
							>{{ route.navTitle }}</router-link
						>
					</li>

					<li><DarkModeToggler /></li>
				</ul>
			</div>
		</div>
	</nav>
</template>
<script>
import { routes } from '@/router';
import DarkModeToggler from '../utils/DarkModeToggler.vue';
import { mapGetters } from 'vuex';
export default {
	components: { DarkModeToggler },
	name: 'Navbar',
	data: () => ({
		open: false,
		routes: routes,
	}),
	methods: {},
	computed: {
		...mapGetters(['dark']),
	},
	created() {},
};
</script>
z
