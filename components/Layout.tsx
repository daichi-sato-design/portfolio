import { VFC, ReactNode } from 'react'
import Head from 'next/head'

interface Props {
  children: ReactNode
  title: string
}
export const Layout: VFC<Props> = ({
  children,
  title = 'DaichiSato Portfolio',
}) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>Header</header>
      {children}
      <footer>Footer</footer>
    </div>
  )
}