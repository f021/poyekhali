/**
* returns splited array by row
@memberOf poyekhali
@category Function
@sig
@param {array} xs
@param {int} w
@return [ [a] ]
@example
  go.rsplit([ 1, 2, 3, 4 ], 2)
  //=> [ [ 1, 2 ], [3, ,4 ] ]
*/

import { fillArr } from './fillArr'

export const rsplit = (arr, w) =>
  fillArr([ w, Math.floor(arr.length / w) ], (a, b) => arr[ b ])
