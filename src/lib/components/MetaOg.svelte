<script lang="ts">
	import { createClog } from '@marianmeres/clog';

	const clog = createClog('MetaOg');

	// Best practices
	// - Add it to all “shareable” pages.
	// - Focus on accuracy, value, and clickability.
	// - Keep it short to prevent overflow. There’s no official guidance on this, but
	//   40 characters for mobile and 60 for desktop is roughly the sweet spot.
	// - Use the raw title. Don’t include branding (e.g., your site name).
	export let title = null;

	// The URL of the content.
	// Best practices:
	// - Use the canonical URL
	export let url = null;

	// Best practices:
	// - Complement the title to make the snippet as appealing and click-worthy as possible.
	// - Copy your meta description here if it makes sense.
	// - Keep it short and sweet. Facebook recommends 2-4 sentences, but that often truncates.
	export let description = null;

	// The URL of an image for the social snippet.
	// Note that this is perhaps the most essential Open Graph tag because it occupies the
	// most social feed real estate.
	// Best practices:
	// - Use custom images for “shareable” pages (e.g., homepage, articles, etc.)
	// - Use your logo or any other branded image for the rest of your pages.
	// - Use images with a 1.91:1 ratio and minimum recommended dimensions of 1200x630 for
	//   optimal clarity across all devices.
	export let image = null;

	// Best practices:
	// - Use only for content not written in American English (en_US). Facebook assumes
	//   content without this tag is written in this language.
	export let locale = null;

	// Best practices:
	// - Use "article" for articles and "website" for the rest of your pages.
	export let type = 'website';

	//
	$: map = { url, title, description, image, locale, type };
	// $: clog(map);
</script>

<svelte:head>
	{#each Object.entries(map || {}) as [k, v] (k)}
		{#if v}
			<meta property="og:{k}" content={v} />
		{/if}
	{/each}
</svelte:head>
