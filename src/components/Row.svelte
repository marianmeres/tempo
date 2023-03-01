<script>
	import { i18nLocale } from '../stores/i18n.js';

	export let title = '';
	export let unit = '';
	export let hi = false;
	export let error = null;
</script>

<div
	class="
		flex-1 overflow-hidden flex flex-col group
		{$$props.class || ''}
	"
	class:bg-amber-200={hi}
>
	<div
		class="
			text-center opacity-75 group-hover:opacity-100
			flex-1 flex flex-col justify-center
		"
		class:opacity-100={hi}
		class:font-bold={hi}
	>
		<span class="text-lg font-semibold">{title}</span>
	</div>
	{#if error}
		<div class="text-center text-red-700 px-4">{error[$i18nLocale]}</div>
	{:else}
		<div class="fhi flex-1 flex justify-center items-center">
			<slot />
		</div>
	{/if}

	<div
		class="
			text-center opacity-75 text-sm font-light
			flex-1 flex flex-col justify-center
		"
	>
		<code>({unit})</code>
	</div>
</div>
