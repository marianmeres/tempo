import { writable, get, derived } from 'svelte/store';
import { createClog } from '@marianmeres/clog';
import { hms } from '$lib/hms.js';
import { lock } from '$lib/stores/lock.js';

const clog = createClog('tempo');

export const OUT_OF_DISPLAY_RANGE = {
	en: 'Sorry, result is out of display range. Please adjust your input.',
	sk: 'Výsledok je mimo zobraziteľný rozsah. Prosím upravte vstupy.'
};

//
export const DISTANCE = 'distance';
export const TIME = 'time';
export const TEMPO = 'tempo';

export let distance = writable(0);
export let time = writable(0);
export let tempo = writable(0);

distance.toVals = (v) => {
	const km = Math.floor(v);
	const dec = Math.round((v - km) * 100);
	return [km, dec];
};

time.toVals = (v) => hms(v);

tempo.toVals = (v) => {
	const [h, m, s] = hms(v);
	return [h * 3600 + m, s];
};

export let lastCalcTarget = writable(null);
lastCalcTarget.subscribe(createClog('lastCalcTarget'));

const _last2changes = writable([]);
_last2changes.subscribe((v) => {
	if (v.length === 2) {
		if (!v.includes(DISTANCE)) {
			distance.set(get(time) / get(tempo));
			return lastCalcTarget.set(DISTANCE);
		}
		if (!v.includes(TIME)) {
			time.set(get(tempo) * get(distance));
			return lastCalcTarget.set(TIME);
		}
		if (!v.includes(TEMPO)) {
			tempo.set(get(time) / get(distance));
			return lastCalcTarget.set(TEMPO);
		}
	}
});

const logChange = (what) => {
	// with lock special case
	const _lock = get(lock);
	if (_lock) {
		return _last2changes.set([...new Set([_lock, what])]);
	}

	//
	let _last2 = get(_last2changes);
	const lastIdx = Math.max(0, _last2.length - 1);
	if (_last2[lastIdx] !== what) _last2.push(what);
	_last2 = _last2.slice(-2);
	_last2changes.set(_last2);
};

export const setDistance = (km, dec) => {
	distance.set(parseInt(km, 10) + parseInt(dec, 10) / 100);
	logChange(DISTANCE);
};
export const setTime = (h, m, s) => {
	time.set(60 * 60 * h + 60 * m + s);
	logChange(TIME);
};
export const setTempo = (m, s) => {
	tempo.set(60 * m + s);
	logChange(TEMPO);
};

//
derived([distance, time, tempo], ([a, b, c]) => [
	a,
	distance.toVals(a).join('.'),
	b,
	time.toVals(b).join(':'),
	c,
	tempo.toVals(c).join(':')
]).subscribe(clog);
