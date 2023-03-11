import { APP_ID } from '../config.js';

// avoid name collisions in local dev (should not be issue on prod)
const _key = (k) => `${APP_ID}-${k}`;

const _serialize = (value) => JSON.stringify(value);

const _unserialize = (value) => {
	try {
		return JSON.parse(value === void 0 ? null : value);
	} catch (e) {
		console.warn('Error: JSON.parse <-', value);
		return null;
	}
};

/**
 * quick-n-dirty SSR safe session/localStorage proxy factory
 * @param type
 */
const _createStorage = (type) => {
	// return noop mock at SSR
	if (typeof window === 'undefined') {
		return {
			setItem: (key, value) => void 0,
			getItem: (key) => null,
			removeItem: (key) => void 0,
			clear: () => void 0
		};
	}

	let storage = /session/i.test(type) ? sessionStorage : localStorage;

	const setItem = (key, value) => {
		try {
			if (value === undefined) {
				storage.removeItem(_key(key));
			} else {
				storage.setItem(_key(key), _serialize(value));
			}
		} catch (e) {
			// e.g. QuotaExceededError... log, but safely continue...
			console.error(e);
		}
	};

	const removeItem = (key) => storage.removeItem(_key(key));

	const getItem = (key) => _unserialize(storage.getItem(_key(key)));

	return { ...storage, removeItem, setItem, getItem };
};

export const createLocalStorage = () => _createStorage('local');

export const createSessionStorage = () => _createStorage('session');
