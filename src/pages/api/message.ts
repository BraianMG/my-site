import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '@/database'
import { API_RESPONSES } from '@/libs/constants'
import { IContactMessage } from '@/interfaces'
import { ContactMessage } from '@/models'

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
  const { name, email, message } = req.body as IContactMessage

  if (!name || !email || !message) {
    res.status(400).json({ message: API_RESPONSES.BAD_REQUEST })
  }

  try {
    await db.connect()

    const contactMessage = new ContactMessage(req.body)
    await contactMessage.save()

    return res.status(201).json({ message: API_RESPONSES.SUCCESS })
  } catch (error) {
    return res
      .status(500)
      .json({ message: API_RESPONSES.INTERNAL_SERVER_ERROR })
  } finally {
    await db.disconnect()
  }
}
