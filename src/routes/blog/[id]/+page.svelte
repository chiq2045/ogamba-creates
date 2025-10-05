<script lang="ts">
	import type { PageProps } from './$types';
	import TinaMarkdown from '../tina-markdown.svelte';

	let { data }: PageProps = $props();
	$inspect(data.post.body);
</script>

<svelte:head>
	<title>{data.post.title}</title>
</svelte:head>

<article class="prose">
	{#if data.post.body}
		<TinaMarkdown {...data.post.body} />
	{:else}
		<h1>No content</h1>
		<p>No content available for selected post</p>
	{/if}
</article>
