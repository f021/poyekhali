const expect = require('chai').expect
const go = require('../dist/poyekhali')
const addVec = go.addVec

describe('addVec', () => {
  it('returns vector sum', () => {
    const vec1 = [0, 0]
    const vec2 = [-1, -1]
    const vec3 = [1, 1]
    const vec4 = [1, 0, 1]
    const vec5 = [-1, 1, -1]

    expect(addVec(vec1, vec2)).to.deep.equal([-1, -1])
    expect(addVec(vec3, vec3)).to.deep.equal([2, 2])
    expect(addVec(vec1, vec2, vec3)).to.deep.equal([0, 0])
    expect(addVec(vec4, vec5)).to.deep.equal([0, 1, 0])

  })
})
