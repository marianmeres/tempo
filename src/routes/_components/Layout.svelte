<script>
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';

	export let params = {};
</script>

<div class="vh100 flex flex-col">
	<Header />
	<slot />
	<Footer />
</div>
