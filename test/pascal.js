const expect = require('chai').expect
const go = require('../dist/poyekhali')
const pascal = go.pascal

describe('pascal triangle', () => {
  it('(x, y) => i', () => {
    expect(pascal(0, 0)).to.be.equal(1)
    expect(pascal(0, 1)).to.be.equal(1)
    expect(pascal(1, 1)).to.be.equal(1)
    expect(pascal(0, 2)).to.be.equal(1)
    expect(pascal(1, 2)).to.be.equal(2)
    expect(pascal(1, 3)).to.be.equal(3)
    expect(pascal(1, 4)).to.be.equal(4)
    expect(pascal(2, 4)).to.be.equal(6)
  })
})
