import NextImage from 'next/image'
import { Box, Chip, Grid } from '@mui/material'

export const LanguajesPanel = () => {
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
                  src='/img/skills/languages/spain.png'
                  width={50}
                  height={50}
                  alt=''
                  style={{ objectFit: 'contain' }}
                />
              </Grid>
              <Grid item>
                <NextImage
                  src='/img/skills/languages/united-states.png'
                  width={50}
                  height={50}
                  alt=''
                  style={{ objectFit: 'contain' }}
                />
              </Grid> */}
        <Grid item>
          <Chip label='Español' />
        </Grid>
        <Grid item>
          <Chip label='Inglés' />
        </Grid>
      </Grid>
    </Box>
  )
}
