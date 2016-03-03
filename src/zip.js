// zip :: [ a ] -> [ a ] -> [ [a, a] ]
export const zip = (as, bs) =>
  as.map((a, i) => [a, bs[i]])
