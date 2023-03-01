import { createLocalStorageWritable } from './utils/create-storage-writable-store.js';

export let DEFAULT_LOCALE = 'en';

export const i18nLocale = createLocalStorageWritable('locale', DEFAULT_LOCALE);
