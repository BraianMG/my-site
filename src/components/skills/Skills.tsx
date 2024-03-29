import React from 'react'
import styles from './skills.module.scss'
import BMGSection from '../common/BMGSection'
import useTranslation from 'next-translate/useTranslation'
import SectionTitle from '../common/SectionTitle'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Chip,
  Grid,
  Typography,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { TECHNOLOGIES } from '@/libs/constants'
import {
  BackendIcon,
  DatabaseIcon,
  FrontendIcon,
  LanguagesIcon,
  OSIcon,
  TestingIcon,
  ToolsIcon,
  VersionedIcon,
} from '../icons'
import ScienceOutlinedIcon from '@mui/icons-material/ScienceOutlined'
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined'

export const Skills = () => {
  const { t } = useTranslation('common')

  const [expanded, setExpanded] = React.useState<string | false>(false)

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false)
    }

  return (
    <BMGSection id='skills'>
      <SectionTitle>{t('skills')}</SectionTitle>
      <Typography className={styles.subtitle}>{t('skillsSubtitle')}</Typography>
      <Box className={styles.accordions}>
        <Box className={styles.column}>
          <Accordion
            expanded={expanded === 'frontend'}
            onChange={handleChange('frontend')}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='frontend-content'
              id='frontend-header'
            >
              <Box sx={{ display: 'flex', columnGap: '.5rem' }}>
                <FrontendIcon color='primary' fontSize='small' />
                <Typography variant='body1'>{t('frontend')}</Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <Grid
                container
                justifyContent='space-evenly'
                columnSpacing={1}
                rowSpacing={1}
              >
                {TECHNOLOGIES.FRONTEND.map(techName => (
                  <Grid item key={techName}>
                    <Chip label={techName} />
                  </Grid>
                ))}
              </Grid>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === 'backend'}
            onChange={handleChange('backend')}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='backend-content'
              id='backend-header'
            >
              <Box sx={{ display: 'flex', columnGap: '.5rem' }}>
                <BackendIcon color='primary' fontSize='small' />
                <Typography variant='body1'>{t('backend')}</Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <Grid
                container
                // direction='row'
                justifyContent='space-evenly'
                // alignItems='center'
                // columnSpacing={1}
                rowSpacing={1}
              >
                {TECHNOLOGIES.BACKEND.map(techName => (
                  <Grid item key={techName}>
                    <Chip label={techName} />
                  </Grid>
                ))}
              </Grid>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === 'database'}
            onChange={handleChange('database')}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='database-content'
              id='database-header'
            >
              <Box sx={{ display: 'flex', columnGap: '.5rem' }}>
                <DatabaseIcon color='primary' fontSize='small' />
                <Typography variant='body1'>{t('database')}</Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <Grid
                container
                // direction='row'
                justifyContent='space-evenly'
                // alignItems='center'
                // columnSpacing={1}
                rowSpacing={1}
              >
                {TECHNOLOGIES.DATABASE.map(techName => (
                  <Grid item key={techName}>
                    <Chip label={techName} />
                  </Grid>
                ))}
              </Grid>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === 'testing'}
            onChange={handleChange('testing')}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='testing-content'
              id='testing-header'
            >
              <Box sx={{ display: 'flex', columnGap: '.5rem' }}>
                {/* <TestingIcon color='primary' fontSize='small' /> */}
                <ScienceOutlinedIcon color='primary' fontSize='small' />
                <Typography variant='body1'>{t('testing')}</Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <Grid
                container
                // direction='row'
                justifyContent='space-evenly'
                // alignItems='center'
                // columnSpacing={1}
                rowSpacing={1}
              >
                {TECHNOLOGIES.TESTING.map(techName => (
                  <Grid item key={techName}>
                    <Chip label={techName} />
                  </Grid>
                ))}
              </Grid>
            </AccordionDetails>
          </Accordion>
        </Box>
        <Box className={styles.column}>
          <Accordion
            expanded={expanded === 'versionControl'}
            onChange={handleChange('versionControl')}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='versionControl-content'
              id='versionControl-header'
            >
              <Box sx={{ display: 'flex', columnGap: '.5rem' }}>
                <VersionedIcon color='primary' fontSize='small' />
                <Typography variant='body1'>{t('versionControl')}</Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <Grid
                container
                // direction='row'
                justifyContent='space-evenly'
                // alignItems='center'
                // columnSpacing={1}
                rowSpacing={1}
              >
                {TECHNOLOGIES.VERSION_CONTROL.map(techName => (
                  <Grid item key={techName}>
                    <Chip label={techName} />
                  </Grid>
                ))}
              </Grid>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === 'operativeSystem'}
            onChange={handleChange('operativeSystem')}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='operativeSystem-content'
              id='operativeSystem-header'
            >
              <Box sx={{ display: 'flex', columnGap: '.5rem' }}>
                <OSIcon color='primary' fontSize='small' />
                <Typography variant='body1'>{t('operativeSystem')}</Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <Grid
                container
                // direction='row'
                justifyContent='space-evenly'
                // alignItems='center'
                // columnSpacing={1}
                rowSpacing={1}
              >
                {TECHNOLOGIES.OPERATIVE_SYSTEM.map(techName => (
                  <Grid item key={techName}>
                    <Chip label={techName} />
                  </Grid>
                ))}
              </Grid>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === 'tools'}
            onChange={handleChange('tools')}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='tools-content'
              id='tools-header'
            >
              <Box sx={{ display: 'flex', columnGap: '.5rem' }}>
                <ToolsIcon color='primary' fontSize='small' />
                <Typography variant='body1'>{t('tools')}</Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <Grid
                container
                // direction='row'
                justifyContent='space-evenly'
                // alignItems='center'
                // columnSpacing={1}
                rowSpacing={1}
              >
                {TECHNOLOGIES.TOOLS.map(techName => (
                  <Grid item key={techName}>
                    <Chip label={techName} />
                  </Grid>
                ))}
              </Grid>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === 'languages'}
            onChange={handleChange('languages')}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='languages-content'
              id='languages-header'
            >
              <Box sx={{ display: 'flex', columnGap: '.5rem' }}>
                {/* <LanguagesIcon color='primary' fontSize='small' /> */}
                <LanguageOutlinedIcon color='primary' fontSize='small' />
                <Typography variant='body1'>{t('languages')}</Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <Grid
                container
                // direction='row'
                justifyContent='space-evenly'
                // alignItems='center'
                // columnSpacing={1}
                rowSpacing={1}
              >
                {TECHNOLOGIES.LANGUAJES.map(techName => (
                  <Grid item key={techName}>
                    <Chip label={techName} />
                  </Grid>
                ))}
              </Grid>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Box>
    </BMGSection>
  )
}
