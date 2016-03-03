var assert = require('assert');
var P = require('../dist/poyekhali');
var toArr = P.toArr;

describe('toArr', function() {
  it('if string split to arr', function() {
    assert.equal(['a', 'b', 'c'], toArr('abc'));
    assert.equal([1, 2, 3], toArr([1, 2, 3]));
    assert.equal(['a', 'b', 'c'], toArr('a,b,c', ','));
  })
})
