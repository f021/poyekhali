export const toggleKey = obj => key => ({
  ...obj, key: !obj[key]
})
