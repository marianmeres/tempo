<script>
	import { page } from '$app/stores';
	import { createTranslate } from '$lib/i18n.js';
	import { lock } from '$lib/stores/lock.js';
	import { createClog } from '@marianmeres/clog';
	import { iconBsLockFill, iconBsUnlockFill } from '@marianmeres/icons-fns';

	const clog = createClog('Row');
	const t = createTranslate('row');

	export let id = '';
	export let title = '';
	export let unit = '';
	export let hi = false;
	export let error = null;
	export let lockVisible = true;

	let i18n = {};
	$: i18n = $page.data.i18n;

	$: isLocked = $lock === id;
</script>

<section
	class="
		flex-1 overflow-hidden flex flex-col group
		{$$props.class || ''}
	"
	class:bg-amber-200={!isLocked && hi}
	class:bg-gray-200={isLocked}
>
	<div
		class="
			text-center opacity-75 group-hover:opacity-100
			flex-1 flex flex-col justify-center
		"
		class:opacity-100={hi}
		class:font-bold={hi}
	>
		<div class="flex items-center">
			<div class="w-12 ml-4" class:hidden={!lockVisible}>&nbsp</div>
			<h2 class="text-lg font-semibold flex-1">{@html title}</h2>
			<button
				class="
				w-12 h-12 mr-4 flex items-center justify-center
				bg-transparent focus:bg-transparent active:bg-transparent
			"
				disabled={!lockVisible}
				class:hidden={!lockVisible}
				class:text-gray-500={!isLocked}
				class:text-black={isLocked}
				on:click={() => ($lock = isLocked ? null : id)}
				title={t.raw(i18n, isLocked ? 'unlock' : 'lock')}
			>
				{@html (isLocked ? iconBsLockFill : iconBsUnlockFill)({ size: 20 })}
			</button>
		</div>
	</div>
	{#if error}
		<div class="text-center text-red-700 px-4">{@html error}</div>
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
</section>
