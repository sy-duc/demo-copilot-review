import { format } from 'date-fns'
import { DateFormat } from './enums'

export function formatDate(date: string | Date, formatStr: DateFormat = DateFormat.FULL_DATE_TIME) {
  return format(new Date(date), formatStr)
}
