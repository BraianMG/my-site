import NextImage from 'next/image'
import { Box, Chip, Grid } from '@mui/material'

export const DatabasePanel = () => {
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
            src='/img/skills/database/sqlserver.png'
            width={100}
            height={100}
            alt=''
            style={{ objectFit: 'contain' }}
          />
        </Grid>
        <Grid item>
          <NextImage
            src='/img/skills/database/postgresql.png'
            width={100}
            height={100}
            alt=''
            style={{ objectFit: 'contain', padding: '20px' }}
          />
        </Grid>
        <Grid item>
          <NextImage
            src='/img/skills/database/mongodb.png'
            width={100}
            height={100}
            alt=''
            style={{ objectFit: 'contain' }}
          />
        </Grid>
        <Grid item>
          <NextImage
            src='/img/skills/database/typeorm.png'
            width={100}
            height={100}
            alt=''
            style={{ objectFit: 'contain' }}
          />
        </Grid>
        <Grid item>
          <NextImage
            src='/img/skills/database/sequelize.png'
            width={100}
            height={100}
            alt=''
            style={{ objectFit: 'contain' }}
          />
        </Grid> */}
        <Grid item>
          <Chip label='Microsoft SQL Server' />
        </Grid>
        <Grid item>
          <Chip label='PostgreSQL' />
        </Grid>
        <Grid item>
          <Chip label='MySQL' />
        </Grid>
        <Grid item>
          <Chip label='MongoDB' />
        </Grid>
        <Grid item>
          <Chip label='TypeORM' />
        </Grid>
        <Grid item>
          <Chip label='Sequelize' />
        </Grid>
      </Grid>
    </Box>
  )
}
