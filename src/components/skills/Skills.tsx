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
              <Typography>{t('frontend')}</Typography>
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
                    <Chip label={techName} clickable />
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
              <Typography>{t('backend')}</Typography>
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
                    <Chip label={techName} clickable />
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
              <Typography>{t('database')}</Typography>
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
                    <Chip label={techName} clickable />
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
              <Typography>{t('testing')}</Typography>
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
                    <Chip label={techName} clickable />
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
              <Typography>{t('versionControl')}</Typography>
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
                    <Chip label={techName} clickable />
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
              <Typography>{t('operativeSystem')}</Typography>
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
                    <Chip label={techName} clickable />
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
              <Typography>{t('tools')}</Typography>
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
                    <Chip label={techName} clickable />
                  </Grid>
                ))}
              </Grid>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === 'languajes'}
            onChange={handleChange('languajes')}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='languajes-content'
              id='languajes-header'
            >
              <Typography>{t('languajes')}</Typography>
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
                    <Chip label={techName} clickable />
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
