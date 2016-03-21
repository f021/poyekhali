const expect = require('chai').expect
const go = require('../dist/poyekhali')
const trianglePascal = go.trianglePascal

describe('trianglePascal', () => {
  it('return Pascal triangle n-depth', () => {

    arr = [1, 1, 1, 1, 2, 1, 1, 3, 3, 1, 1, 4, 6, 4, 1]
    expect(trianglePascal(0)).to.deep.equal(t[0])
  })
})
