import { VFC, useEffect } from 'react'
import Rellax from 'rellax'
import Image from 'next/image'
import { Layout } from '../components/Layout'

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
                日々の発見や出来事、意見や感想、好きなことの発信をさまざまなSNSで行っています。
                <br />
                よろしければ、フォローよろしくお願いいたします。
              </p>
            </div>
          </div>
        </div>
        {/* CONTENTS */}
        <div className="contents">
          <div className="contents__wrap">
            <ul className="contents__list">
              <li className="contents__list__item">
                <div className="visual">
                  <Image
                    loading="lazy"
                    src="/media/index02.png"
                    alt="Twitter"
                    width={200}
                    height={140}
                  />
                </div>
                <div className="detail">
                  <h2 className="detail__ttl">Twitter</h2>
                  <p className="detail__body">
                    興味ある事柄の情報収集に使用しています。新規サービスリリースの発信や面白いツイートの拡散なども行っていますので、ぜひフォローしていただければ幸いです。
                  </p>
                  <div className="section-btn">
                    <a
                      href="https://twitter.com/_daichisato"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link"
                    >
                      <span className="txt">Follow</span>
                      <div className="deco"></div>
                    </a>
                  </div>
                </div>
              </li>

              <li className="contents__list__item">
                <div className="visual">
                  <Image
                    loading="lazy"
                    src="/media/index03.png"
                    alt="Instagram"
                    width={200}
                    height={140}
                  />
                </div>
                <div className="detail">
                  <h2 className="detail__ttl">Instagram</h2>
                  <p className="detail__body">
                    ショップやイベントの情報収集に使用しています。自身でもお出かけやイベントに関する写真の投稿に使用しています。興味があればフォローしていただければ幸いです。
                  </p>
                  <div className="section-btn">
                    <a
                      href="https://www.instagram.com/_daichisato"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link"
                    >
                      <span className="txt">Follow</span>
                      <div className="deco"></div>
                    </a>
                  </div>
                </div>
              </li>
              <li className="contents__list__item">
                <div className="visual">
                  <Image
                    loading="lazy"
                    src="/media/index04.png"
                    alt="Facebook"
                    width={200}
                    height={140}
                  />
                </div>
                <div className="detail">
                  <h2 className="detail__ttl">Facebook</h2>
                  <p className="detail__body">
                    使用しているSNSの中では更新頻度は少なめです。近況の報告などメッセージのやり取りで主に用いています。そのため、自分からの投稿などはあまり行っておりません。
                  </p>
                  <div className="section-btn">
                    <a
                      href="https://www.facebook.com/people/%E4%BD%90%E8%97%A4%E5%A4%A7%E5%9C%B0/100016189206932/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link"
                    >
                      <span className="txt">Follow</span>
                      <div className="deco"></div>
                    </a>
                  </div>
                </div>
              </li>
              <li className="contents__list__item">
                <div className="visual">
                  <Image
                    loading="lazy"
                    src="/media/index01.png"
                    alt="Twitch"
                    width={200}
                    height={140}
                  />
                </div>
                <div className="detail">
                  <h2 className="detail__ttl">Twitch</h2>
                  <p className="detail__body">
                    元はゲーム配信を見る立場のみでしたが、自分もやってみようと思いはじめました。配信頻度は多くはありませんが好きなゲーム（主にFPSなど）を楽しくプレイしていきます。
                  </p>
                  <div className="section-btn">
                    <a
                      href="https://www.twitch.tv/parme1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link"
                    >
                      <span className="txt">Follow</span>
                      <div className="deco"></div>
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Media
