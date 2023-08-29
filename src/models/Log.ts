import mongoose, { Schema, model, Model } from 'mongoose'
import { ILog } from '../interfaces'
import { LogType } from '@/libs/enums'

const log = new Schema<ILog>(
  {
    type: {
      type: String,
      enum: {
        values: Object.values(LogType),
        message: '{VALUE} is not a valid log type',
      },
      required: true,
    },
    process: { type: String, required: true, default: '' },
    detail: { type: String, required: true, default: '' },
  },
  { timestamps: true }
)

log.index({ type: 'text' })

const Log: Model<ILog> = mongoose.models.Log || model('Log', log)

export default Log
