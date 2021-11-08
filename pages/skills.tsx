import { VFC, useEffect } from 'react'
import Rellax from 'rellax'
import Image from 'next/image'
import Link from 'next/link'
import { Layout } from '../components/Layout'

const Skills: VFC = () => {
  useEffect(() => {
    // Rellax JS Setting
    var rellax = new Rellax('.rellax')
  }, [])
  return (
    <Layout title="DaichiSato Portfolio | Skills">
      <main className="l-page skills">
        <div className="mv">
          <div className="mv__wrap">
            <h2 className="mv__ttl">Skills</h2>
            <span className="mv__txt">技術について</span>
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
                フロントエンド・バックエンド・モバイルアプリなど制作目標に応じて幅広く学習してきました。
                <br />
                これまで学んできたスキルをカテゴリーごとにご紹介いたします。
              </p>
            </div>
          </div>
        </div>
        {/* CONTENTS */}
        <div className="contents">
          <div className="contents__wrap">
            <ul className="contents__list">
              <li className="contents__list__block">
                <h2 className="skill-ttl">フロントエンド</h2>
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
                      href="https://redux.js.org/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <Image
                        loading="lazy"
                        src="/skills/redux.png"
                        alt="Redux"
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
                      href="https://webpack.js.org/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <Image
                        loading="lazy"
                        src="/skills/webpack.png"
                        alt="Sass"
                        width={135}
                        height={135}
                      />
                    </a>
                  </li>
                  <li className="skill-list__item">
                    <a
                      className="link"
                      href="https://sass-lang.com/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <Image
                        loading="lazy"
                        src="/skills/sass.png"
                        alt="Sass"
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
                </ul>
              </li>
              <li className="contents__list__block">
                <h2 className="skill-ttl">バックエンド</h2>
                <ul className="skill-list">
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
                      href="https://nodejs.org/ja/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <Image
                        loading="lazy"
                        src="/skills/nodejs.png"
                        alt="nodejs"
                        width={135}
                        height={135}
                      />
                    </a>
                  </li>
                </ul>
              </li>
              <li className="contents__list__block">
                <h2 className="skill-ttl">モバイルアプリ</h2>
                <ul className="skill-list">
                  <li className="skill-list__item">
                    <a
                      className="link"
                      href="https://dart.dev/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <Image
                        loading="lazy"
                        src="/skills/dart.png"
                        alt="Dart"
                        width={135}
                        height={135}
                      />
                    </a>
                  </li>
                  <li className="skill-list__item">
                    <a
                      className="link"
                      href="https://flutter.dev/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <Image
                        loading="lazy"
                        src="/skills/flutter.png"
                        alt="Flutter"
                        width={135}
                        height={135}
                      />
                    </a>
                  </li>
                </ul>
              </li>
              <li className="contents__list__block">
                <h2 className="skill-ttl">データベース / その他</h2>
                <ul className="skill-list">
                  <li className="skill-list__item">
                    <a
                      className="link"
                      href="https://www.postgresql.org/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <Image
                        loading="lazy"
                        src="/skills/postgresql.png"
                        alt="PostgreSQL"
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
                      href="https://firebase.google.com/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <Image
                        loading="lazy"
                        src="/skills/firebase.png"
                        alt="Firebase"
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
                      href="https://hasura.io/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <Image
                        loading="lazy"
                        src="/skills/hasura.png"
                        alt="Hasura"
                        width={135}
                        height={135}
                      />
                    </a>
                  </li>
                  <li className="skill-list__item">
                    <a
                      className="link"
                      href="https://graphql.org/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <Image
                        loading="lazy"
                        src="/skills/graphql.png"
                        alt="GraqhQL"
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
        </div>
        {/* MESSAGE */}
        <div className="message">
          <div className="message__wrap">
            <div className="detail">
              <h2 className="detail__ttl">スキルを身に着け、制作へ。</h2>
              <p className="detail__body">
                アイデアが浮かんだ時にスキルがあればそのアイデアをかたちにできます。もちろんスキルが足りないときもありますが、足りないスキルをその都度学ぶことで自分の可能性が広がると考えています。
              </p>
            </div>
            <div className="section-btn">
              <Link href="/works">
                <a className="link -bg_transparent">
                  <span className="txt">Works</span>
                  <div className="deco"></div>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Skills
