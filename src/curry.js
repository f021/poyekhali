/**
* returns curryid function
@memberOf poyekhali
@category Function
@sig
@param { Funciton } arr
@return { Function }
@example
  const fn = go.curry((a, b) => a)
  //=> fn()
*/

export const curry = (fn, ...cache) => {
  let arity = fn.length
  const _curry = (...args) => {
    cache = [ ...cache, ...args ]
    console.log('f', arity, cache, args)
    if (cache.length === arity) {
      console.log('catch', cache)
      return fn.apply(ctx, cache)
    } else {
      return _curry
    }
  }
//   console.log('in', arity, cache)
  return _curry()
}
