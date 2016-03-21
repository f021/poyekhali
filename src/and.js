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
import { not } from './not'
import { isEmpty} from './isEmpty'
import { last } from './last'

export const and = (...args) =>
  args.every(not(isEmpty)) && last(args)
