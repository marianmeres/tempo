<script>
	import { createClog } from '@marianmeres/clog';
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
		<svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
			<path
				d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"
			/>
		</svg>
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
		<svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
			<path
				d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"
			/>
		</svg>
	</a>
</header>
