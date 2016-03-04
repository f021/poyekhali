const expect = require('chai').expect
const go = require('../dist/poyekhali')
const last = go.last

describe('last', () => {
  it('returns the value of the last element in the array or string', () => {
    expect(last([1, 2, 3])).to.equal(3)
    expect(last([])).to.equal(undefined)
    expect(last('')).to.equal(undefined)
    expect(last('abc')).to.equal('c')
  })
})
