<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="drawer">
	<input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content flex flex-col">
		<!-- Navbar -->
		<header class="navbar w-full">
			<div class="flex-none lg:hidden">
				<label for="my-drawer-3" aria-label="open sidebar" class="btn btn-square btn-ghost">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						class="inline-block h-6 w-6 stroke-current"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						></path>
					</svg>
				</label>
			</div>
			<div class="mx-2 flex-1 px-2">Ogamba Creates</div>
			<nav class="hidden flex-none lg:block">
				<ul class="menu menu-horizontal">
					<!-- Navbar menu content here -->
					<li><a href="/">Ogamba Creates</a></li>
					<li><a href="/projects">Projects</a></li>
					<li><a href="/blog">Blog</a></li>
				</ul>
			</nav>
		</header>
		<main class="p-4">
			{@render children?.()}
		</main>
	</div>
	<div class="drawer-side">
		<label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay"></label>
		<ul class="menu min-h-full w-80 p-4">
			<!-- Sidebar content here -->
			<li><a href="/">Ogamba Creates</a></li>
			<li><a href="/projects">Projects</a></li>
			<li><a href="/blog">Blog</a></li>
		</ul>
	</div>
</div>
