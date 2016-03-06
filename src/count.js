/**
* wrap function with counter by right side
@memberOf poyekhali
@category Function
@sig
@param {Function} fn
@return {Function}
@example
  const b = go.count((a,i) => a + i)
  b(0);
  //=> 1
  b(10);
  // => 12
  b(3);
  // => 6
*/

export const count = (fn = i => i, i = 0) =>
  (...args) =>
    fn(...args, i++)
