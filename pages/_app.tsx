import '../styles/globals.scss'

import { VFC } from 'react'
import { AppProps } from 'next/app'

const MyApp: VFC = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default MyApp
