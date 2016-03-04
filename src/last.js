/**
* returns the value of the last element in thie string or array
@memberOf poyekhali
@category Function
@sig
@param {(string|array)} xs - string or array
@return {} returns the last value of xs
@example
  go.last('abc') // => 'c'
  go.last([1,2,3]) //=> 3
*/
export const last = xs =>
  xs[xs.length - 1]
