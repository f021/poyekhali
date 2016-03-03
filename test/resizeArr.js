var assert = require('assert');
var poyekhali = require('../dist/poyekhali')
var resizeArr = poyekhali.resizeArr;

describe('resizeArr', function() {
  it('resize Array with align center', function() {
    assert.deepEqual([], resizeArr([1, 2, 3], 0 ));
    assert.deepEqual([2], resizeArr([1, 2, 3], 1));
    assert.deepEqual([1, 2], resizeArr([1, 2, 3], 2));
    assert.deepEqual([1, 2, 3], resizeArr([1, 2, 3], 3));
    assert.deepEqual([0, 1, 2, 3], resizeArr([1, 2, 3], 4));
    assert.deepEqual([0, 1, 2, 3, 0], resizeArr([1, 2, 3], 5));
    assert.deepEqual([0, 0, 1, 2, 3, 0], resizeArr([1,2,3], 6));

  });
});
