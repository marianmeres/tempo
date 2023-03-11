import { i18nData } from '../../i18n-data.js';

export function load({ params }) {
	return {
		i18n: i18nData[params.locale] || {}
	};
}
