<script lang="ts">
	import { base } from '$app/paths';
	import { getDrawerStore } from '@skeletonlabs/skeleton';
	const navData = [
		['', 'Home'],
		['new', 'Notes']
	];

	const drawerStore = getDrawerStore();
	export function closeDrawer() {
		drawerStore.close();
	}
</script>

<nav class="list-nav p-4">
	<ul>
		{#each navData as [link, name] (link)}
			<li><a href={`${base}/${link}`} on:click={closeDrawer}>{name}</a></li>
		{/each}
	</ul>
</nav>
