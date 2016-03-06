/**
* returns sum of vectors
@memberOf poyekhali
@category Function
@sig
@param { [ array ] } xs
@return array
@example
  go.addVec([1, 1], [1, 1])
  //=> [2, 2]
  go.addVec([1, 2, 3], [1, 1, 1], [-1, -1, -1])
  //=> [2, 3, 4]
*/
import { applyVecFn } from './applyVecFn'

export const addVec = applyVecFn((a,b) => a + b)
