<script lang="ts">
  import TinaMarkdown from '$lib/tina-markdown.svelte';
  import type { PageProps } from './$types';

  let { data }: PageProps = $props();
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
