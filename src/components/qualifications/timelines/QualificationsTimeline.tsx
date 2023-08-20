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
    <Timeline position='alternate-reverse'>
      {qualifications.map((el, i) => (
        <TimelineItem key={i}>
          <TimelineSeparator>
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
