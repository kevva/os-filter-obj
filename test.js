import test from 'ava';
import m from '.';

test('filter an array of objects to a specific os', t => {
	const arr = [{
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

	t.is(m(arr).length, 2);
	t.is(m(arr)[0].foo, 'all');
	t.is(m(arr)[1].foo, process.platform);
	t.is(m(arr)[1].os, undefined);
});

test('filter an array of objects to a specific os without alter the objects', t => {
	const arr = [{
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

	t.is(m(arr, {keep: true}).length, 2);
	t.is(m(arr, {keep: true})[0].os, undefined);
	t.is(m(arr, {keep: true})[1].os, process.platform);
});
