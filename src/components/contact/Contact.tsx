import styles from './contact.module.scss'
import { Box, Typography } from '@mui/material'
import useTranslation from 'next-translate/useTranslation'
import SectionTitle from '../common/SectionTitle'
import BMGSection from '../common/BMGSection'
import { ContactForm } from './contactForm/ContactForm'
import { ContactInfo } from './contactInfo/ContactInfo'

export const Contact = () => {
  const { t, lang } = useTranslation('common')

  return (
    <BMGSection id='contact-me'>
      <SectionTitle>{t('contact')}</SectionTitle>
      <Typography className={styles.subtitle}>
        {t('contactSubtitle')}
      </Typography>
      <Box
        sx={{ bgcolor: 'background.paper' }}
        className={styles.container}
      >
        <ContactInfo />
        <ContactForm />
      </Box>
    </BMGSection>
  )
}
