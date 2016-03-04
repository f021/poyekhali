const expect = require('chai').expect
const go = require('../dist/poyekhali')
const subVec = go.subVec

describe('subVec', () => {
  it('returns subtraction vectors', () => {
    const vec1 = [0, 0]
    const vec2 = [-1, -1]
    const vec3 = [1, 1]
    const vec4 = [1, 0, 1]
    const vec5 = [-1, 1, -1]

    expect(subVec(vec2)).to.deep.equal([-1, -1])
    expect(subVec(vec1, vec2)).to.deep.equal([1, 1])
    expect(subVec(vec4, vec5)).to.deep.equal([2, -1, 2])
    expect(subVec(vec1, vec2, vec1)).to.deep.equal([1, 1])
    expect(subVec(vec1, vec2, vec1, vec3)).to.deep.equal([0, 0])

  })
})
