const expect = require('chai').expect
const go = require('../dist/poyekhali')
const fillArr = go.fillArr
const msg = 'return n-dimension array filling by param function'

describe('fillArr', () => {
  it(msg, () => {

    const arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ]

    expect(fillArr(2, x => x))
      .to.deep.equal([ 0, 1 ])

    expect(fillArr([ 3 ], () => '#'))
      .to.deep.equal([ '#', '#', '#' ])

    expect(fillArr([ 3 ], x => x))
      .to.deep.equal([ 0, 1, 2 ])

    expect(fillArr([ 3, 2 ], x => x))
      .to.deep.equal([
        [ 0, 1, 2 ],
        [ 0, 1, 2 ]
      ])

    expect(fillArr([ 2, 3 ], (x, y) => y))
      .to.deep.equal([
        [ 0, 1 ],
        [ 2, 3 ],
        [ 4, 5 ]
      ])

    expect(fillArr([ 2, 2 ], (x, y) => [ x, y ]))
      .to.deep.equal([
        [ [ 0, 0 ], [ 1, 1 ] ],
        [ [ 0, 2 ], [ 1, 3 ] ]
      ])

    expect(fillArr([ 3, 3 ], (x, y) => [ x, Math.floor(y / 3) ]))
      .to.deep.equal([
        [ [ 0, 0 ], [ 1, 0 ],  [2, 0] ],
        [ [ 0, 1 ], [ 1, 1 ],  [2, 1] ],
        [ [ 0, 2 ], [ 1, 2 ],  [2, 2] ],
      ])


    expect(fillArr([ 2, 3, 4 ], (x, y, z) => x))
      .to.deep.equal([
        [ [ 0, 1 ], [ 0, 1 ], [ 0, 1 ] ],
        [ [ 0, 1 ], [ 0, 1 ], [ 0, 1 ] ],
        [ [ 0, 1 ], [ 0, 1 ], [ 0, 1 ] ],
        [ [ 0, 1 ], [ 0, 1 ], [ 0, 1 ] ]
      ])

    expect(fillArr([2, 3, 4], (x, y, z) => y))
      .to.deep.equal([
        [ [ 0, 1 ], [ 2, 3 ], [ 4, 5] ],
        [ [ 0, 1 ], [ 2, 3 ], [ 4, 5] ],
        [ [ 0, 1 ], [ 2, 3 ], [ 4, 5] ],
        [ [ 0, 1 ], [ 2, 3 ], [ 4, 5] ]
      ])

    expect(fillArr([2, 3, 4], (x, y, z) => z))
      .to.deep.equal([
        [ [  0,  1 ], [  2,  3 ], [  4,  5 ] ],
        [ [  6,  7 ], [  8,  9 ], [ 10, 11 ] ],
        [ [ 12, 13 ], [ 14, 15 ], [ 16, 17 ] ],
        [ [ 18, 19 ], [ 20, 21 ], [ 22, 23 ] ]
      ])

    

    // expect(fillArr([2, 3, 4], (x, y, z) => z))
    //   .to.deep.equal([
    //     [ [  0,  1 ], [  2,  3 ], [  4,  5 ] ],
    //     [ [  6,  7 ], [  8,  9 ], [ 10, 11 ] ],
    //     [ [ 12, 13 ], [ 14, 15 ], [ 16, 17 ] ],
    //     [ [ 18, 19 ], [ 20, 21 ], [ 22, 23 ] ]
    //   ])

      console.log(fillArr([ 4, 3 ],
        (x, y) => arr[y+4] ))

    // expect(fillArr([ 4, 3 ], (x, y) => arr[Math.floor(y/x)] ))
    //   .to.deep.equal([
    //     [ 1, 4 , 7, 10 ],
    //     [ 2, 5 , 8, 11 ],
    //     [ 3, 6 , 9, 12 ]
    //   ])
    // expect(fillArr([ 2, 3 ], (x, y) => arr[x] ))
    //   to.deep.equal([
    //     [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ],
    //     [ [ 7, 8 ], [ 9, 10 ], [ 11, 12 ] ]
    //   ])

  })
})
