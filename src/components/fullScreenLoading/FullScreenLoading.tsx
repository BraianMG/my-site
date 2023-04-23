import { Box, CircularProgress, Typography } from '@mui/material'
import useTranslation from 'next-translate/useTranslation'
import styles from './fullScreenLoading.module.scss'

export const FullScreenLoading = () => {
  const { t } = useTranslation('common')
  return (
    <Box component='div' className={styles.container}>
      <Typography sx={{ mb: 2 }} fontWeight={200} fontSize={20}>
        {t('loading')}
      </Typography>
      <CircularProgress thickness={2} />
    </Box>
  )
}
