const expect = require('chai').expect
const go = require('../dist/poyekhali')
const gaussSum = go.gaussSum

describe('gaussSum', () => {
  it('return sum of ', () => {

    expect(gaussSum(1, 3)).to.be.equal(6)
    expect(gaussSum(4, 2)).to.be.equal(9)
    expect(gaussSum(5, 2)).to.be.equal(14)
    expect(gaussSum(1, 9)).to.be.equal(45)
    expect(gaussSum(1, 100)).to.be.equal(5050)

  })
})
