'use strict';
let arch;
let platform;

module.exports = function (arr, opts) {
	if (!arr || arr.length === 0) {
		return [];
	}

	platform = platform || process.platform;
	arch = arch || require('arch')();

	if (opts && opts.keep) {
		return arr.filter(obj => {
			if ((obj.os === platform || !obj.os) && (obj.arch === arch || !obj.arch)) {
				return true;
			}
			return false;
		});
	}

	return arr.filter(obj => {
		if (obj.os === platform && obj.arch === arch) {
			delete obj.os;
			delete obj.arch;
			return true;
		} else if (obj.os === platform && !obj.arch) {
			delete obj.os;
			return true;
		} else if (obj.arch === arch && !obj.os) {
			delete obj.arch;
			return true;
		} else if (!obj.os && !obj.arch) {
			return true;
		}
		return false;
	});
};
