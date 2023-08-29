import { ILog } from '@/interfaces'
import { Log } from '@/models'

class Logger {
  async create(log: ILog) {
    try {
      const newLog = new Log(log)
      await newLog.save()
    } catch (error) {
      console.log('[Logger.create]: Error:', error)
    }
  }
}

export default new Logger()
