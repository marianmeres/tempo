import { redirect } from '@sveltejs/kit';
import { base } from '$app/paths';
import { DEFAULT_LOCALE } from '../config.js';

export async function load({ url, fetch, params }) {
	throw redirect(301, `${base}/${DEFAULT_LOCALE}/`);
}
