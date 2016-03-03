export const first = xs => {
  if (typeof xs === 'string') {
    xs = xs.split('')
  }
  return xs[0]
}
