import { VFC, useEffect } from 'react'
import Rellax from 'rellax'
import Image from 'next/image'
import { Layout } from '../components/Layout'
import { UcMemo } from '../components/Uc'

const Media: VFC = () => {
  useEffect(() => {
    // Rellax JS Setting
    var rellax = new Rellax('.rellax')
  }, [])
  return (
    <Layout title="DaichiSato Portfolio | Media">
      <main className="l-page media">
        <div className="mv">
          <div className="mv__wrap">
            <h2 className="mv__ttl">Media</h2>
            <span className="mv__txt">メディアについて</span>
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
        {/* INTRO */}
        <div className="intro">
          <div className="intro__wrap">
            <div className="intro__body">
              <p className="txt">
                日々の出来事や考えの発信や、時間ができた時にはゲームのライブ配信もしています。
                <br />
                「面白そう」や「楽しそう」という気持ちを大切に発信を続けていきます。
              </p>
            </div>
          </div>
        </div>
        <UcMemo />
      </main>
    </Layout>
  )
}

export default Media
