<script lang="ts">
	import { goto } from '$app/navigation';
	import { noteStore } from '$lib/storage';
	import { InputChip, Toast, getToastStore, type ToastSettings } from '@skeletonlabs/skeleton';

	const toastStore = getToastStore();

	let list: string[] = [];
	let content: string;

	const t: ToastSettings = {
		message: 'Note created successfully!',
		background: 'variant-filled-success'
	};

	function createNote() {
		noteStore.update((noteList) => [...noteList, { id: crypto.randomUUID(), content, tags: list }]);
		list = [];
		content = '';
		toastStore.trigger(t);
		goto('/');
	}
</script>

<div class="container h-full mx-auto gap-8 flex flex-col">
	<form class="card p-4 flex flex-col gap-3">
		<h2>New Form</h2>
		<textarea bind:value={content} class="textarea" rows="5" placeholder="Note Content" />
		<InputChip bind:value={list} name="chips" placeholder="Enter any value..." />
		<button
			on:click|preventDefault={createNote}
			type="button"
			class="btn variant-ghost-primary self-end">Create Note</button
		>
	</form>
</div>
