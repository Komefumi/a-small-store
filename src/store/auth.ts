import { writable } from 'svelte/store';
import type { BackendUserType } from '../type-system/backend';

export const user = writable<null | BackendUserType>(null);
