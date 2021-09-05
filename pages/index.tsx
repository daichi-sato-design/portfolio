import { Layout } from '../components/Layout'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <Layout title="DaichiSato Portfolio | Home">
      <main className="top-page">
        <div className="mv">
          <div className="mv__wrap">
            <div className="catch">
              <h2 className="catch__ttl">
                <div className="img-box">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1000" height="122" viewBox="0 0 1000 122">
                    <path className="a" d="M-486.007-64h9.424q15.659,0,15.659-13.476t-15.659-13.476h-9.424Zm0,58.491h-28.418V-113.6h45.237q18.414,0,28.2,9.462t9.787,26.665q0,17.2-9.787,26.665t-28.2,9.462h-16.819Zm111.643-40.141-12.759-35.984-12.759,35.984Zm7.539,21.361h-40.6l-6.525,18.78h-30.3L-402.637-113.6h31.028L-330-5.511h-30.3Zm73.365-41h5.365q8.409,0,12.9-3.441t4.495-9.892q0-6.451-4.495-9.892t-12.9-3.441h-5.365Zm62.491,59.781h-35.378l-27.113-41.575V-5.511h-28.418V-113.6h44.222a43.848,43.848,0,0,1,15.949,2.652,30.894,30.894,0,0,1,11.237,7.24A30.474,30.474,0,0,1-243.8-93.1a36.6,36.6,0,0,1,2.247,12.9q0,12.329-6.017,20t-17.761,10.394Zm6.96,0L-205.45-113.6h28.128l21.894,57.631L-133.68-113.6h28.128L-86.993-5.511h-28.273l-9.424-62.219L-150.5-5.511h-11.309l-24.5-62.219-9.424,62.219Zm208.5-84.3H-49.3v18.063h31.9v23.8H-49.3v18.637h33.783v23.8h-62.2V-113.6h62.2ZM-3.188-19.273a16.559,16.559,0,0,1,1.3-6.523,16.552,16.552,0,0,1,3.625-5.376,16.766,16.766,0,0,1,5.437-3.584,17.079,17.079,0,0,1,6.6-1.29,17.079,17.079,0,0,1,6.6,1.29,16.766,16.766,0,0,1,5.437,3.584A16.552,16.552,0,0,1,29.435-25.8a16.559,16.559,0,0,1,1.3,6.523,16.559,16.559,0,0,1-1.3,6.523A16.552,16.552,0,0,1,25.81-7.374,16.766,16.766,0,0,1,20.373-3.79a17.079,17.079,0,0,1-6.6,1.29,17.079,17.079,0,0,1-6.6-1.29A16.766,16.766,0,0,1,1.741-7.374,16.552,16.552,0,0,1-1.883-12.75,16.559,16.559,0,0,1-3.188-19.273Zm66.7-23.368a16.5,16.5,0,0,0,1.377,6.81,18.231,18.231,0,0,0,3.625,5.376,15.956,15.956,0,0,0,5.365,3.584,17.079,17.079,0,0,0,6.6,1.29,17.079,17.079,0,0,0,6.6-1.29,15.956,15.956,0,0,0,5.365-3.584,18.231,18.231,0,0,0,3.625-5.376A16.151,16.151,0,0,0,97.435-42.5a15.808,15.808,0,0,0-1.377-6.523A18.23,18.23,0,0,0,92.433-54.4a15.956,15.956,0,0,0-5.365-3.584,17.079,17.079,0,0,0-6.6-1.29,17.079,17.079,0,0,0-6.6,1.29A15.956,15.956,0,0,0,68.51-54.4a18.522,18.522,0,0,0-3.625,5.3A15.321,15.321,0,0,0,63.507-42.641Zm-27.693-.287A35.448,35.448,0,0,1,39.149-58.2a37.536,37.536,0,0,1,9.279-12.329,44.231,44.231,0,0,1,14.137-8.243,51.539,51.539,0,0,1,17.906-3.011A52.228,52.228,0,0,1,98.233-78.84a44.082,44.082,0,0,1,14.209,8.172A36.69,36.69,0,0,1,121.794-58.2a37.748,37.748,0,0,1,3.335,15.985,37.066,37.066,0,0,1-3.407,15.985,37.975,37.975,0,0,1-9.352,12.472,42,42,0,0,1-14.282,8.1A55.153,55.153,0,0,1,80.036-2.787,52.776,52.776,0,0,1,62.347-5.654a40.927,40.927,0,0,1-13.992-8.172,37.931,37.931,0,0,1-9.207-12.687A39.427,39.427,0,0,1,35.814-42.928ZM137.308-79.055h26.243v9.318q5.365-6.451,10.874-8.673a34.365,34.365,0,0,1,12.9-2.222,32.559,32.559,0,0,1,13.412,2.509,26.719,26.719,0,0,1,9.5,7.1,20.311,20.311,0,0,1,4.35,8.315,42.842,42.842,0,0,1,1.16,10.465V-5.511H189.5v-37.13a39.543,39.543,0,0,0-.8-8.817,10.884,10.884,0,0,0-2.827-5.376,9.961,9.961,0,0,0-3.915-2.437,14.73,14.73,0,0,0-4.64-.717q-6.67,0-10.222,3.942t-3.552,11.254V-5.511H137.308ZM256.925-124.5V-5.511H230.682V-124.5Zm41.322,45.445V-5.511H272V-79.055ZM270.264-107.3a13.976,13.976,0,0,1,1.16-5.663,14.865,14.865,0,0,1,3.19-4.659,15.051,15.051,0,0,1,4.712-3.154,14.413,14.413,0,0,1,5.727-1.147,14.413,14.413,0,0,1,5.727,1.147,15.051,15.051,0,0,1,4.712,3.154,14.866,14.866,0,0,1,3.19,4.659,13.976,13.976,0,0,1,1.16,5.663,13.976,13.976,0,0,1-1.16,5.663,14.865,14.865,0,0,1-3.19,4.659,15.051,15.051,0,0,1-4.712,3.154,14.414,14.414,0,0,1-5.727,1.147,14.414,14.414,0,0,1-5.727-1.147,15.051,15.051,0,0,1-4.712-3.154,14.865,14.865,0,0,1-3.19-4.659A13.976,13.976,0,0,1,270.264-107.3Zm43.062,28.242h26.243v9.318q5.365-6.451,10.874-8.673a34.364,34.364,0,0,1,12.9-2.222,32.559,32.559,0,0,1,13.412,2.509,26.719,26.719,0,0,1,9.5,7.1,20.311,20.311,0,0,1,4.35,8.315,42.84,42.84,0,0,1,1.16,10.465V-5.511H365.523v-37.13a39.543,39.543,0,0,0-.8-8.817,10.884,10.884,0,0,0-2.827-5.376,9.96,9.96,0,0,0-3.915-2.437,14.73,14.73,0,0,0-4.64-.717q-6.67,0-10.222,3.942t-3.552,11.254V-5.511H313.326ZM461.072-52.963a15.584,15.584,0,0,0-5.365-8.745,15.137,15.137,0,0,0-9.859-3.3,15.145,15.145,0,0,0-9.932,3.154,14.234,14.234,0,0,0-4.857,8.888ZM430.334-37.91q0,16.773,15.949,16.773,8.554,0,12.9-6.881H484.56Q476.875-2.787,446.138-2.787a51,51,0,0,1-17.254-2.8,38.6,38.6,0,0,1-13.412-7.957,35.458,35.458,0,0,1-8.627-12.329A40.687,40.687,0,0,1,403.8-41.924a44.968,44.968,0,0,1,2.9-16.558,34.79,34.79,0,0,1,8.264-12.544,36.683,36.683,0,0,1,12.977-7.957,49.589,49.589,0,0,1,17.181-2.8,48.527,48.527,0,0,1,16.964,2.8,34.381,34.381,0,0,1,12.759,8.1,35.131,35.131,0,0,1,7.974,12.974,50.866,50.866,0,0,1,2.755,17.275v2.724Z" transform="translate(514.425 124.5)" />
                  </svg>
                </div>
              </h2>
              <p className="catch__txt">「クリエイター / ユーザー」両方楽しむ。</p>
            </div>
          </div>
          <div className="mv__bg01">
            <Image src="/common/bg_planet01.png" alt="Planet" width={690} height={690} />
          </div>
          <div className="mv__bg02">
            <Image src="/index/mv_dotted.svg" alt="Dotted" width={130} height={255} />
          </div>
          <div className="mv__bg03">
            <Image src="/common/bg_lights01.png" alt="Lights" width={270} height={185} />
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
                  小さな目標達成を<br/>
                  日々積み重ね、<br/>
                  継続と信念で<br/>
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
        </section>
        {/* WORKS */}
        <section className="works">
          <div className="works__wrap">
            <div className="visual">
              <Image src="/index/works_slide01.jpg" alt="Slider01" width={620} height={400} />
            </div>
            <div className="detail section-detail">
              <div className="section-tag">
                <div className="section-tag__num">2</div>
                <div className="section-tag__ttl">Works</div>
              </div>
              <h3 className="section-detail__ttl">企画から実装まで完結させる。</h3>
              <p className="section-detail__body">
                サービスのアイデアが浮かんだとき、それを企画に落とし込みデザインから実装までの完結させるようにしています。サービスの開発に100%の完成はないと考え、ユースケースをカバーしている場合にはまずリリースすることを心がけています。
              </p>
              <div className="section-btn">
                <Link href="/workd">
                  <a className="link">
                    <span className="txt">Works</span>
                    <div className="deco"></div>
                  </a>
                </Link>
              </div>
            </div>
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
                スタンダードから<br />
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
                <Image src="/skills/index01.png" alt="JaveScript" width={120} height={120} />
              </div>
              <div className="visual__item">
                <Image src="/skills/index02.png" alt="TypeScript" width={120} height={120} />
              </div>
              <div className="visual__item">
                <Image src="/skills/index03.png" alt="React" width={120} height={120} />
              </div>
              <div className="visual__item">
                <Image src="/skills/index04.png" alt="Next.js" width={120} height={120} />
              </div>
              <div className="visual__item">
                <Image src="/skills/index05.png" alt="Dart" width={120} height={120} />
              </div>
              <div className="visual__item">
                <Image src="/skills/index06.png" alt="Flutter" width={120} height={120} />
              </div>
              <div className="visual__item">
                <Image src="/skills/index07.png" alt="Golang" width={120} height={120} />
              </div>
              <div className="visual__item">
                <Image src="/skills/index08.png" alt="PostgreSQL" width={120} height={120} />
              </div>
              <div className="visual__item">
                <Image src="/skills/index09.png" alt="GraphQL" width={120} height={120} />
              </div>
            </div>
          </div>
        </section>
        {/* Challenge */}
        <section className="challenge">
          <div className="challenge__wrap">
            <div className="visual">
              <a
                href="https://www.twitch.tv/sarupopo3"
                target="_blank"
                className="visual__item"
              >
                <Image src="/challenge/index01.png" alt="Twitch" width={200} height={140} />
              </a>
              <a
                href="https://twitter.com/_daichisato"
                target="_blank"
                className="visual__item"
              >
                <Image src="/challenge/index02.png" alt="Twitter" width={200} height={140} />
              </a>
              <a
                href="https://www.instagram.com/_daichisato"
                target="_blank"
                className="visual__item"
              >
                <Image src="/challenge/index03.png" alt="Instagram" width={200} height={140} />
              </a>
              <div className="visual__item none">
                <Image src="/challenge/index04.png" alt="YouTube" width={200} height={140} />
              </div>
            </div>
            <div className="detail section-detail">
              <div className="section-tag">
                <div className="section-tag__num">４</div>
                <div className="section-tag__ttl">Challenge</div>
              </div>
              <h3 className="section-detail__ttl">「楽しそう」なら挑戦してみる。</h3>
              <p className="section-detail__body">
                メディアでの発信・配信などハードルが高いようなことでも、「失敗してもあとで笑い話になる」と考え挑戦していきます。そんな挑戦しているメディアをご紹介します。
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
        </section>
        {/* CONTACT */}
        <section className="contact">
          <div className="contact__wrap">
            <div className="section-detail">
              <div className="section-tag">
                <div className="section-tag__num">5</div>
                <div className="section-tag__ttl">Contact</div>
              </div>
              <h3 className="section-detail__ttl">
                お問い合わせ
              </h3>
              <p className="section-detail__body">
                本サイト・サービス・メディアなどに関するご意見やお問い合わせなどに対応いたします。お問い合わせに関するレスポンスが遅い場合、Twitterなど他メディアでのDMもご検討ください。お問い合わせに早急に対応できない場合もあります。
              </p>
              <div className="section-btn">
                <Link href="/skills">
                  <a className="link">
                    <span className="txt">Contact</span>
                    <div className="deco"></div>
                  </a>
                </Link>
              </div>
            </div>
            <div className="visual">
              <Image src="/contact/index_img.jpg" alt="Profile" width={440} height={440} />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}
