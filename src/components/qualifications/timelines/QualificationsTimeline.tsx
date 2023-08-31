import { QUALIFICATIONS } from '@/libs/constants'
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from '@mui/lab'
import { QualificationCard } from '../card/QualificationCard'
import { FC } from 'react'

interface Props {
  qualifications: {
    title: string
    description: string
    certificate?: string
    dates: string
  }[]
}

export const QualificationsTimeline: FC<Props> = ({ qualifications }) => {
  return (
    <Timeline position='alternate-reverse' sx={{ p: '.5rem 0' }}>
      {qualifications.map((el, i) => (
        <TimelineItem
          key={i}
          sx={{
            '::before': {
              p: 0,
            },
            '& :last-child': {
              p: 0,
            },
          }}
        >
          <TimelineSeparator sx={{ mx: '.5rem' }}>
            <TimelineDot color='primary' />
            <TimelineConnector sx={{ bgcolor: 'primary.main' }} />
          </TimelineSeparator>
          <TimelineContent>
            <QualificationCard
              title={el.title}
              description={el.description}
              certificate={el.certificate}
              dates={el.dates}
              justifyRight={i % 2 === 0}
            />
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  )
}
