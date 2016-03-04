const assert = require('assert')
const P = require('../dist/poyekhali')
const first = P.first

describe('first', () => {
  it('returns the value of the first element in the array or string', () => {
    assert.equal(1, first([1, 2, 3]))
    assert.deepEqual(undefined, first([]))
    assert.equal('a', first(['a']))
  })
})
