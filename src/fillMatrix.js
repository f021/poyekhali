import fillArr from './fillArr'

export const fillMatrix = ([w, h], fn) =>
  Array.from(new Array(w), () =>
    fillArr([h], fn))
