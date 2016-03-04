/**
* returns vector sub of arrays
@memberOf poyekhali
@category Function
@sig
@param {array} xs
@return array
@example
  go.subVec([1, 1], [1, 1])
  //=> [0, 0]
  go.subVec([1, 2, 3], [1, 1, 1], [-1, -1, -1])
  //=> [1, 2, 3]
*/
import { applyVecFn } from './applyVecFn'

export const subVec = applyVecFn((a,b) => a - b)
