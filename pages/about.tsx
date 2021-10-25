import { VFC, useEffect } from 'react'
import Rellax from 'rellax'
import Image from 'next/image'
import { Layout } from '../components/Layout'

const About: VFC = () => {
  useEffect(() => {
    // Rellax JS Setting
    var rellax = new Rellax('.rellax')
  }, [])
  return (
    <Layout title="DaichiSato Portfolio | About">
      <main className="l-page about">
        <div className="mv">
          <div className="mv__wrap">
            <h2 className="mv__ttl">About</h2>
            <span className="mv__txt">私について</span>
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
                「自分のアイデアを形にできる」プログラミングの世界に高校ではじめて触れ、
                <br />
                卒業後には、専門学校で「ユーザーの体験を設計する」デザインについて学んできました。
                <br />
                プログラミングとデザインの知識を活かし「面白く便利なもの」を作れればと思います。
              </p>
            </div>
          </div>
        </div>
        {/* CONTENTS */}
        <div className="contents">
          <div className="contents__wrap">
            <div className="contents__visual">
              <Image
                src="/about/intro_img.svg"
                alt="人物イメージ"
                width={380}
                height={374}
              />
            </div>
            <ul className="contents__list">
              <li className="contents__list__item">
                <h3 className="ttl">Name</h3>
                <p className="body">佐藤 大地</p>
              </li>
              <li className="contents__list__item">
                <h3 className="ttl">Birthday</h3>
                <p className="body">1998.11.11</p>
              </li>
              <li className="contents__list__item">
                <h3 className="ttl">Hoby</h3>
                <p className="body">Game</p>
              </li>
              <li className="contents__list__item">
                <h3 className="ttl">Language</h3>
                <p className="body">Japanese</p>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default About
