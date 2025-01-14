# p-props

> Like [`Promise.all()`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise/all) but for `Map` and `Object`

Useful when you need to run multiple promises concurrently and keep track of the fulfilled values by name.

## Install

```
$ npm install @0xbutterfield/p-props
```

## Usage

```js
import pProps from 'p-props';
import got from 'got';

const fetch = async url => {
	const {body} = await got(url);
	return body;
};

const sites = {
	ava: fetch('https://avajs.dev'),
	todomvc: fetch('https://todomvc.com'),
	github: fetch('https://github.com'),
	foo: 'bar'
};

console.log(await pProps(sites));
/*
{
	ava: '<!doctype …',
	todomvc: '<!doctype …',
	github: '<!doctype …',
	foo: 'bar'
}
*/
```

## API

### pProps(map, options?)

Returns a `Promise` that is fulfilled when all promises in `map` are fulfilled, or rejects if any of the promises reject. The fulfilled value is the same as `map`, but with a fulfilled version of each entry value.

#### map

Type: `Map | object`

Resolves entry values that are promises. Other values are passed through.

#### options

Type: `object`

See the [`p-map` options](https://github.com/sindresorhus/p-map#options).

## Related

- [p-all](https://github.com/sindresorhus/p-all) - Run promise-returning & async functions concurrently with optional limited concurrency
- [p-map](https://github.com/sindresorhus/p-map) - Map over promises concurrently
- [More…](https://github.com/sindresorhus/promise-fun)
