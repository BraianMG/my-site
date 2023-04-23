import React from 'react'
import { Box, Button, Link, Paper, Typography } from '@mui/material'
import { navItems } from '@/libs/constants'
import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import logo from '../../../public/img/logo.png'
import styles from './footer.module.scss'
import PhoneIcon from '@mui/icons-material/Phone'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import EmailIcon from '@mui/icons-material/Email'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'

export const Footer = () => {
  const { t } = useTranslation('common')

  return (
    <Paper component='footer'>
      <Box component='div' className={styles.container}>
        <Box component='div' className={styles.content}>
          <Box component='div'>
            <Link href='#'>
              <Image src={logo} alt='BMG logo' height={40} priority />
            </Link>
          </Box>
          <Box component='div' className={styles.links}>
            {navItems.map(item => (
              <Button key={item.href} component='a' href={item.href}>
                {t(item.name)}
              </Button>
            ))}
          </Box>
          <Box component='div' className={styles.social}>
            <Link href='tel:+34 611 69 82 60'>
              <PhoneIcon />
            </Link>
            <Link
              href={`https://api.whatsapp.com/send?phone=34611698260&text=${t(
                'whatsAppMessage'
              )}`}
              target='_blank'
            >
              <WhatsAppIcon />
            </Link>
            <Link href='mailto:braian.gonzales77@gmail.com'>
              <EmailIcon />
            </Link>
            <Link
              href='https://www.linkedin.com/in/braiangonzales/'
              target='_blank'
            >
              <LinkedInIcon />
            </Link>
            <Link href='https://github.com/braianmg' target='_blank'>
              <GitHubIcon />
            </Link>
          </Box>
        </Box>
        <Box component='div' className={styles.copy}>
          <Typography>{t('copyright')}</Typography>
        </Box>
      </Box>
    </Paper>
  )
}
