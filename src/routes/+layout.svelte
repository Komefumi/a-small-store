<script lang="ts">
	import '../app.postcss';

	// Highlight JS
	import hljs from 'highlight.js/lib/core';
	import 'highlight.js/styles/github-dark.css';
	import {
		AppShell,
		AppBar,
		Avatar,
		storeHighlightJs,
		Drawer,
		getDrawerStore,
		initializeStores,
		type DrawerStore,
		Toast,
		Modal
	} from '@skeletonlabs/skeleton';
	import xml from 'highlight.js/lib/languages/xml'; // for HTML
	import css from 'highlight.js/lib/languages/css';
	import javascript from 'highlight.js/lib/languages/javascript';
	import typescript from 'highlight.js/lib/languages/typescript';

	hljs.registerLanguage('xml', xml); // for HTML
	hljs.registerLanguage('css', css);
	hljs.registerLanguage('javascript', javascript);
	hljs.registerLanguage('typescript', typescript);
	storeHighlightJs.set(hljs);

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	import Navigation from '../component-lib/navigation.svelte';
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import { onMount } from 'svelte';
	import { supabase } from '$lib';
	import { user } from '../store/auth';

	initializeStores();

	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	const drawerStore = getDrawerStore();

	function openDrawer() {
		drawerStore.open();
	}

	onMount(async () => {
		const { data, error } = await supabase.auth.getUser();
		const userFound = data.user;
		if (error) {
			console.error(error);
		}
		user.set(userFound);
	});

	supabase.auth.onAuthStateChange((_, session) => {
		const foundUser = session?.user || null;
		user.set(foundUser);
		console.log({ foundUser });
	});
</script>

<Toast position="tr" />
<Modal />
<Drawer>
	<Navigation />
</Drawer>

<AppShell slotSidebarLeft="w-0 md:w-52 bg-surface-500/10 min-h-screen">
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">
				<button class="md:hidden btn btn-sm mr-4" on:click|preventDefault={openDrawer}>
					<span>
						<svg viewBox="0 0 100 80" class="fill-token w-4 h-4">
							<rect width="100" height="20" />
							<rect y="30" width="100" height="20" />
							<rect y="60" width="100" height="20" />
						</svg>
					</span>
				</button>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<Avatar
					src="https://ui-avatars.com/api/?background=0D8ABC&color=fff"
					width="w-14"
					class="cursor-pointer"
					rounded="rounded-full"
					on:click={() => {
						goto(`${base}/login`);
					}}
				/>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft"><Navigation /></svelte:fragment>
	<!-- (sidebarRight) -->
	<!-- (pageHeader) -->
	<!-- Router Slot -->
	<div class="container h-full p-10 mx-auto">
		<slot />
	</div>
	<!-- ---- / ---- -->
	<svelte:fragment slot="pageFooter">{' '}</svelte:fragment>
	<!-- (footer) -->
</AppShell>
