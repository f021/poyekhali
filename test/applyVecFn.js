const expect = require('chai').expect
const go = require('../dist/poyekhali')
const applyVecFn = go.applyVecFn

describe('applyVecFn', () => {
  it('returns array, where each element making by applying Function', () => {
    const vec1 = [0, 0]
    const vec2 = [-1, -1]
    const vec3 = [1, 1]
    const vec4 = [1, 0, 1]
    const vec5 = [-1, 1, -1]

    const add = applyVecFn((a, b) => a + b)
    const sub = applyVecFn((a, b) => a - b)
    const div = applyVecFn((a, b) => a / b)
    const max = applyVecFn((a, b) => a > b ? a : b)

    expect(add(vec1, vec2)).to.deep.equal([-1, -1])
    expect(add(vec3, vec3)).to.deep.equal([2, 2])
    expect(add(vec1, vec2, vec3)).to.deep.equal([0, 0])
    expect(add(vec4, vec5)).to.deep.equal([0, 1, 0])

    expect(sub(vec2)).to.deep.equal([-1, -1])
    expect(sub(vec1, vec2)).to.deep.equal([1, 1])
    expect(sub(vec4, vec5)).to.deep.equal([2, -1, 2])
    expect(sub(vec1, vec2, vec1)).to.deep.equal([1, 1])
    expect(sub(vec1, vec2, vec1, vec3)).to.deep.equal([0, 0])

    expect(div([10, 6], [5, 3])).to.deep.equal([2, 2])

    expect(max([-1, 10], [2, 3], [5, 6])).to.deep.equal([5, 10])
  })
})
