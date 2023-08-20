import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Link,
  Typography,
} from '@mui/material'
import { FC } from 'react'
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined'
import useTranslation from 'next-translate/useTranslation'

interface Props {
  title: string
  description: string
  certificate?: string
  dates: string
  justifyRight?: boolean
}

export const QualificationCard: FC<Props> = ({
  title,
  description,
  certificate,
  dates,
  justifyRight,
}) => {
  const { t, lang } = useTranslation('common')

  const getDescription = () => {
    if (!certificate) {
      return description
    } else {
      return (
        <>
          {`${description} - `}
          <Link href={certificate} target='_blank'>
            {t('certificate')}
          </Link>
        </>
      )
    }
  }

  return (
    <Card sx={{ maxWidth: 300, ml: justifyRight ? 'auto' : 'initial' }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant='subtitle1' component='div'>
            {title}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {getDescription()}
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
