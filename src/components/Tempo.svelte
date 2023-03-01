<script>
	import NumberSelect from './NumberSelect.svelte';
	import Row from './Row.svelte';
	import Separator from './Separator.svelte';
	// import { tempoM, tempoS } from '../stores/tempo.js';
	import { DEFAULT_LOCALE, i18nLocale } from '../stores/i18n.js';
	import {
		lastCalcTarget,
		OUT_OF_DISPLAY_RANGE,
		setTempo,
		TEMPO,
		tempo,
	} from '../stores/tempo.js';
	import { createClog } from '@marianmeres/clog';

	const clog = createClog('Tempo.svelte');

	const title = {
		sk: 'Tempo',
		en: 'Pace',
	};

	let m = 0;
	let s = 0;
	let max = 15;
	let error = null;

	$: {
		error = null;
		[m, s] = tempo.toVals($tempo);
		if (m > max) error = OUT_OF_DISPLAY_RANGE;
	}
</script>

<Row
	title={title[$i18nLocale] || title[DEFAULT_LOCALE]}
	unit="mm:ss / km"
	hi={$lastCalcTarget === TEMPO}
	{error}
>
	<NumberSelect
		padWith="&nbsp;"
		to={max}
		value={m}
		on:change={({ detail }) => setTempo(detail, s)}
	/>
	<Separator />
	<NumberSelect value={s} on:change={({ detail }) => setTempo(m, detail)} />
</Row>
