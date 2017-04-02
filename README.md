# lucas-lehmer
[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Codecov Status][codecov-image]][codecov-url]
[![Standard][standard-image]][standard-url]

> A Javascript Implementation of the Lucas-Lehmer Primality Test for Mersenne Primes

## Install

```sh
npm install --save lucas-lehmer
```

## Usage

```js
import lucasLehmer from 'lucas-lehmer'

lucasLehmer(3) // true, as 2^3 - 1 is prime
lucasLehmer(12) // False, as 2^12 - 1 isn't prime
```

## License

 MIT ©  [Adam Kelly](http://github.com/adamisntdead)

[npm-url]: https://npmjs.org/package/lucas-lehmer
[npm-image]: https://img.shields.io/npm/v/lucas-lehmer.svg?style=flat

[travis-url]: https://travis-ci.org/adamisntdead/lucas-lehmer
[travis-image]: https://img.shields.io/travis/adamisntdead/lucas-lehmer.svg?style=flat

[codecov-url]: https://codecov.io/github/adamisntdead/lucas-lehmer
[codecov-image]: https://img.shields.io/codecov/c/github/adamisntdead/lucas-lehmer.svg?style=flat

[depstat-url]: https://david-dm.org/adamisntdead/lucas-lehmer
[depstat-image]: https://david-dm.org/adamisntdead/lucas-lehmer.svg?style=flat

[download-image]: http://img.shields.io/npm/dm/lucas-lehmer.svg?style=flat

[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat
[standard-url]: http://standardjs.com/
