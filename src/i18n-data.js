import { hoistLastKey } from '$lib/utils/hoist-last-key.js';
import { createClog } from '@marianmeres/clog';
import { ROUTE } from './config.js';

export const i18nData = hoistLastKey({
	header: {
		title: {
			en: 'Running calculator',
			sk: 'Bežecká kalkulačka',
			de: 'Laufender Rechner'
		},
		settings: { en: 'Settings', sk: 'Nastavenie', de: 'Einstellungen' },
		home: { en: 'Back to home', sk: 'Späť na úvod', de: 'Zurück zur Einleitung' }
	},
	out_of_display_range: {
		en: 'The result is outside the displayable range. Please edit the inputs.',
		sk: 'Výsledok je mimo zobraziteľný rozsah. Prosím upravte vstupy.',
		de: 'Das Ergebnis liegt außerhalb des darstellbaren Bereichs. Bitte bearbeiten Sie die Eingaben.'
	},
	distance: {
		title: { sk: 'Vzdialenosť', en: 'Distance', de: 'Distanz' },
		menu: {
			marathon: { sk: 'Maratón', en: 'Marathon', de: 'Marathon' },
			halfmarathon: { sk: 'Polmaratón', en: 'Half marathon', de: 'Halbmarathon' },
			mile: { sk: 'Míľa', en: 'A mile', de: 'Eine Meile' }
		}
	},
	time: {
		title: { sk: 'Čas', en: 'Time', de: 'Zeit' }
	},
	tempo: {
		title: { sk: 'Tempo', en: 'Pace', de: 'Tempo' }
	},
	[ROUTE.main.id]: {
		html_title: {
			en: 'Running pace calculator',
			sk: 'Kalkulačka bežeckého tempa',
			de: 'Lauftempo-Rechner'
		},
		og: {
			title: {
				sk: 'Kalkulačka bežeckej vzdialenosti, času a tempa.',
				en: "Tiny calculator of runner's distance, time and pace.",
				de: 'Winziger Rechner für Distanz, Zeit und Tempo des Läufers.'
			},
			description: {
				sk: 'Upravte ľubovoľné dve, tretí sa dopočíta.',
				en: 'Edit any two, the third will be calculated.',
				de: 'Bearbeiten Sie zwei beliebige, der dritte wird berechnet.'
			}
		}
	},
	[ROUTE.settings.id]: {
		html_title: { en: 'Settings', sk: 'Nastavenia', de: 'Einstellungen' },
		language: { en: 'Language', sk: 'Jazyk', de: 'Lokalisierung' },
		header: {
			title: { en: 'Settings', sk: 'Nastavenia', de: 'Einstellungen' }
		}
	}
});

// createClog('i18n-data')(i18nData);
