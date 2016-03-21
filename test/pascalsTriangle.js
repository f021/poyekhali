const expect = require('chai').expect
const go = require('../dist/poyekhali')
const pascalsTriangle = go.pascalsTriangle

describe('pascalsTriangle', () => {
  it('return Pascal triangle n-depth', () => {
    const arr = [1, 1, 1, 1, 2, 1, 1, 3, 3, 1, 1, 4, 6, 4, 1]

    expect(pascalsTriangle(0)).to.be.deep.equal([])
    expect(pascalsTriangle(1)).to.be.deep.equal([1])
    expect(pascalsTriangle(2)).to.be.deep.equal(arr.slice(0, 3))
    expect(pascalsTriangle(5)).to.be.deep.equal(arr)
  })
})
