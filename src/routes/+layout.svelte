<script>
	import '../app.scss';
	import { onMount } from 'svelte';
	import { windowSize } from '$lib/stores/window-size.js';
	import { createTranslate } from '$lib/i18n.js';
	import { page } from '$app/stores';

	onMount(windowSize.touch);

	let t = createTranslate(null);
	$: t = createTranslate($page.route.id);

	let i18n;
	$: i18n = $page.data.i18n;
</script>

<svelte:head>
	<title>{t.raw(i18n, 'html_title')}</title>
</svelte:head>

<slot />
