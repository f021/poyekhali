import resizeArr from './resizeArr'

export const todo = (from, to) =>
  (arr, w, x) =>
    from(to(arr, w).map(xs =>
      resizeArr(xs, x)
  ))
