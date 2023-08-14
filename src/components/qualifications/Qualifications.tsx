import { SyntheticEvent, useState } from 'react'
import styles from './qualifications.module.scss'
import { Box, Tab, Tabs, Typography } from '@mui/material'
import useTranslation from 'next-translate/useTranslation'
import SectionTitle from '../common/SectionTitle'
import BMGSection from '../common/BMGSection'
import { TabPanel } from '../common/TabPanel'
import { QualificationsTimeline } from './timelines/QualificationsTimeline'
import { QUALIFICATIONS } from '@/libs/constants'
import { Languajes } from '@/libs/enums'

export const Qualifications = () => {
  const { t, lang } = useTranslation('common')
  const currentLanguaje: Languajes = lang === "es" ? Languajes.ES : Languajes.EN;

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
            label={t('work')}
            id={`tab-${6}`}
            aria-controls={`tabpanel-${6}`}
          />
          <Tab
            label={t('education')}
            id={`tab-${6}`}
            aria-controls={`tabpanel-${6}`}
          />
        </Tabs>
      </Box>
      <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <TabPanel value={value} index={0}>
          <QualificationsTimeline qualifications={QUALIFICATIONS.WORK[currentLanguaje]} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <QualificationsTimeline
            qualifications={QUALIFICATIONS.EDUCATION[currentLanguaje]}
          />
        </TabPanel>
      </Box>
    </BMGSection>
  )
}