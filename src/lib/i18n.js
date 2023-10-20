import { createClog } from '@marianmeres/clog';
import dlv from 'dlv';

const clog = createClog('i18n');

export const createTranslate = (ns) => {
	const createPath = (ns, path) => {
		if (ns === null) return `${path}`.toLowerCase();
		return (
			`${path || ''}`.startsWith('/') ? `${path}`.slice(1) : `${ns}.${path}`
		).toLowerCase();
	};

	const wrap = (id, v) => `<span data-i18n="${id}">${v}</span>`;

	const t = (data, path, fallback = undefined) => {
		let _path = createPath(ns, path);
		return wrap(_path, dlv(data, _path, fallback));
	};

	t.raw = (data, path, fallback = undefined) => dlv(data, createPath(ns, path), fallback);

	return t;
};
