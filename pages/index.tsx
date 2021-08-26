import { Layout } from '../components/Layout'

export default function Home() {
  return (
    <Layout title="DaichiSato Portfolio | Home">
      <main className="top-page">
        <div className="mv">
          <div className="mv__wrap">
            <div className="catch">
              <h2 className="catch__ttl">
                Beyond imagination<br/>
                with design
              </h2>
              <p className="catch__txt">デザインで想像力を超える。</p>
            </div>
          </div>
        </div>
        <section className="about">
          <div className="about__wrap">
            <div className="about__hd">
              <div className="section-tag">
                <div className="section-tag__num">1</div>
                <div className="section-tag__ttl">Introduction</div>
              </div>
              <h3 className="ttl">
                小さな目標達成を<br/>
                日々積み重ね、<br/>
                継続と信念で<br/>
                夢へと歩を進める。
              </h3>
            </div>
            <div className="about__body">
              <p className="txt">
                新しい時代の「経済性」と「社会性」が共存する豊かな循環を生み出す。WHEREのすべての活動は、その地づくりのために存在しています。「LOCAL LETTER」「SHARE by WHERE」「一棟貸し古民家 まつや邸」。人と地域、地域と企業をつなぎながら、共にあるべき未来を思考し、カタチにする。人と経済の持続的な循環を創出する、私たちの主な事業をご紹介します。
              </p>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}
