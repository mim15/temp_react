import styles from '@/styles/navgation.module.scss'
import { getAuth, signOut } from 'firebase/auth'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  const [isModal, setIsModal] = useState(false)
  const ToggleBtn = isModal ? `${styles['active']} ${styles.ly_toggleBtn}` : styles.ly_toggleBtn
  const Togglemenu = isModal ? `${styles['active']} ${styles.sm_headerConts}` : styles.sm_headerConts
  return (
    <>
      <button className={styles.bl_signout} onClick={() => signOut(getAuth())}>
        SignOut
      </button>
      <button onClick={() => setIsModal(!isModal)} className={ToggleBtn}>
        <span className={styles.bl_toggleBtn} />
      </button>

      <div className={Togglemenu}>
        <ul className={styles.sm_headerConts_nav}>
          <li>
            <Link to="/about" className={styles.sm_headerConts_ttl}>
              About me
            </Link>
          </li>
          <li>
            <Link to="/portfolio" className={styles.sm_headerConts_ttl}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="/blog" className={styles.sm_headerConts_ttl}>
              Blog
            </Link>
          </li>
        </ul>
      </div>

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
