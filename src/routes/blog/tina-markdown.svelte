<script lang="ts">
	import type { TinaContent } from '$lib';
	import Highlight from 'svelte-highlight';
	import { typescript } from 'svelte-highlight/languages';
	import { nightOwl } from 'svelte-highlight/styles';
	import { Mermaid } from '@friendofsvelte/mermaid';

	let props: TinaContent = $props();
</script>

<svelte:head>
	{@html nightOwl}
</svelte:head>

{#snippet renderChild(children?: TinaContent[])}
	{#each children ?? [] as child}
		{@render renderRTFContent(child)}
	{/each}
{/snippet}

{#snippet renderRTFContent(content: TinaContent)}
	{#if content.type === 'root'}
		{@render renderChild(content.children)}
	{:else if content.type === 'h1'}
		<h1>
			{@render renderChild(content.children)}
		</h1>
	{:else if content.type === 'h2'}
		<h2>
			{@render renderChild(content.children)}
		</h2>
	{:else if content.type === 'h3'}
		<h3>
			{@render renderChild(content.children)}
		</h3>
	{:else if content.type === 'h4'}
		<h4>
			{@render renderChild(content.children)}
		</h4>
	{:else if content.type === 'h5'}
		<h5>
			{@render renderChild(content.children)}
		</h5>
	{:else if content.type === 'h6'}
		<h6>
			{@render renderChild(content.children)}
		</h6>
	{:else if content.type === 'p'}
		<p>
			{@render renderChild(content.children)}
		</p>
	{:else if content.type === 'a'}
		<a href={content.url ?? ''}>
			{@render renderChild(content.children)}
		</a>
	{:else if content.type === 'code_block' && content.value && content.lang === 'mermaid'}
		<Mermaid string={content.value} />
	{:else if content.type === 'code_block' && content.value}
		<Highlight language={typescript} code={content.value} />
	{:else if content.type === 'blockquote'}
		<blockquote>
			{@render renderChild(content.children)}
		</blockquote>
	{:else if content.type === 'hr'}
		<div class="divider" role="separator"></div>
	{:else if content.type === 'ul'}
		<ul>
			{@render renderChild(content.children)}
		</ul>
	{:else if content.type === 'ol'}
		<ol>
			{@render renderChild(content.children)}
		</ol>
	{:else if content.type === 'li'}
		<li>
			{@render renderChild(content.children)}
		</li>
	{:else if content.type === 'lic'}
		{@render renderChild(content.children)}
	{:else if content.type === 'img'}
		<div class="card w-96 bg-base-100 shadow-sm">
			<img src={content.url} alt={content.alt} />
			<div class="card-body">
				<p>
					{content.caption}
				</p>
			</div>
		</div>
	{:else if content.type === 'table'}
		<div class="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 shadow-sm">
			<table class="table">
				{#each content.children ?? [] as child, rowIndex}
					{@render renderRTFContent({
						...child,
						children:
							child.children?.map((row) => ({ ...row, type: rowIndex === 0 ? 'th' : 'td' })) ?? []
					})}
				{/each}
			</table>
		</div>
	{:else if content.type === 'tr'}
		<tr>
			{@render renderChild(content.children)}
		</tr>
	{:else if content.type === 'th'}
		<th>
			{@render renderChild(content.children)}
		</th>
	{:else if content.type === 'td'}
		<td>
			{@render renderChild(content.children)}
		</td>
	{:else if content.bold && content.italic}
		<strong>
			<em>
				{content.text}
			</em>
		</strong>
	{:else if content.bold}
		<strong>
			{content.text}
		</strong>
	{:else if content.italic}
		<em>
			{content.text}
		</em>
	{:else if content.underline}
		<span class="underline">
			{content.text}
		</span>
	{:else if content.strikethrough}
		<s>
			{content.text}
		</s>
	{:else if content.code}
		<span class="font-google-sans-code">
			{content.text}
		</span>
	{:else}
		{content.text}
	{/if}
{/snippet}

{@render renderRTFContent(props)}

<style>
	.table p {
		margin-top: 0;
		margin-bottom: 0;
	}
</style>
