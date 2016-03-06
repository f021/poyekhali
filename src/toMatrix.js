/**
* returns n-dim array with access to elm by [x][y][...][n]
@memberOf poyekhali
@category Function
@sig
@param {array} arr
@param {(array | int)}
@return [ array ]
@example
  go.toMatrix([1,2,3,4], 2)
  //=> [[1, 3], [2, 4]]
  go.toArr([1,2,3]) //=> [1, 2, 3]
*/
import toCol from './toCol'

export const toMatrix = (arr, depth) => {
  return {arr, depth}
}
