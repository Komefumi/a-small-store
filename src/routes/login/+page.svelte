<script lang="ts">
	import { getToastStore, type ToastSettings } from '@skeletonlabs/skeleton';
	import { supabase } from '$lib';
	import { base } from '$app/paths';
	import { goto } from '$app/navigation';
	import { user } from '../../store/auth';

	const toastStore = getToastStore();

	let loading = false;
	let email = '';

	const tLogin: OperationToastSettings = {
		success: {
			message: 'Login link sent to email',
			background: 'variant-filled-success'
		},
		error: {
			message: 'Failed to login - please try again later',
			background: 'variant-filled-error'
		}
	};

	const tLogout: OperationToastSettings = {
		success: {
			message: 'Successfully logged out',
			background: 'variant-filled-success'
		},
		error: {
			message: 'Failed to logout - please try again later',
			background: 'variant-filled-error'
		}
	};

	async function handleLogin() {
		try {
			loading = true;
			const { error } = await supabase.auth.signInWithOtp({ email });
			if (error) {
				throw error;
			}
			toastStore.trigger(tLogin.success);
			goto(base + '/');
		} catch (error) {
			toastStore.trigger(tLogin.error);
			console.error(error);
		} finally {
			loading = false;
		}
	}

	async function handleLogout() {
		try {
			loading = true;
			const { error } = await supabase.auth.signOut();
			if (error) {
				throw error;
			}
			toastStore.trigger(tLogout.success);
			goto(base + '/');
		} catch (error) {
			toastStore.trigger(tLogout.error);
			console.error(error);
		} finally {
			loading = false;
		}
	}
</script>

<div class="flex pt-20 flex-col justify-center px-6 lg:px-8">
	<div class="sm:mx-auto sm:w-full sm:max-w-sm">
		<h2 class="text-center text-2xl font-bold leading-9 tracking-tight">
			{#if $user}
				Log out
			{:else}
				Sign in to your account
			{/if}
		</h2>
	</div>

	<div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
		{#if $user}
			<form class="space-y-6" on:submit|preventDefault={handleLogout}>
				<div>
					<button
						type="submit"
						class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						disabled={loading}>Log out</button
					>
				</div>
			</form>
		{:else}
			<form class="space-y-6" on:submit|preventDefault={handleLogin}>
				<div>
					<label for="email" class="block text-sm font-medium leading-6">Email address</label>
					<div class="mt-2">
						<input
							id="email"
							name="email"
							type="email"
							autocomplete="email"
							required
							bind:value={email}
							class="block w-full text-gray-900 rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
						/>
					</div>
				</div>

				<div>
					<button
						type="submit"
						class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						disabled={loading}>Sign in</button
					>
				</div>
			</form>
		{/if}
	</div>
</div>
