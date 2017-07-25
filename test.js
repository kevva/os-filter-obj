import test from 'ava';
import m from '.';

test(t => {
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
