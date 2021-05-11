import { AppProps } from 'next/app'
import Head from 'next/head'
import { ReactElement } from 'react'
import '../styles/global.scss'

export default function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <>
      <Head>
        <title>Register Payment Methods</title>
        <meta name="description" content="Register Payment Methods"></meta>
      </Head>
      <Component {...pageProps} />
    </>
  )
}