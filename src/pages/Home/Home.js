import Layout from '@/components/Layout'
import React from 'react'
import { Link } from 'react-router-dom'
import styles from './home.module.scss'

export default function Home() {
  const text = 'Design\nis chewing gum\nfor me'
  return (
    <>
      <Layout>
        <div className={styles.ly_body}>
          <div className={styles.ly_body_inner}>
            <h1 className={styles.bl_bodyTxt}>
              {text.split('\n').map((i, key) => {
                return <div key={key}>{i}</div>
              })}
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
