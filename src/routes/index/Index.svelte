<script>
	import Distance from '../../components/Distance.svelte';
	import Time from '../../components/Time.svelte';
	import Tempo from '../../components/Tempo.svelte';
	import { createClog } from '@marianmeres/clog';

	const clog = createClog('Index');

	export let params = {};
</script>

<div class="flex-1 flex flex-col divide-y">
	<Distance />
	<Time />
	<Tempo />
</div>
