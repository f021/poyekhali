/**
* if argument is a function return function else return fasle
@memberOf poyekhali
@category Function
@sig
@param {( function | a )} x
@return {( Function| boolean )}
@example
  go.isFunc(x => x)
  // => x => x
  go.isFunc(10)
  // => false
*/
export const isFunc = x =>
  typeof x === 'function' ? x : false
