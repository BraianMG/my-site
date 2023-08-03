import NextImage from 'next/image'
import { Box, Chip, Grid } from '@mui/material'

export const TestingPanel = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <Grid
        container
        direction='row'
        justifyContent='space-evenly'
        alignItems='center'
        columns={12}
      >
        <Grid item>
          <Chip label='Jest' />
        </Grid>
        <Grid item>
          <Chip label='Testing Library' />
        </Grid>
        <Grid item>
          <Chip label='Supertest' />
        </Grid>
      </Grid>
    </Box>
  )
}
