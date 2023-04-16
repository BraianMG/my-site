import { Box, CircularProgress, Typography } from '@mui/material'
import useTranslation from 'next-translate/useTranslation'

export const FullScreenLoading = () => {
  const { t } = useTranslation('common');
  return (
    <Box
      display='flex'
      flexDirection={'column'}
      justifyContent='center'
      alignItems='center'
      height='calc(100vh - 200px)'
    >
      <Typography sx={{ mb: 3 }} variant='h2' fontWeight={200} fontSize={20}>
        {t('loading')}
      </Typography>
      <CircularProgress thickness={2} />
    </Box>
  )
}
