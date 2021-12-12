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
                  <span className="category">Webサービス</span>
                </div>
                <p className="detail__hd__concept">
                  今すぐ遊べるプレイヤーを探すゲーマーのパーティー募集サービス
                </p>
              </div>
              <ul className="detail__block">
                <li className="detail__block__item">
                  <h3 className="ttl">サービス紹介</h3>
                  <div className="body">
                    <p className="body__txt">
                      ゲームで誰かと遊びたいユーザー同士をリアルタイムでマッチングするサービスです。マッチング後にサービス内で登録したDiscodeのIDを共有し各ユーザーがボイスチャットを繋いで遊ぶきっかけを作ります。
                    </p>
                  </div>
                </li>
                <li className="detail__block__item">
                  <h3 className="ttl">制作の目的</h3>
                  <div className="body">
                    <p className="body__txt">
                      現状のゲームフレンドを探すサービスは掲示板形式が多く、フレンドの募集を開始してからいつ返信がくるのか待ち続けるストレスがありました。そのストレスを解消するためリアルタイムに特化し「今すぐ」マッチングできるサービスを目指し開発しました。
                    </p>
                  </div>
                </li>
                <li className="detail__block__item">
                  <h3 className="ttl">工夫やこだわり</h3>
                  <div className="body">
                    <p className="body__txt">
                      リアルタイムに特化するため募集は「3分・5分・10分」に制限し、募集中のカードにカウントダウンを表示しました。また、ユーザーはマッチングまでの早さを目的に当サービスを利用すると考えたため、募集をかけるフォームはチェックリストやセレクトボックスを多用し簡単に募集ができるようにし、募集に申し込む手続きも確認画面を承認するだけの手軽さに設計しました。
                    </p>
                  </div>
                </li>
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
                  <p className="body">マッチングサービス</p>
                </li>
                <li className="info__block__item">
                  <h3 className="ttl">制作</h3>
                  <p className="body">2人</p>
                </li>
                <li className="info__block__item">
                  <h3 className="ttl">担当</h3>
                  <ul className="body-list">
                    <li className="body-list__txt">デザイン</li>
                    <li className="body-list__txt">プログラム</li>
                  </ul>
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
