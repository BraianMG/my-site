import { LogType } from '@/libs/enums'

export interface ILog {
  _id?: string
  type: LogType
  process: string
  detail: string
  createdAt?: string
  updatedAt?: string
}
