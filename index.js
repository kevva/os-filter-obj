'use strict';
var arch;
var platform;

module.exports = function (arr) {
	if (!arr || !arr.length) {
		return [];
	}

	platform = platform || process.platform;
	arch = arch || require('arch')();

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
