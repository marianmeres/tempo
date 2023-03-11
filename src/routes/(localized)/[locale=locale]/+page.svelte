<script>
	import Distance from '$lib/components/Distance.svelte';
	import Time from '$lib/components/Time.svelte';
	import Tempo from '$lib/components/Tempo.svelte';
	import MetaOg from '$lib/components/MetaOg.svelte';
	import { createTranslate } from '$lib/i18n.js';
	import { page } from '$app/stores';

	let t = createTranslate(null);
	$: t = createTranslate($page.route.id);

	let i18n = {};
	$: i18n = $page.data.i18n;
</script>

<MetaOg
	title={t.raw(i18n, 'og.title') || t.raw(i18n, 'html_title')}
	description={t.raw(i18n, 'og.description')}
/>

<Distance />
<Time />
<Tempo />
