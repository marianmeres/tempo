<script>
	import { base } from '$app/paths';
	import { page } from "$app/stores";

	import Header from "$lib/components/layout/Header.svelte";
	import Footer from "$lib/components/layout/Footer.svelte";

	export let data;
</script>

<svelte:head>
	<link rel="manifest" href="{base}/{$page.params.locale}/manifest.json">
</svelte:head>

<div class="vh100 flex flex-col">
	<Header />
	<div class="flex-1 flex flex-col divide-y">
		<slot />
	</div>
	<Footer />
</div>
