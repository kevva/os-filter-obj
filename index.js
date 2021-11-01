'use strict';
module.exports = input => {
	const platform = process.env.npm_config_platform || process.platform;
	const arch = process.env.npm_config_arch || require('arch')();

	const check = (bool, key, val) => (!bool || !key || key === val);

	return input.filter(x => [platform, arch].every((y, i) => check(i === 0, x.os, y) && check(i === 1, x.arch, y)));
};