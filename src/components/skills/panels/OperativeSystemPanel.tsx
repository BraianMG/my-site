import NextImage from 'next/image'
import { Box, Chip, Grid } from '@mui/material'

export const OperativeSystemPanel = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <Grid
        container
        direction='row'
        justifyContent='space-evenly'
        alignItems='center'
      >
        {/* <Grid item>
          <NextImage
            src='/img/skills/operative-system/windows.png'
            width={50}
            height={50}
            alt=''
            style={{ objectFit: 'contain' }}
          />
        </Grid>
        <Grid item>
          <NextImage
            src='/img/skills/operative-system/linux.png'
            width={50}
            height={50}
            alt=''
            style={{ objectFit: 'contain' }}
          />
        </Grid>
        <Grid item>
          <NextImage
            src='/img/skills/operative-system/apple.png'
            width={50}
            height={50}
            alt=''
            style={{ objectFit: 'contain' }}
          />
        </Grid> */}
        <Grid item>
          <Chip label='Windows' />
        </Grid>
        <Grid item>
          <Chip label='Linux' />
        </Grid>
        <Grid item>
          <Chip label='Mac' />
        </Grid>
      </Grid>
    </Box>
  )
}
