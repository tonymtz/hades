import "react-notion/src/styles.css";
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from "next/head";
import { Montserrat } from '@next/font/google'

const montserrat = Montserrat({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={ montserrat.className }>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
        <title>Promociones de culto</title>
      </Head>
      <Component { ...pageProps } />
    </main>
  )
}
