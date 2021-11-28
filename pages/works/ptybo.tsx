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
    <Layout title="DaichiSato Portfolio | Ptybo">
      <main className="l-page works_d">
        <div className="mv">
          <div className="mv__visual">
            <div className="mv__visual__wrap">
              <Image
                src="/works/ptybo_main.jpg"
                alt="flagup"
                width={1100}
                height={560}
              />
            </div>
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
        <div className="contents px-50">
          <div className="contents__rows">
            <div className="detail">
              <div className="detail__hd">
                <div className="detail__hd__ttl">
                  <h2 className="ttl">Ptybo</h2>
                  <span className="category">マッチングサービス</span>
                </div>
                <p className="detail__hd__concept">
                  今すぐ遊べるプレイヤーを探すゲーマーのパーティー募集サービス
                </p>
              </div>
              <ul className="detail__block">
                {/* <li className="detail__block__item">
                  <h3 className="ttl">サービス紹介</h3>
                  <div className="body">
                    <p className="body__txt">
                      本サイト・サービス・メディアなどに関するご意見やお問い合わせなどに対応いたします。お問い合わせに関するレスポンスが遅い場合、Twitterなど他メディアでのDMもご検討ください。お問い合わせに早急に対応できない場合もあります。
                    </p>
                  </div>
                </li> */}
                {/* <li className="detail__block__item">
                  <h3 className="ttl">制作の目的</h3>
                  <div className="body">
                    <p className="body__txt">
                      本サイト・サービス・メディアなどに関するご意見やお問い合わせなどに対応いたします。お問い合わせに関するレスポンスが遅い場合、Twitterなど他メディアでのDMもご検討ください。お問い合わせに早急に対応できない場合もあります。
                    </p>
                  </div>
                </li> */}
                {/* <li className="detail__block__item">
                  <h3 className="ttl">工夫やこだわり</h3>
                  <div className="body">
                    <p className="body__txt">
                      本サイト・サービス・メディアなどに関するご意見やお問い合わせなどに対応いたします。お問い合わせに関するレスポンスが遅い場合、Twitterなど他メディアでのDMもご検討ください。お問い合わせに早急に対応できない場合もあります。
                    </p>
                  </div>
                </li> */}
                <li className="detail__block__item">
                  <h3 className="ttl">使用した技術</h3>
                  <ul className="skill-list">
                    <li className="skill-list__item">
                      <a
                        className="link"
                        href="https://developer.mozilla.org/ja/docs/Web/JavaScript"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <Image
                          loading="lazy"
                          src="/skills/javascript.png"
                          alt="JaveScript"
                          width={135}
                          height={135}
                        />
                      </a>
                    </li>
                    <li className="skill-list__item">
                      <a
                        className="link"
                        href="https://www.typescriptlang.org/"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <Image
                          loading="lazy"
                          src="/skills/typescript.png"
                          alt="TypeScript"
                          width={135}
                          height={135}
                        />
                      </a>
                    </li>
                    <li className="skill-list__item">
                      <a
                        className="link"
                        href="https://ja.reactjs.org/"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <Image
                          loading="lazy"
                          src="/skills/react.png"
                          alt="React"
                          width={135}
                          height={135}
                        />
                      </a>
                    </li>
                    <li className="skill-list__item">
                      <a
                        className="link"
                        href="https://nextjs.org/"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <Image
                          loading="lazy"
                          src="/skills/nextjs.png"
                          alt="Next.js"
                          width={135}
                          height={135}
                        />
                      </a>
                    </li>
                    <li className="skill-list__item">
                      <a
                        className="link"
                        href="https://tailwindcss.com/"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <Image
                          loading="lazy"
                          src="/skills/tailwindcss.png"
                          alt="Tailwind CSS"
                          width={135}
                          height={135}
                        />
                      </a>
                    </li>
                    <li className="skill-list__item">
                      <a
                        className="link"
                        href="https://golang.org/"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <Image
                          loading="lazy"
                          src="/skills/golang.png"
                          alt="Golang"
                          width={135}
                          height={135}
                        />
                      </a>
                    </li>
                    <li className="skill-list__item">
                      <a
                        className="link"
                        href="https://www.mongodb.com/atlas"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <Image
                          loading="lazy"
                          src="/skills/mongodb.png"
                          alt="MongoDB"
                          width={135}
                          height={135}
                        />
                      </a>
                    </li>
                    <li className="skill-list__item">
                      <a
                        className="link"
                        href="https://cloud.google.com/"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <Image
                          loading="lazy"
                          src="/skills/gcp.png"
                          alt="Google Cloud Platform"
                          width={135}
                          height={135}
                        />
                      </a>
                    </li>
                    <li className="skill-list__item">
                      <a
                        className="link"
                        href="https://jwt.io/"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <Image
                          loading="lazy"
                          src="/skills/jwt.png"
                          alt="jwt"
                          width={135}
                          height={135}
                        />
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="info px-50">
              <ul className="info__block">
                <li className="info__block__item">
                  <h3 className="ttl">日付</h3>
                  <p className="body">2021.10.01</p>
                </li>
                <li className="info__block__item">
                  <h3 className="ttl">仕様</h3>
                  <p className="body">WEBサービス</p>
                </li>
              </ul>
              <div className="section-btn">
                <a
                  href="https://ptybo.online/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  <span className="txt">制作サイトへ</span>
                  <div className="deco"></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Ptybo
