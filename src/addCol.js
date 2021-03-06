/**
* if string return arr
@memberOf poyekhali
@category Function
@sig
@param {(string|array)} xs
@param {string} [n='']
@return array
@example
  go.toArr('abc') //=> ['a', 'b', 'c']
  go.toArr([1,2,3]) //=> [1, 2, 3]
*/

import { fromCol } from './fromCol'
import { toCol } from './toCol'
import { todo } from './todo'

export const addCol = todo(fromCol, toCol)
