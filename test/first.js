var assert = require('assert');
var P = require('../dist/poyekhali')
var first = P.first;

describe('first', function() {
  it('returns the value of the first element in the array', function() {
    assert.equal(1, first([1, 2, 3]));
    assert.deepEqual(undefined, first([]));
    assert.equal('a', first(['a']));
  });
});
