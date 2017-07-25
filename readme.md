# os-filter-obj [![Build Status](http://img.shields.io/travis/kevva/os-filter-obj.svg?style=flat)](https://travis-ci.org/kevva/os-filter-obj)

> Filter an array of objects to a specific OS


## Install

```
$ npm install --save os-filter-obj
```


## Usage

```js
var osFilterObj = require('os-filter-obj');

var arr = [{
	foo: 'linux-x64',
	os: 'linux',
	arch: 'x64'
}, {
	foo: 'darwin-x64',
	os: 'darwin',
	arch: 'x64'
},{
	foo: 'win32-x64',
	os: 'win32',
	arch: 'x64'
}];

osFilterObj(arr);
//=> [{foo: 'linux-x64'}];
```

## API

### osFilterObj(arr, [opts])

Filter an array of objects to a specific OS.

#### arr

Type: `Array`

The array to filter

#### options

Type: `Object`<br>

##### keep

Type: `boolean`<br>
Default: `false`

If false, matching `os` and `arch` keys are deleted from the object.

## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
