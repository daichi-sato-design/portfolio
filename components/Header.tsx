import { VFC, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Header: VFC = () => {
  const [toggle, setToggle] = useState<boolean>(false)
  return (
    <>
      <header className="header">
        <h1 className="header-logo">
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
        </h1>
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
              <Link href="/media">
                <a className="link">Media</a>
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
          <div className="nav__toggle" onClick={() => setToggle(!toggle)}>
            <div className="line">
              <span></span>
              <span></span>
            </div>
            <span className="txt">Menu{toggle}</span>
          </div>
        </nav>
      </header>
      <div className={toggle ? 'd-nav -open' : 'd-nav'}>
        <div className="hd">
          <div className="header-logo">
            <Link href="/">
              <a className="link" onClick={() => setToggle(!toggle)}>
                <Image
                  src="/common/logo.svg"
                  alt="DaichiSato Portfolio"
                  width={350}
                  height={34}
                />
              </a>
            </Link>
          </div>
          <div className="toggle-btn" onClick={() => setToggle(!toggle)}>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <div className="d-nav__wrap">
          <div className="visual">
            <Image src="/common/d_img.svg" alt="Web" width={384} height={500} />
          </div>
          <div className="nav">
            <ul className="nav__pages">
              <li className="nav__pages__item">
                <Link href="/about">
                  <a className="link" onClick={() => setToggle(!toggle)}>
                    About
                  </a>
                </Link>
              </li>
              <li className="nav__pages__item">
                <Link href="/works">
                  <a className="link" onClick={() => setToggle(!toggle)}>
                    Works
                  </a>
                </Link>
              </li>
              <li className="nav__pages__item">
                <Link href="/skills">
                  <a className="link" onClick={() => setToggle(!toggle)}>
                    Skills
                  </a>
                </Link>
              </li>
              <li className="nav__pages__item">
                <Link href="/media">
                  <a className="link" onClick={() => setToggle(!toggle)}>
                    Media
                  </a>
                </Link>
              </li>
              <li className="nav__pages__item">
                <Link href="/contact">
                  <a className="link" onClick={() => setToggle(!toggle)}>
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
