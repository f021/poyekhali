/**
* returns array of object methods
@memberOf poyekhali
@category Function
@sig
@param {object} ojb
@return [ function ]
@example
  go.getMethods({ x: 1, y: 2 })
  //=> [ ]
  go.getMethods({ x: 1, y: 2, fn: x => x, fn2: y => y })
  //=> [ x => x, y => y ]
*/
import { isFunc } from './isFunc'

export const getMethods = obj =>
    Object.keys(obj).map(key =>
      isFunc(obj[key]))
