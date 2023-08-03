import NextImage from 'next/image'
import { Box, Chip, Grid } from '@mui/material'

export const BackendPanel = () => {
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
            src='/img/skills/backend/node.png'
            width={100}
            height={100}
            alt=''
            style={{ objectFit: 'contain' }}
          />
        </Grid>
        <Grid item>
          <NextImage
            src='/img/skills/backend/express.png'
            width={100}
            height={100}
            alt=''
            style={{ objectFit: 'contain' }}
          />
        </Grid>
        <Grid item>
          <NextImage
            src='/img/skills/backend/nestjs.png'
            width={100}
            height={100}
            alt=''
            style={{ objectFit: 'contain' }}
          />
        </Grid>
        <Grid item>
          <NextImage
            src='/img/skills/backend/graphql.png'
            width={100}
            height={100}
            alt=''
            style={{ objectFit: 'contain' }}
          />
        </Grid> */}
        <Grid item>
          <Chip label='NodeJS' />
        </Grid>
        <Grid item>
          <Chip label='Express' />
        </Grid>
        <Grid item>
          <Chip label='NestJS' />
        </Grid>
        <Grid item>
          <Chip label='RESTful' />
        </Grid>
        <Grid item>
          <Chip label='GraphQL' />
        </Grid>
      </Grid>
    </Box>
  )
}
