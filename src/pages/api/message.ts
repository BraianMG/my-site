import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '@/database'
import { API_RESPONSES } from '@/libs/constants'
import { IContactMessage, ILog } from '@/interfaces'
import { ContactMessage } from '@/models'
import { Logger } from '@/libs/functions'
import { LogType } from '@/libs/enums'

type Data = { message: string }

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case 'POST':
      return postMessage(req, res)

    default:
      return res.status(400).json({ message: API_RESPONSES.BAD_REQUEST })
  }
}

const postMessage = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const log: ILog = {
    type: LogType.APP,
    process: 'POST: /message',
    detail: '',
  }

  try {
    await db.connect()

    log.detail += `Request body: ${JSON.stringify(req.body)}\n`

    const { name, email, message } = req.body as IContactMessage

    if (!name || !email || !message) {
      log.detail += `${API_RESPONSES.BAD_REQUEST}\n`
      res.status(400).json({ message: API_RESPONSES.BAD_REQUEST })
    }

    const newContactMessage = new ContactMessage(req.body)
    const contactMessage = await newContactMessage.save()
    log.detail += `Record created: ${JSON.stringify(contactMessage)}\n`

    return res.status(201).json({ message: API_RESPONSES.SUCCESS })
  } catch (error) {
    log.type = LogType.ERROR
    log.detail += `${JSON.stringify(error)}\n`
    return res
      .status(500)
      .json({ message: API_RESPONSES.INTERNAL_SERVER_ERROR })
  } finally {
    await Logger.create(log)
    await db.disconnect()
  }
}
