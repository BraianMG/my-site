import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from '@mui/material'
import { FC } from 'react'
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined'

interface Props {
  title: string
  description: string
  dates: string
  justifyRight?: boolean
}

export const QualificationCard: FC<Props> = ({
  title,
  description,
  dates,
  justifyRight,
}) => {
  return (
    <Card sx={{ maxWidth: 300, ml: justifyRight ? 'auto' : 'initial' }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant='subtitle1' component='div'>
            {title}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {description}
          </Typography>

          <Box sx={{ display: 'flex', columnGap: '.25rem' }}>
            <CalendarMonthOutlinedIcon
              color='primary'
              sx={{ fontSize: '1rem', ml: justifyRight ? 'auto' : 'initial' }}
            />
            <Typography variant='caption' color='text.secondary'>
              {dates}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
