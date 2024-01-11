<script lang="ts">
	import { noteStore } from '$lib/storage';
	import { getToastStore, type ModalSettings, getModalStore } from '@skeletonlabs/skeleton';

	const toastStore = getToastStore();
	const modalStore = getModalStore();

	function deleteNote(noteId: string) {
		const confirmDelete: ModalSettings = {
			type: 'confirm',
			title: 'Delete Note',
			body: 'Are you sure you want to delete this note?',
			response(r: boolean) {
				if (r) {
					noteStore.update((noteList) => noteList.filter((n) => n.id !== noteId));
					toastStore.trigger({
						message: 'Note deleted successfully',
						background: 'variant-ghost-success'
					});
					return;
				}
				toastStore.trigger({
					message: 'Note not deleted',
					background: 'variant-ghost-error'
				});
			}
		};
		modalStore.trigger(confirmDelete);
	}
</script>

<div class="container h-screen mx-auto gap-8 flex flex-col">
	<div class="flex items-center justify-between">
		<h2>Notes</h2>
		<a href="/new" class="variant-ghost-primary btn rounded"> New Note </a>
	</div>
	<div class="grid grid-cols-3 gap-4">
		{#each $noteStore as note}
			<div class="card p-4 variant-ghost-warning flex flex-col gap-2 relative">
				<button
					on:click|preventDefault={() => {
						deleteNote(note.id);
					}}
					class="btn-icon btn-icon-sm variant-filled-error absolute -top-1.5 -right-1.5">X</button
				>
				<div>{note.content}</div>
				<flex class="gap-2 flex-wrap">
					{#each note.tags as tag}
						<span class="badge variant-filled-secondary mr-1">{tag}</span>
					{/each}
				</flex>
			</div>
		{/each}
	</div>
	<div class="space-y-5">
		<!-- <button class="btn variant-filled-secondary">Hello World</button> -->
	</div>
</div>
