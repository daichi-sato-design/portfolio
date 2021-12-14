import { VFC, useEffect } from 'react'
import Rellax from 'rellax'
import Image from 'next/image'
import { Layout } from '../../components/Layout'

const Flagup: VFC = () => {
  useEffect(() => {
    // Rellax JS Setting
    var rellax = new Rellax('.rellax')
  }, [])
  return (
    <Layout title="DaichiSato Portfolio | Flagup">
      <main className="l-page works_d">
        <div className="mv">
          <div className="mv__visual">
            <div className="mv__visual__wrap">
              <Image
                src="/works/flagup_main.jpg"
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
                  <h2 className="ttl">Flagup</h2>
                  <span className="category">モバイルアプリ</span>
                </div>
                <p className="detail__hd__concept">
                  情報収集をもっと効率的かつ専門的に。
                </p>
              </div>
              <ul className="detail__block">
                <li className="detail__block__item">
                  <h3 className="ttl">サービス紹介</h3>
                  <div className="body">
                    <p className="body__txt">
                      投稿内容に「テーマ」を設定し発信するSNSサービスです。投稿がカテゴライズされることで情報収集が容易になりブログのような専門性に特化したSNSを目指しました。手軽に専門的な発信を「テーマ」で検索できるのでアカウントの信憑性も可視化できるようになります。「名刺のようなSNS」になることを目指し制作しました。
                    </p>
                  </div>
                </li>
                <li className="detail__block__item">
                  <h3 className="ttl">制作の目的</h3>
                  <div className="body">
                    <p className="body__txt">
                      現状のSNSでは、さまざまな発信が一つのアカウントから投稿されており投稿を読み直すときに気になる情報が興味のない投稿によって埋もれてしまい見つけられない問題がありました。Flagupでは、アカウントの発信に「テーマ」を設定するので「得意分野」や「専門性」が可視化されるようになります。昨今見られるインフルエンサーの多すぎる肩書などの信憑性に関する不安を払拭できるSNSを目指し制作しています。
                    </p>
                  </div>
                </li>
                <li className="detail__block__item">
                  <h3 className="ttl">工夫やこだわり</h3>
                  <div className="body">
                    <p className="body__txt">
                      「フォロー」や「いいね」、「プロフィール」などのSNSの核となる既存の機能は受け継ぎ、投稿に「テーマ」という概念を新しく加えました。「テーマ」について継続的に発信していることが外部から数値で認知することができるようになり、信憑性を確かめる指標となります。また、「テーマ」に「ジャンル」を指定することができ、新規ユーザーは「ジャンル」から検索をすることで気になる「テーマ」を見つけやすくなるように取り組みました。
                    </p>
                  </div>
                </li>
                <li className="detail__block__item">
                  <h3 className="ttl">使用した技術</h3>
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
                  </ul>
                </li>
              </ul>
            </div>
            <div className="info px-50">
              <ul className="info__block">
                <li className="info__block__item">
                  <h3 className="ttl">日付</h3>
                  <p className="body">2021.05.01</p>
                </li>
                <li className="info__block__item">
                  <h3 className="ttl">仕様</h3>
                  <p className="body">SNS</p>
                </li>
                <li className="info__block__item">
                  <h3 className="ttl">制作</h3>
                  <p className="body">1人</p>
                </li>
                <li className="info__block__item">
                  <h3 className="ttl">担当</h3>
                  <ul className="body-list">
                    <li className="body-list__txt">企画</li>
                    <li className="body-list__txt">デザイン</li>
                    <li className="body-list__txt">プログラム</li>
                  </ul>
                </li>
              </ul>
              <div className="stopping-btn">
                <span className="txt">配信を停止しています</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Flagup
