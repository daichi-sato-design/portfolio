import { VFC, useEffect } from 'react'
import Rellax from 'rellax'
import Image from 'next/image'
import Link from 'next/link'
import { Layout } from '../components/Layout'
import { useContactForm } from '../hooks/useContactForm'

const ContactConfirm: VFC = () => {
  useEffect(() => {
    // Rellax JS Setting
    var rellax = new Rellax('.rellax')
  }, [])

  const { editedContact, handleSendContact, isErrorEmail } = useContactForm()
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
        {/* FORM-CONFIRM */}
        <div className="contents">
          <div className="contents__wrap">
            <div className="form-confirm">
              <div className="form-confirm__block">
                <label>氏名*</label>
                <p className="form-confirm__block__input">
                  {editedContact.name}
                </p>
              </div>
              <div className="form-confirm__block">
                <label>メールアドレス*</label>
                <p className="form-confirm__block__input">
                  {editedContact.email}
                </p>
              </div>
              <div className="form-confirm__block">
                <label>お問い合わせ内容*</label>
                <p className="form-confirm__block__input">
                  {editedContact.message}
                </p>
              </div>
              <button
                className="submit-btn"
                onClick={handleSendContact}
                disabled={
                  !editedContact.name ||
                  !editedContact.email ||
                  !editedContact.message ||
                  isErrorEmail
                }
              >
                送信する
              </button>
              <Link href="/contact">
                <a className="edit-btn">修正する</a>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default ContactConfirm
