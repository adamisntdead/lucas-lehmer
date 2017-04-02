const lucasLehmer = require('../src/index.js')
const test = require('ava').test

// Known primes to check
const knownPrimes = [3, 5, 7, 13, 17, 19, 31, 61, 89, 107, 127, 521, 607, 1279, 2203, 2281]

test('Check Known Primes, Up to 2^2281 - 1', t => {
  knownPrimes.map(lucasLehmer).forEach(val => t.is(val, true))
})

test('Verify Composite numbers', t => {
  // Helper functions
  const randomInt = (low, high) => Math.floor(Math.random() * (high - low + 1) + low)
  const isInArray = (value, array) => array.indexOf(value) > -1

  const numberOfTests = 20
  let randomComposites = []

  for (let i = 0; i < numberOfTests; i++) {
    randomComposites.push(randomInt(2, 2281))
  }

  randomComposites
    .filter(val => !isInArray(val, knownPrimes))
    .map(lucasLehmer)
    .forEach(val => t.is(val, false))
})
