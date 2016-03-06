/**
* returns true if objects equal, compared by JSON.stringify
@memberOf poyekhali
@category Function
@sig
@param {object} a
@param {objcet} b
@return boolean
@example
  go.sameObj({x: 1}, {x: 1}) //=> true
  go.toArr({x: 1} , {y: 2}) //=> false
*/
export const sameObj = (a, b) =>
  JSON.stringify(a) === JSON.stringify(b)
