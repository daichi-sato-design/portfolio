import { VFC } from 'react'
import { Layout } from '../components/Layout'
import { UcMemo } from '../components/Uc'

const contact: VFC = () => {
  return (
    <Layout title="DaichiSato Portfolio | Contact">
      <main className="l-page about">
        <UcMemo />
      </main>
    </Layout>
  )
}

export default contact
