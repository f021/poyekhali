const expect = require('chai').expect
const poyekhali = require('../dist/poyekhali')
const zoomArr = poyekhali.zoomArr

describe('zoomArr', () => {
  it('returns array with new size', () => {

    expect(zoomArr([ 1, 2, 3 ], 0 )).to.be.deep.equal([ ])
    expect(zoomArr([ 1, 2, 3 ], 1 )).to.be.deep.equal([ 2 ])
    expect(zoomArr([ 1, 2, 3 ], 2 )).to.be.deep.equal([ 1, 2 ])
    expect(zoomArr([ 1, 2, 3 ], 3 )).to.be.deep.equal([ 1, 2, 3])
    expect(zoomArr([ 1, 2, 3 ], 4 )).to.be.deep.equal([ 0, 1, 2, 3 ])
    expect(zoomArr([ 1, 2, 3 ], 5 )).to.be.deep.equal([ 0, 1, 2, 3, 0])
    expect(zoomArr([ 1, 2, 3 ], 6 )).to.be.deep.equal([ 0, 0, 1, 2, 3, 0])
    expect(zoomArr(['a'], 3, '@')).to.be.deep.equal([ '@', 'a', '@' ])

  })
})
