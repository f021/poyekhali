const expect = require('chai').expect
const go = require('../dist/poyekhali')
const csplit = go.csplit
const fillArr = go.fillArr

describe('csplit', () => {
  it('returns splited array by col length', () => {

    const arr = [ 1, 2, 3, 4, 5, 6, 7, 8 ]
    const arr3 = fillArr(27, x => x)

    expect(csplit(arr, 4))
      .to.deep.equal([
        [ 1, 5 ],
        [ 2, 6 ],
        [ 3, 7 ],
        [ 4, 8 ]
      ])

    expect(csplit(arr, 2))
      .to.deep.equal([
        [ 1, 3, 5, 7 ],
        [ 2, 4, 6, 8 ]
      ])

    expect(csplit(csplit(arr, 4), 2))
      .to.deep.equal([
        [ [ 1, 5 ], [ 3, 7 ] ],
        [ [ 2, 6 ], [ 4, 8 ] ]
      ])

  })
})
