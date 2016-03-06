const expect = require('chai').expect
const go = require('../dist/poyekhali')
const rsplit = go.rsplit
const msg = 'returns splited array by row'

describe('rsplit', () => {
  it(msg, () => {

    const arr = [ 1, 2, 3, 4, 5, 6, 7, 8 ]

    expect(rsplit(arr, 4))
      .to.deep.equal([
        [ 1, 2, 3, 4 ],
        [ 5, 6, 7, 8 ]
      ])

    expect(rsplit(arr, 2))
      .to.deep.equal([
        [ 1, 2 ],
        [ 3, 4 ],
        [ 5, 6 ],
        [ 7, 8 ]
      ])

    expect(rsplit(rsplit(arr, 2), 2))
      .to.deep.equal([
        [ [ 1, 2 ], [ 3, 4 ] ],
        [ [ 5, 6 ], [ 7, 8 ] ]
      ])

    expect(rsplit(arr, 3))
      .to.deep.equal([
        [ 1, 2, 3 ],
        [ 4, 5, 6 ]
      ])

  })
})
