import { GetStaticProps, NextPage } from 'next'
import { Layout } from '../components/layout/Layout'
import { FullScreenLoading } from '../components/ui'

const Home: NextPage = () => {
  return (
    <Layout title='BMG' pageDescription='Braian Gonzales personal website'>
      CONTENT NOT IMPLEMENTED
      <FullScreenLoading />
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
