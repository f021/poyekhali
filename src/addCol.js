import { fromCol } from './fromCol'
import { toCol } from './toCol'
import { todo } from './todo'

export const addCol = todo(fromCol, toCol)
