import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        src="https://kit.fontawesome.com/11a9b329dc.js"
        crossOrigin="anonymous"
      ></Script>

      <Component {...pageProps} />
    </>
  )
}
