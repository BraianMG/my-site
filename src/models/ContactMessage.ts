import mongoose, { Schema, model, Model } from 'mongoose'
import { IContactMessage } from '../interfaces'

const contactMessageSchema = new Schema<IContactMessage>(
  {
    name: { type: String, required: true, default: '' },
    email: { type: String, required: true, default: '' },
    projectName: { type: String, default: '' },
    message: { type: String, required: true, default: '' },
  },
  { timestamps: true }
)

contactMessageSchema.index({ email: 'text' })

const ContactMessage: Model<IContactMessage> =
  mongoose.models.ContactMessage ||
  model('ContactMessage', contactMessageSchema)

export default ContactMessage
