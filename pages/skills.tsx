import { VFC } from 'react'
import { Layout } from '../components/Layout'
import { UcMemo } from '../components/Uc'

const skills: VFC = () => {
  return (
    <Layout title="DaichiSato Portfolio | Skills">
      <main className="l-page about">
        <UcMemo />
      </main>
    </Layout>
  )
}

export default skills
