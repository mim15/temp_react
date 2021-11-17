import * as hubit from '@/assets/animation/hubit.json'
import React from 'react'
import Lottie from 'react-lottie'
import { Link } from 'react-router-dom'
import styles from './home.module.scss'

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: hubit.default,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}

export default function Home() {
  const uni_width = 500
  return (
    <>
      <div className={styles.ly_body}>
        <div className={styles.ly_body_inner}>
          <h1 className={styles.bl_body_ttl}>
            <span className={styles.bl_body_span}>Design</span>
            <span className={styles.bl_body_span}>is chewing gum</span>
            <span className={styles.bl_body_span}>for me</span>
          </h1>
          <div className={styles.test}>
            <Lottie options={defaultOptions} width={uni_width} height={500} />
          </div>
          <nav className={styles.bl_bodyConts}>
            <ul className={styles.bl_bodyConts_nav}>
              <li>
                <Link to="/about" className={styles.bl_bodyConts_ttl}>
                  About me
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className={styles.bl_bodyConts_ttl}>
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/blog" className={styles.bl_bodyConts_ttl}>
                  Blog
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}
