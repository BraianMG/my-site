import NextImage from 'next/image'
import { Box, Chip, Grid } from '@mui/material'

export const ToolsPanel = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <Grid
        container
        direction='row'
        justifyContent='space-evenly'
        alignItems='center'
      >
        <Grid item>
          <Chip label='SCRUM' />
        </Grid>
        <Grid item>
          <Chip label='Kanban' />
        </Grid>
        <Grid item>
          <Chip label='Jira' />
        </Grid>
        <Grid item>
          <Chip label='Confluence' />
        </Grid>
      </Grid>
    </Box>
  )
}
