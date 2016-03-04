const expect = require('chai').expect
const go = require('../dist/poyekhali')
const isEmpty = go.isEmpty

describe('isEmpty', () => {
  it('returns true if param false, null or undefined', () => {
    expect(isEmpty(false)).to.equal(true)
    expect(isEmpty(null)).to.equal(true)
    expect(isEmpty(undefined)).to.equal(true)
    expect(isEmpty('')).to.equal(false)
    expect(isEmpty(1)).to.equal(false)
    expect(isEmpty(0)).to.equal(false)
    expect(isEmpty([])).to.equal(false)
  })
})
