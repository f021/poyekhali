const expect = require('chai').expect
const go = require('../dist/poyekhali')
const sameObj = go.sameObj
const msg = 'returns true if objects equal, compared by JSON.stringify'

describe('sameObj', () => {

  it(msg, () => {

    const a = { x: 5, y: 5, z: {a : 2} }
    const b = { x: 5, y: 5, z: {a : 2} }
    const c = { a: 2 }

    expect(sameObj(a, b)).to.equal(true)
    expect(sameObj(a, c)).to.equal(false)
    expect(sameObj(a.z, c)).to.equal(true)

  })
})
