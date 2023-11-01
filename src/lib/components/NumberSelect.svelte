<script>
	import { createClog } from '@marianmeres/clog';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	const clog = createClog('NumberColumn');

	export let from = 0;
	export let to = 59;
	export let padLength = 2;
	export let padWith = '0';
	export let disabled = false;

	export let value;

	const pad = (v) => {
		if (padLength && `${v}`.length < padLength) {
			v = `${v}`.padStart(padLength, padWith);
		}
		return v;
	};

	let options = [];
	$: for (let i = from; i <= to; i++) {
		options.push(i);
	}
</script>

<div class="">
	<select
		bind:value
		{disabled}
		on:change={() => dispatch('change', parseInt(value, 10))}
		class="
			text-right appearance-none p-2 rounded cursor-pointer
			bg-transparent
			enabled:bg-white enabled:ring-1 enabled:ring-gray-300
			enabled:hover:bg-gray-100 focus:bg-gray-100 focus:ring-1 focus:outline-0
		"
	>
		{#each options as v (v)}
			<option value={v}>{pad(v)}</option>
		{/each}
	</select>
</div>
