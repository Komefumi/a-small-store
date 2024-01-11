<script lang="ts">
	import { getDrawerStore } from '@skeletonlabs/skeleton';
	const navData = [
		['/', 'Home'],
		['/new', 'Notes']
		// ['/?test=1', 'Other Page 1'],
		// ['/?test=2', 'Other Page 2'],
		// ['/?test=3', 'Other Page 3']
	];

	const drawerStore = getDrawerStore();
	export function closeDrawer() {
		drawerStore.close();
	}
</script>

<nav class="list-nav p-4">
	<ul>
		{#each navData as [link, name] (link)}
			<li><a href={link} on:click={closeDrawer}>{name}</a></li>
		{/each}
	</ul>
</nav>
