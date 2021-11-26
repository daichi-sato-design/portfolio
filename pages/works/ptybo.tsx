import { VFC, useEffect } from 'react'
import Rellax from 'rellax'
import Image from 'next/image'
import { Layout } from '../../components/Layout'

const Ptybo: VFC = () => {
  useEffect(() => {
    // Rellax JS Setting
    var rellax = new Rellax('.rellax')
  }, [])
  return (
    <Layout title="DaichiSato Portfolio | Flagup">
      <main className="l-page works_d">
        <div className="mv">
          <div className="mv__wrap">
            <h2 className="mv__ttl">Ptybo</h2>
            <p className="mv__category">Webサービス</p>
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
        <div className="visual">
          <div className="visual__wrap">
            <Image
              src="/works/ptybo_main.jpg"
              alt="ptybo"
              width={1100}
              height={560}
            />
          </div>
        </div>
        <div className="info px-50">
          <div className="info__wrap">
            <div className="section-btn">
              <a
                href="https://ptybo.online"
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                <span className="txt">View more</span>
                <div className="deco"></div>
              </a>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Ptybo