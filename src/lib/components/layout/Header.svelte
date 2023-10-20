<script>
	import { createClog } from '@marianmeres/clog';
	import { iconBsCaretLeftFill, iconBsGearFill } from '@marianmeres/icons-fns';
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import { createTranslate } from '$lib/i18n.js';
	import { ROUTE } from '../../../config.js';

	const clog = createClog('Header');
	const t = createTranslate('header');

	let i18n = {};
	$: i18n = $page.data.i18n;
</script>

<header class="bg-blue-500 text-white flex items-center">
	<a
		href={ROUTE.main.url($page.params.locale)}
		class:invisible={$page.route.id === ROUTE.main.id}
		class="inline-block p-4 leading-none hover:bg-white hover:bg-opacity-25"
	>
		<span class="sr-only">{@html t(i18n, 'home')}</span>
		{@html iconBsCaretLeftFill({ size: 20 })}
	</a>
	<h1 class="flex-1 text-center font-semibold text-xl leading-none">
		<!-- kind of special case dance here -->
		{@html t(i18n, `/${$page.route.id}.header.title`, t.raw(i18n, 'title'))}
	</h1>
	<a
		href={ROUTE.settings.url($page.params.locale)}
		class="inline-block p-4 leading-none hover:bg-white hover:bg-opacity-25"
		class:invisible={$page.route.id === ROUTE.settings.id}
	>
		<span class="sr-only">{@html t(i18n, 'settings')}</span>
		{@html iconBsGearFill({ size: 20 })}
	</a>
</header>
