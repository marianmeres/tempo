<script>
	import { page } from '$app/stores';
	import { createTranslate } from '$lib/i18n.js';
	import { lock } from '$lib/stores/lock.js';
	import { createClog } from '@marianmeres/clog';
	import { lastCalcTarget, setTime, TIME, time } from '../stores/tempo.js';
	import NumberSelect from './NumberSelect.svelte';
	import Row from './Row.svelte';
	import Separator from './Separator.svelte';

	const clog = createClog('Time');
	let t = createTranslate('time');

	const id = TIME;
	$: isLocked = $lock === id;

	let i18n = {};
	$: i18n = $page.data.i18n;

	let h = 0;
	let m = 0;
	let s = 0;
	let max = 8;
	let error = null;

	$: {
		error = null;
		[h, m, s] = time.toVals($time);
		if (h > max) error = t(i18n, '/out_of_display_range');
	}
</script>

<Row {id} title={t(i18n, 'title')} unit="h:mm:ss" hi={$lastCalcTarget === TIME} {error}>
	<NumberSelect
		to={max}
		padWith="&nbsp;"
		value={h}
		on:change={({ detail }) => setTime(detail, m, s)}
		disabled={isLocked}
	/>
	<Separator />
	<NumberSelect
		value={m}
		on:change={({ detail }) => setTime(h, detail, s)}
		disabled={isLocked}
	/>
	<Separator />
	<NumberSelect
		value={s}
		on:change={({ detail }) => setTime(h, m, detail)}
		disabled={isLocked}
	/>
</Row>

<style lang="scss">
	.box {
	}
</style>
