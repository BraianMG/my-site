import { GetStaticProps, NextPage } from 'next'
import { Layout } from '../components/layout/Layout'
import { AboutMe, FullScreenLoading, Qualifications, Skills, SkillsWithVerticalTabs } from '../components'
import useTranslation from 'next-translate/useTranslation'

const Home: NextPage = () => {
  const { t } = useTranslation('common')

  return (
    <Layout title='BMG' pageDescription={t('pageDescription')}>
      <>
        <AboutMe />
        <Skills />
        <Qualifications />
        <p>CONTENT NOT IMPLEMENTED</p>
        <FullScreenLoading />
      </>
    </Layout>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async ctx => {
  return {
    props: {},
    revalidate: 62 * 62 * 24,
  }
}
