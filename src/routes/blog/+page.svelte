<script lang="ts">
  import TinaMarkdown from '$lib/tina-markdown.svelte';

  let { data } = $props();
  const { posts } = data;
</script>

<article class="prose">
  <h1>Blog</h1>
  <ul class="list rounded-box bg-base-100 shadow-md">
    {#if Array.isArray(posts) && posts.length > 0}
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
    {:else}
      <li class="list-row">
        <div class="list-col-grow text-center">No posts found.</div>
      </li>
    {/if}
  </ul>
</article>
