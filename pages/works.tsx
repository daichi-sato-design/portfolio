import { VFC } from 'react'
import { Layout } from '../components/Layout'
import { UcMemo } from '../components/Uc'

const works: VFC = () => {
  return (
    <Layout title="DaichiSato Portfolio | Works">
      <main className="l-page about">
        <UcMemo />
      </main>
    </Layout>
  )
}

export default works
