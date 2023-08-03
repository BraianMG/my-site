import React from 'react'
import styles from './skills.module.scss'
import BMGSection from '../common/BMGSection'
import useTranslation from 'next-translate/useTranslation'
import SectionTitle from '../common/SectionTitle'
import { Box, Chip, Grid, Tab, Tabs, Typography } from '@mui/material'
import NextImage from 'next/image'
import { TabPanel } from './TabPanel'
import { FrontendPanel } from './panels/FrontendPanel'
import { BackendPanel } from './panels/BackendPanel'
import { DatabasePanel } from './panels/DatabasePanel'
import { VersionControlPanel } from './panels/VersionControlPanel'
import { OperativeSystemPanel } from './panels/OperativeSystemPanel'
import { LanguajesPanel } from './panels/LanguajesPanel'
import { TestingPanel } from './panels/TestingPanel'
import { ToolsPanel } from './panels/ToolsPanel'

export const SkillsWithVerticalTabs = () => {
  const { t } = useTranslation('common')

  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <BMGSection id='skills'>
      <SectionTitle>{t('skills')}</SectionTitle>
      <Typography className={styles.subtitle}>{t('skillsSubtitle')}</Typography>
      <Box
        sx={{
          display: 'flex',
          flexGrow: 1,
          // bgcolor: 'background.paper',
          width: '100%',
        }}
      >
        <Tabs
          orientation='vertical'
          centered={true}
          variant='scrollable'
          value={value}
          onChange={handleChange}
          sx={{
            borderRight: 1,
            borderColor: 'divider',
            '& .MuiTabs-flexContainerVertical': {
              height: '100%',
              justifyContent: 'center',
            },
          }}
        >
          <Tab
            label={t('frontend')}
            id={`vertical-tab-${0}`}
            aria-controls={`vertical-tabpanel-${0}`}
          />
          <Tab
            label={t('backend')}
            id={`vertical-tab-${1}`}
            aria-controls={`vertical-tabpanel-${1}`}
          />
          <Tab
            label={t('database')}
            id={`vertical-tab-${2}`}
            aria-controls={`vertical-tabpanel-${2}`}
          />
          <Tab
            label={'testing'}
            id={`vertical-tab-${3}`}
            aria-controls={`vertical-tabpanel-${3}`}
          />
          <Tab
            label={t('versionControl')}
            id={`vertical-tab-${4}`}
            aria-controls={`vertical-tabpanel-${4}`}
          />
          <Tab
            label={t('operativeSystem')}
            id={`vertical-tab-${5}`}
            aria-controls={`vertical-tabpanel-${5}`}
          />
          <Tab
            label={t('languajes')}
            id={`vertical-tab-${6}`}
            aria-controls={`vertical-tabpanel-${6}`}
          />
          <Tab
            label={'Tools'}
            id={`vertical-tab-${6}`}
            aria-controls={`vertical-tabpanel-${7}`}
          />
        </Tabs>
        <TabPanel value={value} index={0}>
          <FrontendPanel />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <BackendPanel />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <DatabasePanel />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <TestingPanel />
        </TabPanel>
        <TabPanel value={value} index={4}>
          <VersionControlPanel />
        </TabPanel>
        <TabPanel value={value} index={5}>
          <OperativeSystemPanel />
        </TabPanel>
        <TabPanel value={value} index={6}>
          <LanguajesPanel />
        </TabPanel>
        <TabPanel value={value} index={7}>
          <ToolsPanel />
        </TabPanel>
      </Box>
    </BMGSection>
  )
}

// Frontend:
// - HTML5
// - CSS3
// - JavaScript
// - Typescript
// - React
// - Angular
// - NextJs
// - Testing Library

// Backend:
// - NodeJs
// - Express
// - NestJs
// - GraphQL
// - Supertest

// Database:
// - Microsoft SQL Server
// - PostgreSQL
// - MongoDB
// - TypeORM
// - Sequelize

// Metodologies:
// - Scrum
// - Kanban

// Version control:
// - Git
// - GitHub
// - GitLab
