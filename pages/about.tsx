import { VFC } from 'react'
import { Layout } from '../components/Layout'
import { UcMemo } from '../components/Uc'

const about: VFC = () => {
  return (
    <Layout title="DaichiSato Portfolio | About">
      <main className="l-page about">
        <UcMemo />
      </main>
    </Layout>
  )
}

export default about
