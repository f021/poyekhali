const expect = require('chai').expect
const go = require('../dist/poyekhali')
const last = go.last

describe('last', () => {
  it('returns the value of the last element in the array or string', () => {

    expect(last([1, 2, 3])).to.be.equal(3)
    expect(last([])).to.be.undefined
    expect(last('')).to.be.undefined
    expect(last('abc')).to.be.equal('c')

  })
})
