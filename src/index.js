const BigNumber = require('bignumber.js')
BigNumber.config({ POW_PRECISION: 1000000000 })

module.exports = p => {
  // M = 2^p - 1
  const M = new BigNumber(2).pow(p).sub(1)
  let s = new BigNumber(4)

  for (let i = 0; i < p - 2; i++) {
    s = s.pow(2).sub(2).mod(M)
  }

  return s.toString() === '0'
}
