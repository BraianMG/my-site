import React from 'react'
import styles from './aboutMe.module.scss'
import { Box, Typography } from '@mui/material'
import useTranslation from 'next-translate/useTranslation'
import SectionTitle from '../common/SectionTitle'
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined'
import BMGButton from '../common/BMGButton'
import BMGSection from '../common/BMGSection'

export const AboutMe = () => {
  const { t, lang } = useTranslation('common')

  const downloadCV = () => {
    const link = document.createElement('a')
    link.href = `/pdf/${lang}/CV Braian Gonzales.pdf`
    link.target = '_blank'
    link.click()
  }

  return (
    <BMGSection id='about-me' className={styles.container}>
      <SectionTitle>{t('aboutMe')}</SectionTitle>
      <Box>
        <Typography variant='body1'>{t('aboutMeDescription.0')}</Typography>
        <Typography variant='body1'>{t('aboutMeDescription.1')}</Typography>
        <Typography variant='body1'>{t('aboutMeDescription.2')}</Typography>
        <Typography variant='body1'>{t('aboutMeDescription.3')}</Typography>
        <Typography variant='body1'>{t('aboutMeDescription.4')}</Typography>
        <Typography variant='body1'>{t('aboutMeDescription.5')}</Typography>
      </Box>
      <Box className={styles.statisticsAndActions}>
        <Box className={styles.statistics}>
          <Box className={styles.statistic}>
            <Typography className={styles.value}>03+</Typography>
            <Typography className={styles.description}>
              {t('yearsExperience')}
            </Typography>
          </Box>
          <Box className={styles.statistic}>
            <Typography className={styles.value}>07+</Typography>
            <Typography className={styles.description}>
              {t('completedProjects')}
            </Typography>
          </Box>
          <Box className={styles.statistic}>
            <Typography className={styles.value}>03</Typography>
            <Typography className={styles.description}>
              {t('companiesWorked')}
            </Typography>
          </Box>
        </Box>
        <BMGButton
          variant='contained'
          endIcon={<FileDownloadOutlinedIcon />}
          className={styles.downloadButton}
          onClick={downloadCV}
        >
          {t('downloadCV')}
        </BMGButton>
      </Box>
    </BMGSection>
  )
}
