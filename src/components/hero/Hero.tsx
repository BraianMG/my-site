import { Box, Typography } from '@mui/material'
import type { FC } from 'react'
import heroImage from '../../../public/img/cover.jpg'
import useTranslation from 'next-translate/useTranslation'
import styles from './hero.module.scss'
import { SFSportsNightNSAlternate } from '@/themes/base-theme'
import NextImage from 'next/image'

export const Hero: FC = () => {
  const { t } = useTranslation('common')

  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(
          rgba(0, 0, 0, 0.5),
          rgba(0, 0, 0, 0.5)
         ),
         url(${heroImage.src})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        width: '100vw',
        height: '100vh',
        position: 'relative',
        top: 0,

        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          w: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mx: 'auto',
        }}
      >
        <NextImage
            src='/img/myAvatar.svg'
            width={200}
            height={200}
            alt={t("altMyPhoto")}
            style={{ objectFit: 'contain', backgroundColor: '#F5BA4B', borderRadius: '100%' }}
          />
        <Typography
          variant='h1'
          fontSize='2rem'
          fontStyle='italic'
          fontWeight='bold'
          textAlign='center'
          className={styles.name}
          sx={{ span: { color: '#F5BA4B' } }}
        >
          <span className={styles.initial} style={SFSportsNightNSAlternate.style}>B</span>raian{' '}
          <span className={styles.initial} style={SFSportsNightNSAlternate.style}>M</span>ichael{' '}
          <span className={styles.initial} style={SFSportsNightNSAlternate.style}>G</span>onzales
        </Typography>
        <Typography variant='h2' fontSize='1.5rem' fontWeight='bold' >
          {t('title')}
        </Typography>
      </Box>
    </Box>
  )
}
