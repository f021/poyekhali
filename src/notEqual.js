// notEqual :: [ a ] -> [ a ] -> Boolean
export const notEqual = (as, bs) =>
    as.some((a, i) => a !== bs[i])
