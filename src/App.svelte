<script>
	import { router } from './router.js';
	import Layout from './routes/_components/Layout.svelte';
	import { onMount } from 'svelte';
	import { windowSize } from './stores/window-size.js';
	import { createClog } from '@marianmeres/clog';
	import { i18nLocale } from './stores/i18n.js';

	const clog = createClog('App');

	onMount(windowSize.touch);

	let page = router.exec(location.hash);
	const onHashChange = ({ newURL, oldURL }) => (page = router.exec(location.hash));

	router.subscribe(({ params }) => {
		if (params?.locale) {
			$i18nLocale = params.locale;
		}
	});
</script>

<svelte:window on:hashchange={onHashChange} />

{#if page}
	{#if page.meta?.layout === false}
		<svelte:component this={page.component} {...page.props} />
	{:else}
		<!-- aby sa prerenderovali aj layout props... -->
		{#key page}
			<Layout {...page.meta?.layout?.props || {}} params={page.props?.params}>
				<svelte:component this={page.component} {...page.props} />
			</Layout>
		{/key}
	{/if}
{/if}
