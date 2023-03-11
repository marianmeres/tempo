import { json } from '@sveltejs/kit';
import { i18nData } from '../../../../i18n-data.js';
import { createTranslate } from '$lib/i18n.js';

const t = createTranslate('header');

export const trailingSlash = 'never';

export const prerender = true;

export function GET({ params }) {
	const i18n = i18nData[params.locale];
	return json({
		name: t.raw(i18n, 'title'),
		short_name: t.raw(i18n, '/tempo.title'),
		icons: [
			{
				src: '../google-touch-icon.png',
				sizes: '512x512',
				type: 'image/png'
			}
		],
		background_color: '#ffffff',
		theme_color: '#3b82f6',
		display: 'fullscreen'
	});
}
