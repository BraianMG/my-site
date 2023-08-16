import styles from './contactInfo.module.scss'
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import { Box, Typography } from '@mui/material'
import useTranslation from 'next-translate/useTranslation'

export const ContactInfo = () => {
  const { t, lang } = useTranslation('common')

  return (
    <Box className={styles.container}>
      <Box sx={{ display: 'flex', columnGap: '.5rem', alignItems: 'center', mb: '1rem' }}>
        <LocalPhoneOutlinedIcon color='primary' fontSize='large' />
        <Box>
          <Typography sx={{ fontWeight: 'bold' }} component='div'>
            {t('callMe')}
          </Typography>
          <Typography variant='caption' color='GrayText'>
            +34 611 69 82 60
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', columnGap: '.5rem', alignItems: 'center', mb: '1rem' }}>
        <EmailOutlinedIcon color='primary' fontSize='large' />
        <Box>
          <Typography sx={{ fontWeight: 'bold' }} component='div'>
            {t('email')}
          </Typography>
          <Typography variant='caption' color='GrayText'>
            braian.gonzales77@gmail.com
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', columnGap: '.5rem', alignItems: 'center', mb: '1rem' }}>
        <LocationOnOutlinedIcon color='primary' fontSize='large' />
        <Box>
          <Typography sx={{ fontWeight: 'bold' }} component='div'>
            {t('location')}
          </Typography>
          <Typography variant='caption' color='GrayText'>
            {t('locationDesc')}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
