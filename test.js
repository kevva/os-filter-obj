'use strict';

var osFilterObj = require('./');
var test = require('ava');

test('filter an array of objects to a specific os', function (t) {
	var arr = [{
		foo: 'all'
	}, {
		foo: 'linux',
		os: 'linux',
	}, {
		foo: 'darwin',
		os: 'darwin'
	},{
		foo: 'win32',
		os: 'win32'
	}];

	t.assert(osFilterObj(arr).length === 2);
	t.assert(osFilterObj(arr)[0].foo === 'all');
	t.assert(osFilterObj(arr)[1].foo === process.platform);
	t.assert(!osFilterObj(arr)[1].os);
	t.end();
});
