<script>
	import { page } from '$app/stores';
	import { createTranslate } from '$lib/i18n.js';
	import { lock } from '$lib/stores/lock.js';
	import { createClog } from '@marianmeres/clog';
	import { DISTANCE, distance, lastCalcTarget, setDistance } from '../stores/tempo.js';
	import NumberSelect from './NumberSelect.svelte';
	import Row from './Row.svelte';
	import Separator from './Separator.svelte';

	const clog = createClog('Distance');
	let t = createTranslate('distance');

	const id = DISTANCE;
	$: isLocked = $lock === id;

	let i18n = {};
	$: i18n = $page.data.i18n;

	let km = 0;
	let dec = 0;
	let max = 49;
	let error = null;

	$: {
		error = null;
		[km, dec] = distance.toVals($distance);
		if (km > max) error = t(i18n, '/out_of_display_range');
	}

	let u = '';

	$: lockVisible = !!(km || dec);
</script>

<Row
	{id}
	title={t(i18n, 'title')}
	unit="km"
	hi={$lastCalcTarget === DISTANCE}
	{error}
	{lockVisible}
>
	<NumberSelect
		to={max}
		padWith="&nbsp;"
		value={km}
		on:change={({ detail }) => setDistance(detail, dec)}
		disabled={isLocked}
	/>
	<Separator value="." />
	<NumberSelect
		to="99"
		padWith="0"
		value={dec}
		on:change={({ detail }) => setDistance(km, detail)}
		disabled={isLocked}
	/>

	<select
		class="
			text-center appearance-none p-2 rounded cursor-pointer
			bg-transparent ring-0
			hover:bg-transparent focus:bg-transparent focus:ring-0 focus:outline-0
			ml-4 text-gray-700
		"
		style="max-width: calc(1* (2.5rem + 2.5vw));"
		bind:value={u}
		disabled={isLocked}
		on:change={(e) => {
			if (u) {
				const [km, dec] = u.split(':');
				setDistance(km, dec);
			}
			u = '';
			e.target.blur();
		}}
	>
		<option value="">⋮</option>
		<option value="42:20">{t.raw(i18n, 'menu.marathon')}</option>
		<option value="21:10">{t.raw(i18n, 'menu.halfmarathon')}</option>
		<option value="1:61">{t.raw(i18n, 'menu.mile')}</option>
	</select>
</Row>
