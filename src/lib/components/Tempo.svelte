<script>
	import { page } from '$app/stores';
	import { createTranslate } from '$lib/i18n.js';
	import { lock } from '$lib/stores/lock.js';
	import { createClog } from '@marianmeres/clog';
	import { lastCalcTarget, setTempo, TEMPO, tempo } from '../stores/tempo.js';
	import NumberSelect from './NumberSelect.svelte';
	import Row from './Row.svelte';
	import Separator from './Separator.svelte';

	const clog = createClog('Tempo');
	let t = createTranslate('tempo');

	const id = TEMPO;
	$: isLocked = $lock === id;

	let i18n = {};
	$: i18n = $page.data.i18n;

	let m = 0;
	let s = 0;
	let max = 15;
	let error = null;

	$: {
		error = null;
		[m, s] = tempo.toVals($tempo);
		if (m > max) error = t(i18n, '/out_of_display_range');
	}

	$: lockVisible = !!(m || s);
</script>

<Row
	{id}
	title={t(i18n, 'title')}
	unit="mm:ss / km"
	hi={$lastCalcTarget === TEMPO}
	{error}
	{lockVisible}
>
	<NumberSelect
		padWith="&nbsp;"
		to={max}
		value={m}
		on:change={({ detail }) => setTempo(detail, s)}
		disabled={isLocked}
	/>
	<Separator />
	<NumberSelect
		value={s}
		on:change={({ detail }) => setTempo(m, detail)}
		disabled={isLocked}
	/>
</Row>
