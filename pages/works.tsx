import { VFC, useEffect } from 'react'
import Rellax from 'rellax'
import Image from 'next/image'
import Link from 'next/link'
import { Layout } from '../components/Layout'

const Works: VFC = () => {
  useEffect(() => {
    // Rellax JS Setting
    var rellax = new Rellax('.rellax')
  }, [])
  return (
    <Layout title="DaichiSato Portfolio | Works">
      <main className="l-page works_l">
        <div className="mv">
          <div className="mv__wrap">
            <h2 className="mv__ttl">Works</h2>
            <span className="mv__txt">制作について</span>
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
        {/* Contents */}
        <div className="contents">
          <ul className="contents__list">
            <li className="contents__list__item">
              <Link href="/works/ptybo">
                <a className="link">
                  <div className="visual">
                    <Image
                      src="/works/ptybo_main.jpg"
                      alt="Works"
                      width={1100}
                      height={560}
                    />
                  </div>
                  <div className="detail">
                    <h2 className="detail__ttl">
                      Ptybo｜今すぐ遊べるプレイヤーを探すゲーマーのパーティー募集サービス
                    </h2>
                    <p className="detail__tag">Webサービス</p>
                  </div>
                </a>
              </Link>
            </li>
            <li className="contents__list__item">
              <Link href="/works/flagup">
                <a className="link">
                  <div className="visual">
                    <Image
                      src="/works/flagup_main.jpg"
                      alt="Works"
                      width={1100}
                      height={560}
                    />
                  </div>
                  <div className="detail">
                    <h2 className="detail__ttl">
                      Flagup｜情報収集をもっと効率的かつ専門的に。
                    </h2>
                    <p className="detail__tag">モバイルアプリ</p>
                  </div>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </main>
    </Layout>
  )
}

export default Works
