import { SimpleRouter } from '@marianmeres/simple-router';
import NotFound from './routes/not-found/NotFound.svelte';
import Index from './routes/index/Index.svelte';
import { get as storeGet } from 'svelte/store';
import { i18nLocale } from './stores/i18n.js';

const loc = (v) => v || storeGet(i18nLocale);

export class ROUTE {
	static INDEX = (locale) => `#/${loc(locale)}`;
}

//
export const navigateTo = (route) => (location.hash = route);

export const router = new SimpleRouter({ '*': () => ({ component: NotFound }) });

router.on([''], () => navigateTo(ROUTE.INDEX()));

router.on(ROUTE.INDEX('[locale]'), (params) => ({ component: Index, props: { params } }));
