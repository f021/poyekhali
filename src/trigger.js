export const trigger = (fn, fn2, f = false) =>
  x => {
    f = !f
    f ? fn(x) : fn2(x)
  }
