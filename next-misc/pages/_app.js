import Head from 'next/head'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import '@/styles/globals.css'
import '../styles/layout.css'

export default function App({ Component, pageProps }) {

  if ( Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />)
  }

  return (
    <>
      <Head>
        <title>Home CodeVolution</title>
        <meta name="description" content="Awesome Youtube" />
      </Head>
      <Header/>
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
