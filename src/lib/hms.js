export const hms = (secs) => {
	secs = parseInt(secs, 10);
	const h = Math.floor(secs / 3600);
	const m = Math.floor((secs - h * 3600) / 60);
	const s = secs - h * 3600 - m * 60;
	return [h, m, s];
};
