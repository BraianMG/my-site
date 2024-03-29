import { SyntheticEvent, useState } from 'react'
import styles from './qualifications.module.scss'
import { Box, Grid, Typography } from '@mui/material'
import useTranslation from 'next-translate/useTranslation'
import SectionTitle from '../common/SectionTitle'
import BMGSection from '../common/BMGSection'
import { Languages } from '@/libs/enums'
import { ProjectCard } from './projectCard/ProjectCard'
import { PROJECTS } from '@/libs/constants'

export const Projects = () => {
  const { t, lang } = useTranslation('common')
  const currentLanguage: Languages = lang === 'es' ? Languages.ES : Languages.EN

  const [value, setValue] = useState(0)

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <BMGSection id='projects'>
      <SectionTitle>{t('projects')}</SectionTitle>
      {/* <Typography className={styles.subtitle}>
        {t('projectsSubtitle')}
      </Typography> */}
      <Box sx={{ width: '100%', bgcolor: 'background.paper', mt: "1rem" }}>
        <Grid
          container
          justifyContent='space-evenly'
          columnSpacing={1}
          rowSpacing={3}
        >
          {PROJECTS[currentLanguage].map((p, i) => (
            <Grid item key={i}>
              <ProjectCard
                image={p.image}
                title={p.title}
                description={p.description}
                appLink={p.appLink}
                repoLink={p.repoLink}
                videoLink={p.videoLink}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </BMGSection>
  )
}
