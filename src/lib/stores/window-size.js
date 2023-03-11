import { derived, writable } from 'svelte/store';
import { createClog } from '@marianmeres/clog';

const clog = createClog('window-size');

const getWindowSize = () => {
	if (typeof window !== 'undefined') {
		return {
			w: window.visualViewport?.width || 0,
			h: window.visualViewport?.height || 0
		};
	}
	return { w: 0, h: 0 };
};

export const windowSize = {
	...writable(getWindowSize()),
	touch: () => windowSize.set(getWindowSize())
};

// https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
// https://stackoverflow.com/questions/37112218/css3-100vh-not-constant-in-mobile-browser
windowSize.subscribe(({ h }) => {
	if (typeof document !== 'undefined') {
		document?.documentElement.style.setProperty('--vh', `${h * 0.01}px`);
	}
});

// https://developer.mozilla.org/en-US/docs/Web/API/VisualViewport
if (typeof window !== 'undefined') {
	window.visualViewport?.addEventListener('resize', windowSize.touch);
	window.visualViewport?.addEventListener('scroll', windowSize.touch);
}
