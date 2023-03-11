<script>
	import { createTranslate } from "$lib/i18n.js";
	import { page } from "$app/stores";
	import { AVAILABLE_LOCALES, ROUTE } from "../../../../config.js";
	import MetaOg from "$lib/components/MetaOg.svelte";

	let t = createTranslate(null);
	$: t = createTranslate($page.route.id);

	let i18n = {};
	$: i18n = $page.data.i18n;
</script>

<MetaOg title={t.raw(i18n, 'og_title') || t.raw(i18n, 'html_title')} />

<nav class="p-8">
	<h2 class="text-xl mb-2 font-bold">{@html t(i18n, 'language')}</h2>
	<ul>
		{#each AVAILABLE_LOCALES as l}
			<li>
				<a
					href={ROUTE.settings.url(l.locale)}
					class="block px-4 py-2 hover:bg-gray-100 no-underline text-xl flex items-center"
				>
					<span class="mr-4">{@html l.icon}</span>
					<span>{l.label}</span>
					{#if l.locale === $page.params.locale}
						<span class="inline-block opacity-25 ml-4">
							<svg width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
								<path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
							</svg>
						</span>
					{/if}
				</a>
			</li>
		{/each}
	</ul>
</nav>
