import Head from 'next/head'
import { FC, ReactNode } from 'react'
import { Footer, Header } from '../'
import { Box } from '@mui/material'
import styles from './layout.module.scss'

interface Props {
  children?: ReactNode | undefined
  title: string
  pageDescription: string
  imageFullUrl?: string
}

export const Layout: FC<Props> = ({
  children,
  title,
  pageDescription,
  imageFullUrl,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>

        <meta name='description' content={pageDescription} />

        <meta name='og:title' content={title} />
        <meta name='og:description' content={pageDescription} />
        {imageFullUrl && <meta name='og:image' content={imageFullUrl} />}

        <link rel='shortcut icon' type='image/PNG' href='/img/favicon.png' />
      </Head>

      <Header />

      <Box component='main' className={styles.main}>
        {children}
      </Box>

      <Footer />
    </>
  )
}
