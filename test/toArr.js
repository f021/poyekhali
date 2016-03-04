const assert = require('assert')
const go = require('../dist/poyekhali')
const toArr = go.toArr

describe('toArr', function() {
  it('if string split to arr', () => {
    assert.deepEqual(['a', 'b', 'c'], toArr('abc'))
    assert.deepEqual([1, 2, 3], toArr([1, 2, 3]))
    assert.deepEqual(['a', 'b', 'c'], toArr('a,b,c', ','))
  })
})
