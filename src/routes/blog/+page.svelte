<script lang="ts">
	import TinaMarkdown from './tina-markdown.svelte';

	let { data } = $props();
	const { posts } = data;
</script>

<article class="prose">
	<h1>Blog</h1>
	<ul class="list rounded-box bg-base-100 shadow-md">
		{#if Array.isArray(posts)}
			{#each posts as post}
				<li class="list-row">
					<a href={`/blog/${post.fileName}`} class="list-col-grow link no-underline">
						<div class="font-semibold">{post.title}</div>
						<div class="text-lg">
							<TinaMarkdown {...post.summary} />
						</div>
					</a>
				</li>
			{/each}
		{/if}
	</ul>
</article>
