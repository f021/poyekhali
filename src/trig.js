export const trig = (flag=false) =>
  () => {
    flag = !flag
    return flag
  }
