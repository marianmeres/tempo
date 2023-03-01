<script>
	import { createClog } from '@marianmeres/clog';
	import { DEFAULT_LOCALE, i18nLocale } from '../../stores/i18n.js';

	const clog = createClog('Header');

	const title = {
		sk: 'Kalkulačka bežeckého tempa',
		en: 'Running pace calculator',
	};
</script>

<header class="p-4 bg-blue-500 text-white flex items-center">
	<div>&nbsp;&nbsp;</div>
	<h1 class="flex-1 text-center font-semibold text-xl">
		{title[$i18nLocale] || title[DEFAULT_LOCALE]}
	</h1>
	<div class="">
		{#if $i18nLocale === 'en'}
			<a href="#/sk">SK</a>
		{:else}
			<a href="#/en">EN</a>
		{/if}
	</div>
</header>
