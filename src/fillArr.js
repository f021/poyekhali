export const fillArr = ([x, ...xs], fn) =>
  Array.from({ length: x }, (_, i) =>
    xs.length ? fillArr(xs, fn) : fn(i))
