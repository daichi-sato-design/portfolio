import { VFC, useEffect } from 'react'
import Rellax from 'rellax'
import Image from 'next/image'
import { Layout } from '../components/Layout'
import { useContactForm } from '../hooks/useContactForm'

const Contact: VFC = () => {
  useEffect(() => {
    // Rellax JS Setting
    var rellax = new Rellax('.rellax')
  }, [])

  const {
    editedContact,
    handleInputChange,
    handleTextAreaChange,
    handleSubmit,
    isErrorEmail,
  } = useContactForm()
  return (
    <Layout title="DaichiSato Portfolio | Contact">
      <main className="l-page contact">
        <div className="mv">
          <div className="mv__wrap">
            <h2 className="mv__ttl">Contact</h2>
            <span className="mv__txt">お問い合わせ</span>
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
                本サイト・サービス・メディアなどに関するご意見やお問い合わせなどに対応いたします。
                <br />
                お問い合わせに関するレスポンスが遅い場合、Twitterなど他メディアでのDMもご検討ください。
                <br />
                お問い合わせに早急に対応できない場合もあります。
              </p>
            </div>
          </div>
        </div>
        {/* FORM */}
        <div className="contents">
          <div className="contents__wrap">
            <form className="form" onSubmit={handleSubmit}>
              <div className="form__block">
                <label>氏名*</label>
                <div className="form__block__input">
                  <input
                    name="name"
                    type="text"
                    value={editedContact.name}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="form__block">
                <label>メールアドレス*</label>
                <div className="form__block__input">
                  <input
                    name="email"
                    type="text"
                    className={isErrorEmail ? 'validated' : null}
                    value={editedContact.email}
                    onChange={handleInputChange}
                  />
                  {isErrorEmail ? (
                    <p className="err-msg">無効なメールアドレスです</p>
                  ) : null}
                </div>
              </div>
              <div className="form__block">
                <label>お問い合わせ内容*</label>
                <div className="form__block__input">
                  <textarea
                    name="message"
                    rows={5}
                    value={editedContact.message}
                    onChange={handleTextAreaChange}
                  />
                </div>
              </div>
              <button
                className="submit-btn"
                type="submit"
                disabled={
                  !editedContact.name ||
                  !editedContact.email ||
                  !editedContact.message ||
                  isErrorEmail
                }
              >
                確認する
              </button>
            </form>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Contact
