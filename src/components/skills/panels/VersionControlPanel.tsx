import NextImage from 'next/image'
import { Box, Chip, Grid } from '@mui/material'

export const VersionControlPanel = () => {
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
            src='/img/skills/version-control/git.png'
            width={50}
            height={50}
            alt=''
            style={{ objectFit: 'contain' }}
          />
        </Grid>
        <Grid item>
          <NextImage
            src='/img/skills/version-control/github.png'
            width={50}
            height={50}
            alt=''
            style={{ objectFit: 'contain' }}
          />
        </Grid>
        <Grid item>
          <NextImage
            src='/img/skills/version-control/gitlab.png'
            width={50}
            height={50}
            alt=''
            style={{ objectFit: 'contain' }}
          />
        </Grid> */}
        <Grid item>
          <Chip label='Git' />
        </Grid>
        <Grid item>
          <Chip label='GitHub' />
        </Grid>
        <Grid item>
          <Chip label='GitLab' />
        </Grid>
      </Grid>
    </Box>
  )
}
