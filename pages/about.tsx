import { VFC, useEffect } from 'react'
import { Layout } from '../components/Layout'
import Rellax from 'rellax'
import { UcMemo } from '../components/Uc'
import Image from 'next/image'

const about: VFC = () => {
  useEffect(() => {
    //default JS Setting
    var rellax = new Rellax('.rellax')
  }, [])
  return (
    <Layout title="DaichiSato Portfolio | About">
      <main className="l-page about">
        <div className="mv">
          <div className="mv__wrap">
            <h2 className="mv__ttl">About</h2>
            <p className="mv__txt">自己紹介</p>
          </div>
          <div className="mv__bg01 rellax" data-rellax-speed="-2.75">
            <Image
              src="/common/bg_planet01.png"
              alt="Planet"
              width={690}
              height={690}
            />
          </div>
          <div className="mv__bg02 rellax" data-rellax-speed="-1.25">
            <Image
              src="/common/bg_lights01.png"
              alt="Lights"
              width={270}
              height={185}
            />
          </div>
        </div>
        <UcMemo />
      </main>
    </Layout>
  )
}

export default about
