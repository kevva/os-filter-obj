import test from 'ava';
import osFilterObj from './';

test('filter an array of objects to a specific os', t => {
	var arr = [{
		foo: 'all'
	}, {
		foo: 'linux',
		os: 'linux'
	}, {
		foo: 'darwin',
		os: 'darwin'
	}, {
		foo: 'win32',
		os: 'win32'
	}, {
		foo: 'arm',
		os: 'arm'
	}];

	t.is(osFilterObj(arr).length, 2);
	t.is(osFilterObj(arr)[0].foo, 'all');
	t.is(osFilterObj(arr)[1].foo, process.platform);
	t.is(osFilterObj(arr)[1].os, undefined);
});
