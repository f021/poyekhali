export const fillArr = ([x, ...xs], fn) =>
  Array.from(new Array(x), (_, i) =>
    xs.length ? fillArr(xs, fn) : fn(i))
