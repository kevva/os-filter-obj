'use strict';
var arch;
var platform;

module.exports = function (arr, opts) {
	if (!arr || !arr.length) {
		return [];
	}

	platform = platform || process.platform;
	arch = arch || require('arch')();

  if (opts && opts.keep) {
		return arr.filter(function (obj) {
			if ((obj.os === platform || !obj.os) && (obj.arch === arch || !obj.arch)) {
			  return obj;
			}
		});
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
