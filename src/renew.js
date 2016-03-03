export const renew = (prev, next={}) =>
  not(same(prev, next)) ?
    next :
    prev
