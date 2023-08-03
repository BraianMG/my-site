import NextImage from 'next/image'
import { Box, Chip, Grid } from '@mui/material'
import { TECHNOLOGIES } from '@/libs/constants'

export const FrontendPanel = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <Grid
        container
        direction='row'
        justifyContent='space-evenly'
        alignItems='center'
      >
        {TECHNOLOGIES.FRONTEND.map(t => (
          <Grid item>
            <Chip label={t} clickable />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
