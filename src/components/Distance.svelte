<script>
	import NumberSelect from './NumberSelect.svelte';
	import Row from './Row.svelte';
	import { DEFAULT_LOCALE, i18nLocale } from '../stores/i18n.js';
	import Separator from './Separator.svelte';
	import {
		DISTANCE,
		distance,
		lastCalcTarget,
		OUT_OF_DISPLAY_RANGE,
		setDistance,
	} from '../stores/tempo.js';
	import { createClog } from '@marianmeres/clog';

	const clog = createClog('Distance');

	const title = {
		sk: 'Vzdialenosť',
		en: 'Distance',
	};

	let km = 0;
	let dec = 0;
	let max = 49;
	let error = null;

	$: {
		error = null;
		[km, dec] = distance.toVals($distance);
		if (km > max) error = OUT_OF_DISPLAY_RANGE;
	}

	let u = '';

	const menu = {
		marathon: { sk: 'Maratón', en: 'Marathon' },
		halfmarathon: { sk: 'Polmaratón', en: 'Half marathon' },
		mile: { sk: 'Míľa', en: 'Mile' },
	};
</script>

<Row
	title={title[$i18nLocale] || title[DEFAULT_LOCALE]}
	unit="km"
	hi={$lastCalcTarget === DISTANCE}
	{error}
>
	<NumberSelect
		to={max}
		padWith="&nbsp;"
		value={km}
		on:change={({ detail }) => setDistance(detail, dec)}
	/>
	<Separator value="." />
	<NumberSelect
		to="99"
		padWith="0"
		value={dec}
		on:change={({ detail }) => setDistance(km, detail)}
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
		<option value="42:20">{menu.marathon[$i18nLocale]}</option>
		<option value="21:10">{menu.halfmarathon[$i18nLocale]}</option>
		<option value="1:61">{menu.mile[$i18nLocale]}</option>
	</select>
</Row>
