import { VFC } from 'react'
import { AppProps } from 'next/app'

import '../styles/globals.scss'

const MyApp: VFC = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default MyApp
