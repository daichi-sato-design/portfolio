import { VFC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Link as Scroll } from 'react-scroll'

const Footer: VFC = () => {
  return (
    <footer className="footer">
      <div className="footer__wrap">
        <div className="info">
          <div className="logo">
            <Link href="/">
              <a className="link">
                <Image
                  src="/common/logo.svg"
                  alt="DaichiSato Portfolio"
                  width={350}
                  height={34}
                />
              </a>
            </Link>
          </div>
          <small className="copy">
            ©DaichiSato Portfolio All Rights Reserved.
          </small>
        </div>
        <nav className="nav">
          <ul className="nav__pages">
            <li className="nav__pages__item">
              <Link href="/about">
                <a className="link">About</a>
              </Link>
            </li>
            <li className="nav__pages__item">
              <Link href="/works">
                <a className="link">Works</a>
              </Link>
            </li>
            <li className="nav__pages__item">
              <Link href="/skills">
                <a className="link">Skills</a>
              </Link>
            </li>
            <li className="nav__pages__item">
              <Link href="/challenge">
                <a className="link">Challenge</a>
              </Link>
            </li>
            <li className="nav__pages__item">
              <Link href="/contact">
                <a className="link">Contact</a>
              </Link>
            </li>
          </ul>
          <ul className="nav__sns">
            <li className="nav__sns__item">
              <a
                href="https://twitter.com/_daichisato"
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                <Image
                  src="/common/h_twitter.svg"
                  alt="Twitter"
                  width={22}
                  height={22}
                />
              </a>
            </li>
            <li className="nav__sns__item">
              <a
                href="https://www.instagram.com/_daichisato"
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                <Image
                  src="/common/h_instagram.svg"
                  alt="Instagram"
                  width={22}
                  height={22}
                />
              </a>
            </li>
            <li className="nav__sns__item">
              <a
                href="https://github.com/daichi-sato-design"
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                <Image
                  src="/common/h_github-brands.svg"
                  alt="Github"
                  width={22}
                  height={22}
                />
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="footer__btn">
        <Scroll className="footer__btn__wrap" to="container" smooth={true}>
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
        </Scroll>
      </div>
    </footer>
  )
}

export default Footer
