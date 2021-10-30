import { VFC, useEffect } from 'react'
import Rellax from 'rellax'
import Image from 'next/image'
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
                      href="https://www.twitch.tv/parme1"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <Image
                        loading="lazy"
                        src="/skills/index01.png"
                        alt="JaveScript"
                        width={135}
                        height={135}
                      />
                    </a>
                  </li>
                  <li className="skill-list__item">
                    <a
                      className="link"
                      href="https://www.twitch.tv/parme1"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <Image
                        loading="lazy"
                        src="/skills/index02.png"
                        alt="TypeScript"
                        width={135}
                        height={135}
                      />
                    </a>
                  </li>
                  <li className="skill-list__item">
                    <a
                      className="link"
                      href="https://www.twitch.tv/parme1"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <Image
                        loading="lazy"
                        src="/skills/index03.png"
                        alt="React"
                        width={135}
                        height={135}
                      />
                    </a>
                  </li>
                  <li className="skill-list__item">
                    <a
                      className="link"
                      href="https://www.twitch.tv/parme1"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <Image
                        loading="lazy"
                        src="/skills/index04.png"
                        alt="Next.js"
                        width={135}
                        height={135}
                      />
                    </a>
                  </li>
                  <li className="skill-list__item">
                    <a
                      className="link"
                      href="https://www.twitch.tv/parme1"
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
                      href="https://www.twitch.tv/parme1"
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
            </ul>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Skills
