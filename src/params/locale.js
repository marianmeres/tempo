import { AVAILABLE_LOCALES } from '../config.js';

export const match = (param) => !!AVAILABLE_LOCALES.find((o) => o.locale === param);
