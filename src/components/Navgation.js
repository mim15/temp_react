import { getAuth, signOut } from 'firebase/auth'
import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/navgation.module.scss'

const Nav = () => {
  return (
    <>
      <button className={styles.signout} onClick={() => signOut(getAuth())}>
        Sign out
      </button>
      <button className={styles.ly_toggleBtn}>
        <span className={styles.bl_toggleBtn} />
      </button>
      <ul className={styles.bl_headerConts_nav}>
        <li>
          <Link to="/about" className={styles.bl_headerConts_ttl}>
            About me
          </Link>
        </li>
        <li>
          <Link to="/portfolio" className={styles.bl_headerConts_ttl}>
            Portfolio
          </Link>
        </li>
        <li>
          <Link to="/blog" className={styles.bl_headerConts_ttl}>
            Blog
          </Link>
        </li>
      </ul>
    </>
  )
}

export default Nav
