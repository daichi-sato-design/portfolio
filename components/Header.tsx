import { VFC } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Header:VFC = () => {
  return (
    <header className="header">
      <h1 className="logo">
        <Link href="/">
          <a className="link">
            <Image src="/common/logo.svg" alt="DaichiSato Portfolio" width={350} height={34} />
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
              <Image src="/common/h_twitter.svg" alt="Twitter" width={22} height={22} />
            </a>
          </li>
          <li className="nav__sns__item">
            <a
              href="https://www.instagram.com/s.dai_1111/"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              <Image src="/common/h_instagram.svg" alt="Instagram" width={22} height={22} />
            </a>
          </li>
          <li className="nav__sns__item">
            <a
              href="https://github.com/daichi-sato-design"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              <Image src="/common/h_github-brands.svg" alt="Github" width={22} height={22} />
            </a>
          </li>
        </ul>
        <div className="nav__toggle">
          <div className="line">
            <span></span>
            <span></span>
          </div>
          <p className="txt">Menu</p>
        </div>
      </nav>
    </header>
  )
}

export default Header;