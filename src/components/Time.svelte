<script>
	import NumberSelect from './NumberSelect.svelte';
	import Row from './Row.svelte';
	import Separator from './Separator.svelte';
	import { createClog } from '@marianmeres/clog';
	import { DEFAULT_LOCALE, i18nLocale } from '../stores/i18n.js';
	import {
		lastCalcTarget,
		OUT_OF_DISPLAY_RANGE,
		setTime,
		TIME,
		time,
	} from '../stores/tempo.js';

	const clog = createClog('Time');

	const title = {
		sk: 'Čas',
		en: 'Time',
	};

	let h = 0;
	let m = 0;
	let s = 0;
	let max = 8;
	let error = null;

	$: {
		error = null;
		[h, m, s] = time.toVals($time);
		if (h > max) error = OUT_OF_DISPLAY_RANGE;
	}
</script>

<Row
	title={title[$i18nLocale] || title[DEFAULT_LOCALE]}
	unit="h:mm:ss"
	hi={$lastCalcTarget === TIME}
	{error}
>
	<NumberSelect
		to={max}
		padWith="&nbsp;"
		value={h}
		on:change={({ detail }) => setTime(detail, m, s)}
	/>
	<Separator />
	<NumberSelect value={m} on:change={({ detail }) => setTime(h, detail, s)} />
	<Separator />
	<NumberSelect value={s} on:change={({ detail }) => setTime(h, m, detail)} />
</Row>

<style lang="scss">
	.box {
	}
</style>
