<script>
	import { page } from '$app/stores';
</script>
<footer class="p-2 text-xs text-center bg-gray-200">
	<div class="font-light opacity-75 space-x-1">
		<a href="mailto:marian@meres.sk">marian@meres.sk</a> |
		v{$page.data?.VERSION}
	</div>
</footer>
