import { createClogStr } from '@marianmeres/clog';
import { dset } from 'dset/merge';

export const hoistLastKey = (src) => {
	const _hoistLastKey = (_src, _target, _path) => {
		_path ||= [];
		Object.keys(_src || {}).forEach((k) => {
			_path.push(k);
			if (typeof _src[k] === 'string') {
				_path.pop();
				dset(_target, [k, ..._path].join('.').toLowerCase(), _src[k]);
			} else {
				_hoistLastKey(_src[k], _target, _path);
				_path.pop();
			}
		});
	};

	let out = {};
	_hoistLastKey(src, out, null);

	return out;
};

// quick-n-dirty test
/*
const clog = createClogStr('hoist')
const data = {
	header: {
		title: {
			EN: 'Running pace calculator',
			sk: 'Kalkulačka bežeckého tempa',
			de: 'Lauftempo-Rechner',
		}
	},
	foo: {
		EN: 'foo',
		sk: 'fuu',
	}
};
clog(hoistLastKey(data))
*/
