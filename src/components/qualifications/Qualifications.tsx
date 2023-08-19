import { SyntheticEvent, useState } from 'react'
import styles from './qualifications.module.scss'
import { Box, Tab, Tabs, Typography } from '@mui/material'
import useTranslation from 'next-translate/useTranslation'
import SectionTitle from '../common/SectionTitle'
import BMGSection from '../common/BMGSection'
import { TabPanel } from '../common/TabPanel'
import { QualificationsTimeline } from './timelines/QualificationsTimeline'
import { QUALIFICATIONS } from '@/libs/constants'
import { Languages } from '@/libs/enums'
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined'
import { WorkIcon } from '../icons'

export const Qualifications = () => {
  const { t, lang } = useTranslation('common')
  const currentLanguage: Languages = lang === 'es' ? Languages.ES : Languages.EN

  const [value, setValue] = useState(0)

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <BMGSection id='qualifications'>
      <SectionTitle>{t('qualifications')}</SectionTitle>
      <Typography className={styles.subtitle}>
        {t('qualificationSubtitle')}
      </Typography>
      <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab
            icon={<WorkIcon />}
            iconPosition='start'
            label={t('work')}
            id={`tab-${6}`}
            aria-controls={`tabpanel-${6}`}
            sx={{ fontSize: '1.2rem', width: '50%' }}
          />
          <Tab
            icon={<SchoolOutlinedIcon />}
            iconPosition='start'
            label={t('education')}
            id={`tab-${6}`}
            aria-controls={`tabpanel-${6}`}
            sx={{ fontSize: '1.2rem', width: '50%' }}
          />
        </Tabs>
      </Box>
      <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <TabPanel value={value} index={0}>
          <QualificationsTimeline
            qualifications={QUALIFICATIONS.WORK[currentLanguage]}
          />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <QualificationsTimeline
            qualifications={QUALIFICATIONS.EDUCATION[currentLanguage]}
          />
        </TabPanel>
      </Box>
    </BMGSection>
  )
}
