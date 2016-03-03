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
import { fromRow } from './fromRow'
import { toRow } from './toRow'
import { todo } from './todo'

export const addRow = todo(fromRow, toRow)
