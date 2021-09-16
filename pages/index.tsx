import { VFC, useEffect } from 'react'
import Rellax from 'rellax'
import Link from 'next/link'
import Image from 'next/image'
import { Layout } from '../components/Layout'

const Home: VFC = () => {
  useEffect(() => {
    // Rellax JS Setting
    var rellax = new Rellax('.rellax')
  }, [])
  return (
    <Layout title="DaichiSato Portfolio | Home">
      <main className="top-page">
        <div className="mv">
          <div className="mv__wrap">
            <div className="catch">
              <h2 className="catch__ttl">
                <Image
                  src="/common/mv_ttl.svg"
                  alt="PARME.online"
                  width={1000}
                  height={122}
                />
              </h2>
              <p className="catch__txt">
                「クリエイター / ユーザー」両方楽しむ。
              </p>
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
          <div className="mv__bg02 rellax" data-rellax-speed="-3.6">
            <Image
              src="/common/bg_dotted01.svg"
              alt="Dotted"
              width={130}
              height={255}
            />
          </div>
          <div className="mv__bg03 rellax" data-rellax-speed="-1.25">
            <Image
              src="/common/bg_lights01.png"
              alt="Lights"
              width={270}
              height={185}
            />
          </div>
        </div>
        {/* ABOUT */}
        <section className="about">
          <div className="about__wrap">
            <div className="section-tag">
              <div className="section-tag__num">1</div>
              <div className="section-tag__ttl">Introduction</div>
            </div>
            <div className="about__contents">
              <div className="about__contents__hd">
                <h3 className="ttl">
                  小さな目標達成を
                  <br />
                  日々積み重ね、
                  <br />
                  継続と信念で
                  <br />
                  夢へと歩を進める。
                </h3>
              </div>
              <div className="section-detail">
                <p className="section-detail__body">
                  小さな目標達成や成功体験ですら、それまでにあった「数回の失敗」も後日談の笑い話に変えてしまう。そんな偉大な「達成」や「成功」の一番の近道は継続であると考え、決めた目標には小さな進捗であってもコツコツと積み重ねていきます。
                </p>
                <div className="section-btn">
                  <Link href="/about">
                    <a className="link">
                      <span className="txt">About</span>
                      <div className="deco"></div>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="about__bg01 rellax" data-rellax-speed="-1.25">
            <Image
              src="/common/bg_dotted02.svg"
              alt="Dotted"
              width={176}
              height={106}
            />
          </div>
          <div className="about__bg02 rellax" data-rellax-speed="-1.6">
            <Image
              src="/common/bg_dotted01.svg"
              alt="Dotted"
              width={130}
              height={255}
            />
          </div>
          <div className="about__bg03 rellax" data-rellax-speed="-2.25">
            <Image
              src="/common/bg_lights02.png"
              alt="Lights"
              width={170}
              height={140}
            />
          </div>
        </section>
        {/* WORKS */}
        <section className="works">
          <div className="works__wrap">
            <div className="visual">
              <Image
                src="/works/index_img.svg"
                alt="Web design"
                width={458}
                height={500}
              />
            </div>
            <div className="section-detail">
              <div className="section-tag">
                <div className="section-tag__num">2</div>
                <div className="section-tag__ttl">Works</div>
              </div>
              <h3 className="section-detail__ttl">
                企画から実装まで完結させる。
              </h3>
              <p className="section-detail__body">
                サービスのアイデアが浮かんだとき、それを企画に落とし込みデザインから実装までの完結させるようにしています。サービスの開発に100%の完成はないと考え、ユースケースをカバーしている場合にはまずリリースすることを心がけています。
              </p>
              <div className="section-btn">
                <Link href="/works">
                  <a className="link">
                    <span className="txt">Works</span>
                    <div className="deco"></div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="works__bg01 rellax" data-rellax-speed="-1.75">
            <Image
              src="/common/bg_lights03.png"
              alt="Lights"
              width={150}
              height={150}
            />
          </div>
          <div className="works__bg02 rellax" data-rellax-speed="-2.5">
            <Image
              src="/common/bg_planet02.png"
              alt="Planet"
              width={420}
              height={420}
            />
          </div>
        </section>
        {/* SKILLS */}
        <section className="skills">
          <div className="skills__wrap">
            <div className="section-detail">
              <div className="section-tag">
                <div className="section-tag__num">3</div>
                <div className="section-tag__ttl">Skills</div>
              </div>
              <h3 className="section-detail__ttl">
                スタンダードから
                <br />
                モダンな技術まで一通り。
              </h3>
              <p className="section-detail__body">
                デザイナーとしてUIやUXといったサービスの核心となる体験の設計から。エンジニアとして、フロントエンド・バックエンド・モバイルアプリを開発できる言語を広く学ぶことで、時間をなるべくかけずにアイデアを形にできるよう取り組んでいます。
              </p>
              <div className="section-btn">
                <Link href="/skills">
                  <a className="link">
                    <span className="txt">Skills</span>
                    <div className="deco"></div>
                  </a>
                </Link>
              </div>
            </div>
            <div className="visual">
              <div className="visual__item">
                <Image
                  src="/skills/index01.png"
                  alt="JaveScript"
                  width={120}
                  height={120}
                />
              </div>
              <div className="visual__item">
                <Image
                  src="/skills/index02.png"
                  alt="TypeScript"
                  width={120}
                  height={120}
                />
              </div>
              <div className="visual__item">
                <Image
                  src="/skills/index03.png"
                  alt="React"
                  width={120}
                  height={120}
                />
              </div>
              <div className="visual__item">
                <Image
                  src="/skills/index04.png"
                  alt="Next.js"
                  width={120}
                  height={120}
                />
              </div>
              <div className="visual__item">
                <Image
                  src="/skills/index05.png"
                  alt="Dart"
                  width={120}
                  height={120}
                />
              </div>
              <div className="visual__item">
                <Image
                  src="/skills/index06.png"
                  alt="Flutter"
                  width={120}
                  height={120}
                />
              </div>
              <div className="visual__item">
                <Image
                  src="/skills/index07.png"
                  alt="Golang"
                  width={120}
                  height={120}
                />
              </div>
              <div className="visual__item">
                <Image
                  src="/skills/index08.png"
                  alt="PostgreSQL"
                  width={120}
                  height={120}
                />
              </div>
              <div className="visual__item">
                <Image
                  src="/skills/index09.png"
                  alt="GraphQL"
                  width={120}
                  height={120}
                />
              </div>
            </div>
          </div>
          <div className="skills__bg01 rellax" data-rellax-speed="-2">
            <Image
              src="/common/bg_dotted04.svg"
              alt="Dotted"
              width={106}
              height={172}
            />
          </div>
          <div className="skills__bg02 rellax" data-rellax-speed="-1.5">
            <Image
              src="/common/bg_dotted03.svg"
              alt="Dotted"
              width={280}
              height={105}
            />
          </div>
        </section>
        {/* Challenge */}
        <section className="challenge">
          <div className="challenge__wrap">
            <div className="visual">
              <a
                href="https://www.twitch.tv/sarupopo3"
                target="_blank"
                rel="noopener noreferrer"
                className="visual__item"
              >
                <Image
                  src="/challenge/index01.png"
                  alt="Twitch"
                  width={200}
                  height={140}
                />
              </a>
              <a
                href="https://twitter.com/_daichisato"
                target="_blank"
                rel="noopener noreferrer"
                className="visual__item"
              >
                <Image
                  src="/challenge/index02.png"
                  alt="Twitter"
                  width={200}
                  height={140}
                />
              </a>
              <a
                href="https://www.instagram.com/_daichisato"
                target="_blank"
                rel="noopener noreferrer"
                className="visual__item"
              >
                <Image
                  src="/challenge/index03.png"
                  alt="Instagram"
                  width={200}
                  height={140}
                />
              </a>
              <div className="visual__item none">
                <Image
                  src="/challenge/index04.png"
                  alt="YouTube"
                  width={200}
                  height={140}
                />
              </div>
            </div>
            <div className="detail section-detail">
              <div className="section-tag">
                <div className="section-tag__num">４</div>
                <div className="section-tag__ttl">Challenge</div>
              </div>
              <h3 className="section-detail__ttl">
                「楽しそう」ならやってみる。
              </h3>
              <p className="section-detail__body">
                各メディアでの発信・配信など「楽しそう」と感じたことには、「とりあえずやってみる」ことを心がけています。それぞれの挑戦しているメディアをご紹介します。
              </p>
              <div className="section-btn">
                <Link href="/challenge">
                  <a className="link">
                    <span className="txt">Challenge</span>
                    <div className="deco"></div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="challenge__bg01 rellax" data-rellax-speed="-1">
            <Image
              src="/common/bg_lights04.png"
              alt="Lights"
              width={150}
              height={150}
            />
          </div>
          <div className="challenge__bg02 rellax" data-rellax-speed="-1.5">
            <Image
              src="/common/bg_lights05.png"
              alt="Lights"
              width={180}
              height={160}
            />
          </div>
        </section>
        {/* CONTACT */}
        <section className="contact">
          <div className="contact__wrap">
            <div className="section-detail">
              <div className="section-tag">
                <div className="section-tag__num">5</div>
                <div className="section-tag__ttl">Contact</div>
              </div>
              <h3 className="section-detail__ttl">お問い合わせ</h3>
              <p className="section-detail__body">
                本サイト・サービス・メディアなどに関するご意見やお問い合わせなどに対応いたします。お問い合わせに関するレスポンスが遅い場合、Twitterなど他メディアでのDMもご検討ください。お問い合わせに早急に対応できない場合もあります。
              </p>
              <div className="section-btn">
                <Link href="/contact">
                  <a className="link">
                    <span className="txt">Contact</span>
                    <div className="deco"></div>
                  </a>
                </Link>
              </div>
            </div>
            <div className="visual">
              <Image
                src="/contact/index_img.jpg"
                alt="Profile"
                width={440}
                height={440}
              />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default Home
