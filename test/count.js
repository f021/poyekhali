const expect = require('chai').expect
const go = require('../dist/poyekhali')
const count = go.count

describe('count', () => {
  it('wrap function with counter by right side', () => {

    const arr = []
    const a = count(i => i)
    const b = count()
    const c = count((a,b) => a * b)

    expect(a()).to.equal(0)
    expect(a()).to.equal(1)
    expect(a()).to.equal(2)

    expect(b()).to.equal(0)
    expect(b()).to.equal(1)
    expect(b()).to.equal(2)

    expect(c(1)).to.equal(0)
    expect(c(5)).to.equal(5)
    expect(c(10)).to.equal(20)

    arr.push(c(1))
    expect(arr).to.deep.equal([3])

    arr.push(c(1))
    expect(arr).to.deep.equal([3, 4])

  })
})
