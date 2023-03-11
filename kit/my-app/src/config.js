import { base } from '$app/paths';

export let APP_ID = 'tempo';

export const DEFAULT_LOCALE = 'sk';

export const AVAILABLE_LOCALES = [
	{ locale: 'sk', label: 'Slovensky', icon: '&#127480;&#127472;' },
	{ locale: 'en', label: 'English', icon: '&#127468;&#127463;' },
	{ locale: 'de', label: 'Deutsch', icon: '&#127465;&#127466;' }
];

// central point of reference
export const ROUTE = {
	main: {
		id: '/(localized)/[locale=locale]',
		url: (locale) => `${base}/${locale}/`
	},
	settings: {
		id: '/(localized)/[locale=locale]/settings',
		url: (locale) => `${base}/${locale}/settings`
	}
};
