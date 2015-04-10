'use strict';

var test = require('ava');
var osFilterObj = require('./');

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

	t.assert(osFilterObj(arr).length === 2, osFilterObj(arr).length);
	t.assert(osFilterObj(arr)[0].foo === 'all', osFilterObj(arr)[0].foo);
	t.assert(osFilterObj(arr)[1].foo === process.platform, osFilterObj(arr)[1].foo);
	t.assert(!osFilterObj(arr)[1].os, osFilterObj(arr)[1].os);
	t.end();
});
