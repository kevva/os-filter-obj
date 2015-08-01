'use strict';
module.exports = function (arr) {
	var arch;
	var platform = process.platform;

	if (process.arch === 'x64') {
		arch = 'x64';
	} else if (process.arch === 'arm') {
		arch = 'arm';
	} else {
		arch = 'x86';
	}

	if (!arr || !arr.length) {
		return [];
	}

	return arr.filter(function (obj) {
		if (obj.os === platform && obj.arch === arch) {
			delete obj.os;
			delete obj.arch;
			return obj;
		} else if (obj.os === platform && !obj.arch) {
			delete obj.os;
			return obj;
		} else if (obj.arch === arch && !obj.os) {
			delete obj.arch;
			return obj;
		} else if (!obj.os && !obj.arch) {
			return obj;
		}
	});
};
