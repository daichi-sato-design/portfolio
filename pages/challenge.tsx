import { VFC } from 'react'
import { Layout } from '../components/Layout'
import { UcMemo } from '../components/Uc'

const challenge: VFC = () => {
  return (
    <Layout title="DaichiSato Portfolio | Challenge">
      <main className="l-page about">
        <UcMemo />
      </main>
    </Layout>
  )
}

export default challenge
