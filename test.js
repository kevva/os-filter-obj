'use strict';

var osFilterObj = require('./');
var test = require('ava');

test('filter an array of objects to a specific os', function (t) {
	var arr = [{
		foo: 'linux',
		os: 'linux',
	}, {
		foo: 'darwin',
		os: 'darwin'
	},{
		foo: 'win32',
		os: 'win32'
	}];

	t.assert(osFilterObj(arr).length === 1);
	t.assert(osFilterObj(arr)[0].foo === process.platform);
	t.assert(!osFilterObj(arr)[0].os);
	t.end();
});
