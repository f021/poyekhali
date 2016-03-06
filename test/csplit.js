const expect = require('chai').expect
const go = require('../dist/poyekhali')
const csplit = go.csplit
const fillArr = go.fillArr
const msg = 'returns splited array by col'

describe('csplit', () => {
  it(msg, () => {

    const arr = [ 1, 2, 3, 4, 5, 6, 7, 8 ]
    const arr3 = fillArr(27, x => x)
    console.log('-->',arr3)
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

  const b = csplit(csplit(arr3, 9), 3)
  // console.log(b[1][2][1])
  console.log('+++',b)
  console.log(b[0][0][1])
    // [
    //   [
    //     [ 1, 7 ], [ 4, 10 ]
    //   ],
    //   [
    //     [ 2, 8 ], [ 5, 11 ]
    //   ],
    //   [
    //     [ 3, 9 ], [ 6, 12 ]
    //   ]
    // ]
    //
    //
    // expect(csplit(arr, 3))
    //   .to.deep.equal([
    //
    //   ])

  })
})
