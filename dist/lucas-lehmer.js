'use strict';

var BigNumber = require('bignumber.js');
BigNumber.config({ POW_PRECISION: 1000000000 });

module.exports = function (p) {
  // M = 2^p - 1
  var M = new BigNumber(2).pow(p).sub(1);
  var s = new BigNumber(4);

  for (var i = 0; i < p - 2; i++) {
    s = s.pow(2).sub(2).mod(M);
  }

  return s.toString() === '0';
};
