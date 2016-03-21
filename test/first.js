const expect = require('chai').expect
const go = require('../dist/poyekhali')
const first = go.first

describe('first', () => {
  it('returns the value of the first element in the array or string', () => {

    expect(first([1, 2, 3])).to.be.equal(1)
    expect(first([])).to.be.undefined
    expect(first('abc')).to.be.equal('a')
    expect(first('')).to.be.undefined

  })
})
