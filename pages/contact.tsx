import { VFC, useEffect } from 'react'
import Rellax from 'rellax'
import Image from 'next/image'
import { Layout } from '../components/Layout'
import { UcMemo } from '../components/Uc'

const Contact: VFC = () => {
  useEffect(() => {
    // Rellax JS Setting
    var rellax = new Rellax('.rellax')
  }, [])
  return (
    <Layout title="DaichiSato Portfolio | Contact">
      <main className="l-page contact">
        <div className="mv">
          <div className="mv__wrap">
            <h2 className="mv__ttl">Contact</h2>
            <span className="mv__txt">お問い合わせ</span>
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
                本サイト・サービス・メディアなどに関するご意見やお問い合わせなどに対応いたします。
                <br />
                お問い合わせに関するレスポンスが遅い場合、Twitterなど他メディアでのDMもご検討ください。
                <br />
                お問い合わせに早急に対応できない場合もあります。
              </p>
            </div>
          </div>
        </div>
        {/* FORM */}
        {/* <div className="contents">
          <form>
            <div>
              <label>氏名*</label>
              <input name="name" type="text" />
            </div>
            <div>
              <label>メールアドレス*</label>
              <input name="email" type="text" />
            </div>
            <div>
              <label>お問い合わせ内容*</label>
              <input name="message" type="text" />
            </div>
            <button type="submit">確認する</button>
          </form>
        </div> */}
        <UcMemo />
      </main>
    </Layout>
  )
}

export default Contact
