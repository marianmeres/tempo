import { writable } from 'svelte/store';
import { createLocalStorage, createSessionStorage } from '../../lib/storage.js';

const _createStorageWritableStoreFactory =
	(storage) =>
	(key, initial = null, factory = null) => {
		// idea tu je, ze ked pri inicializacii si posielame nejaku factory, tak ju
		// automaticky vzdy pouzijeme, ale nie pri save-e do storage
		const _maybeFactory = (data) =>
			typeof factory === 'function' ? factory(data) : data;

		// initialize storage with initial value if not present
		// note that initial Promise value will be serialized as "{}"
		if (storage.getItem(key) === null) {
			storage.setItem(key, initial);
		}

		const saved = storage.getItem(key);

		// create the underlying writable store with initial value (which may have been
		// saved in storage)
		const { subscribe, set } = writable(_maybeFactory(saved));

		const _set = (value) => {
			// always keep in sync with storage, but (opinionated) reset on error
			storage.setItem(key, value instanceof Error ? null : value);
			return set(_maybeFactory(value));
		};

		return {
			subscribe,
			set: _set,
			update: (value) => _set(value),
		};
	};

export const createSessionStorageWritable = _createStorageWritableStoreFactory(
	createSessionStorage()
);

export const createLocalStorageWritable = _createStorageWritableStoreFactory(
	createLocalStorage()
);
