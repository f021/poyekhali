const expect = require('chai').expect
const go = require('../dist/poyekhali')
const not = go.not

describe('not', () => {
  it('returns same as logical operator !', () => {
    expect(not(true)).to.equal(false)
    expect(not('')).to.equal(true)
  })
})
