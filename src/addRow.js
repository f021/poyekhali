import { fromRow } from './fromRow'
import { toRow } from './toRow'
import { todo } from './todo'

export const addRow = todo(fromRow, toRow)
