import '../styles/globals.scss'

import { VFC, useEffect } from 'react'
import Rellax from 'rellax'
import { AppProps } from 'next/app'

const MyApp: VFC = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    //default JS Setting
    var rellax = new Rellax('.rellax', {
      breakpoints: [480, 768, 1080],
    })
  }, [])
  return <Component {...pageProps} />
}

export default MyApp
