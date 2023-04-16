import { GetStaticProps, NextPage } from 'next'
import { Layout } from '../components/layout/Layout'
import { FullScreenLoading } from '../components/ui'
import useTranslation from 'next-translate/useTranslation'

const Home: NextPage = () => {
  const { t } = useTranslation('common')

  return (
    <Layout title='BMG' pageDescription={t('pageDescription')}>
      <>
        CONTENT NOT IMPLEMENTED
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
