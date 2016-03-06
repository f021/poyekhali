const assert = require('assert')
const go = require('../dist/poyekhali')
const toArr = go.toArr
const msg = 'returns array of char if string spliting by n or return arr'

describe('toArr', function() {
  it(msg, () => {
    assert.deepEqual(['a', 'b', 'c'], toArr('abc'))
    assert.deepEqual([1, 2, 3], toArr([1, 2, 3]))
    assert.deepEqual(['a', 'b', 'c'], toArr('a,b,c', ','))
  })
})
