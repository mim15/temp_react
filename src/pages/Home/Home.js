import Layout from '@/components/Layout'
import React from 'react'
import { Link } from 'react-router-dom'
import styles from './home.module.scss'

export default function Home() {
  return (
    <>
      <Layout>
        <div className={styles.ly_body}>
          <div className={styles.ly_body_inner}>
            <h1 className={styles.bl_bodyTxt}>
              <span>Design</span>
              <span>is chewing gum</span>
              <span>for me</span>
            </h1>
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
      </Layout>
    </>
  )
}
