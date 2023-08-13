import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from '@mui/material'
import { FC } from 'react'

interface Props {
  title: string
  description: string
  dates: string
  justifyRight?: boolean
}

export const QualificationCard: FC<Props> = ({ title, description, dates, justifyRight }) => {
  return (
    <Card sx={{ maxWidth: 300, ml: justifyRight ? "auto" : "initial" }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant='subtitle1' component='div'>
            {title}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {description}
          </Typography>
          <Typography variant='caption' color='text.secondary'>
            {dates}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
